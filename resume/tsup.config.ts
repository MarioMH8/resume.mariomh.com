import { writeFile } from 'node:fs/promises';

import { ZodToTypescript } from '@duplojs/zod-to-typescript';
import { defineConfig } from 'tsup';
import { zodToJsonSchema } from 'zod-to-json-schema';

import schema, {
	award,
	basics,
	certificate,
	date,
	education,
	interest,
	language,
	location,
	meta,
	profile,
	project,
	publication,
	reference,
	skill,
	volunteer,
	work,
} from './schema';

async function writeResume() {
	const resume = await import('./src');
	const json = JSON.stringify(resume.default, undefined, 4);

	await writeFile('dist/resume.json', json);
}

async function writeSchema() {
	const generated = zodToJsonSchema(schema, {
		definitions: {
			iso8601: date,
		},
		name: 'Resume Schema',
		nameStrategy: 'title',
	});
	const json = JSON.stringify(generated, undefined, 4);

	await writeFile('dist/schema.json', json);
}

async function writeDefinitions() {
	const tsType = ZodToTypescript.convert(schema, {
		export: true,
		indentifiers: [
			{
				name: 'Award',
				zodSchema: award,
			},
			{
				name: 'SocialProfile',
				zodSchema: profile,
			},
			{
				name: 'Location',
				zodSchema: location,
			},
			{
				name: 'Basics',
				zodSchema: basics,
			},
			{
				name: 'Certificate',
				zodSchema: certificate,
			},
			{
				name: 'Education',
				zodSchema: education,
			},
			{
				name: 'Interest',
				zodSchema: interest,
			},
			{
				name: 'Language',
				zodSchema: language,
			},
			{
				name: 'Meta',
				zodSchema: meta,
			},
			{
				name: 'Project',
				zodSchema: project,
			},
			{
				name: 'Publication',
				zodSchema: publication,
			},
			{
				name: 'Reference',
				zodSchema: reference,
			},
			{
				name: 'Skill',
				zodSchema: skill,
			},
			{
				name: 'Volunteer',
				zodSchema: volunteer,
			},
			{
				name: 'Work',
				zodSchema: work,
			},
		],
		name: 'JSONResume',
	});

	const content = [tsType, 'declare const resume: JSONResume;', 'export default resume;'].join('\n\n');

	await writeFile('dist/index.d.ts', content);
	await writeFile('dist/index.d.cts', content);
}

export default defineConfig([
	{
		clean: true,
		dts: false,
		entry: ['src/index.ts'],
		format: ['esm'],
		minify: false,
		platform: 'neutral',
		sourcemap: false,
		splitting: false,
	},
	{
		clean: false,
		dts: false,
		entry: ['src/index.ts'],
		format: ['cjs'],
		minify: false,
		platform: 'neutral',
		sourcemap: false,
		splitting: false,
	},
	{
		clean: false,
		dts: false,
		entry: ['src/index.ts'],
		format: ['esm', 'cjs'],
		minify: true,
		onSuccess: async () => {
			await Promise.all([writeResume(), writeSchema(), writeDefinitions()]);
		},
		outExtension({ format }) {
			return {
				js: `.min.${format === 'esm' ? 'js' : 'cjs'}`,
			};
		},
		// platform: 'neutral',
		sourcemap: false,
		splitting: false,
	},
]);
