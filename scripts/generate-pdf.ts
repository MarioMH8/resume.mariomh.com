import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { chromium } from 'playwright-core';

import { PDF_FILE_NAME } from '../src/config';

const root = path.resolve(import.meta.dir, '..');
const distributionDirectory = path.join(root, 'dist');

const outFlagIndex = Bun.argv.indexOf('--out');
const outDirectoryName = outFlagIndex === -1 ? 'dist' : Bun.argv[outFlagIndex + 1];

if (outDirectoryName !== 'dist' && outDirectoryName !== 'public') {
	throw new Error('Pass `--out dist` or `--out public`.');
}

const outDirectory = path.join(root, outDirectoryName);
const outputPath = path.join(outDirectory, PDF_FILE_NAME);

async function isPresent(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath);

		return true;
	} catch {
		return false;
	}
}

if (!(await isPresent(path.join(distributionDirectory, 'index.html')))) {
	throw new Error('Run `bun run build` first: dist/index.html was not found.');
}

const server = Bun.serve({
	async fetch(request) {
		const { pathname } = new URL(request.url);
		const filePath = path.join(
			distributionDirectory,
			pathname === '/' ? 'index.html' : decodeURIComponent(pathname)
		);
		const file = Bun.file(filePath);

		if (!filePath.startsWith(distributionDirectory) || !(await file.exists())) {
			return new Response('Not found', { status: 404 });
		}

		return new Response(file);
	},
	port: 0,
});

const browser = await chromium.launch();

try {
	const page = await browser.newPage({ colorScheme: 'light' });

	await page.goto(new URL('/', server.url).href, { waitUntil: 'networkidle' });
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.waitForLoadState('networkidle');
	await page.evaluate(() => window.scrollTo(0, 0));
	await page.evaluate(async () => {
		await document.fonts.ready;

		return true;
	});

	await fs.mkdir(outDirectory, { recursive: true });
	await fs.writeFile(
		outputPath,
		await page.pdf({
			format: 'A4',
			preferCSSPageSize: true,
			printBackground: false,
		})
	);

	process.stdout.write(`Generated ${path.relative(root, outputPath)}\n`);
} finally {
	await browser.close();
	await server.stop(true);
}
