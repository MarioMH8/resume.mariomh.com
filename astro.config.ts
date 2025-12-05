import fs from 'node:fs';

import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import obfuscation from 'astro-mail-obfuscation';
import robotsTxt from 'astro-robots-txt';
import type { WebmanifestOptions } from 'astro-webmanifest';
import manifest from 'astro-webmanifest';
import paths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-relative-packages
const { default: resume } = await import('./resume/src');

const { name = '', shortName, summary } = resume.basics;

export default defineConfig({
	integrations: [
		{
			hooks: {
				'astro:build:done': ({ dir }) => {
					const cvContent = JSON.stringify(resume, undefined, '\t');
					const url = new URL('resume.json', dir);

					fs.writeFileSync(url, cvContent);
				},
			},
			name: 'astro-include-resume',
		},
		obfuscation(),
		sitemap(),
		robotsTxt(),
		manifest({
			background_color: '#001C16',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name,
			short_name: typeof shortName === 'string' ? shortName : undefined,
			start_url: '/',

			theme_color: '#c6f118',
		} as WebmanifestOptions),
		compress(),
	],
	prefetch: false,
	site: 'https://resume.mariomh.com',
	vite: {
		plugins: [tailwindcss(), paths()],
	},
});
