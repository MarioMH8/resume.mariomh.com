import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'bun:test';

interface PackageManifest {
	exports: Record<string, { default?: string }>;
}

const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as PackageManifest;

describe('@mariomh8/resume package exports', () => {
	test('exposes the resume JSON', () => {
		expect(manifest.exports['./resume.json']).toEqual({ default: './dist/resume.json' });
	});

	test('exposes the schema JSON and not the resume JSON by mistake', () => {
		expect(manifest.exports['./schema.json']).toEqual({ default: './dist/schema.json' });
	});
});
