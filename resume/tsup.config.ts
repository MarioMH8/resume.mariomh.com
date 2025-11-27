import { writeFile } from 'node:fs/promises';

import { defineConfig } from 'tsup';
import { z } from 'zod';
import type { TypeOverrideMap } from 'zod-to-ts';
import { createAuxiliaryTypeStore, createTypeAlias, printNode, zodToTs } from 'zod-to-ts';

import schema, {
	award,
	basics,
	certificate,
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

const schemas = [
	{
		name: 'Location',
		schema: location,
	},
	{
		name: 'Profile',
		schema: profile,
	},

	{
		name: 'Award',
		schema: award,
	},
	{
		name: 'Basics',
		schema: basics,
	},
	{
		name: 'Certificate',
		schema: certificate,
	},
	{
		name: 'Education',
		schema: education,
	},
	{
		name: 'Interest',
		schema: interest,
	},
	{
		name: 'Language',
		schema: language,
	},
	{
		name: 'Meta',
		schema: meta,
	},
	{
		name: 'Project',
		schema: project,
	},
	{
		name: 'Publication',
		schema: publication,
	},
	{
		name: 'Reference',
		schema: reference,
	},
	{
		name: 'Skill',
		schema: skill,
	},
	{
		name: 'Volunteer',
		schema: volunteer,
	},
	{
		name: 'Work',
		schema: work,
	},
	{
		name: 'JSONResume',
		schema,
	},
];

async function writeResume() {
	const resume = await import('./src');
	const json = JSON.stringify(resume.default, undefined, 4);

	await writeFile('dist/resume.json', json);
}

async function writeSchema() {
	const generated = z.toJSONSchema(schema, {
		cycles: 'ref',
		reused: 'ref',
		target: 'draft-7',
		unrepresentable: 'throw',
	});

	const json = JSON.stringify(generated, undefined, 4);

	await writeFile('dist/schema.json', json);
}

async function writeDefinitions() {
	const auxiliaryTypeStore = createAuxiliaryTypeStore();
	const overrides: TypeOverrideMap = new Map();

	const typeStrings: string[] = [];
	const typeNames = schemas.map(name => name.name);
	const exportTypeNames = `export type { ${typeNames.join(', ')} };`;

	for (const { name, schema } of schemas) {
		const { node } = zodToTs(schema, { auxiliaryTypeStore, overrides });
		const typeAlias = createTypeAlias(node, name);
		const nodeString = printNode(typeAlias);
		typeStrings.push(nodeString);
		overrides.set(schema, ts => ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(name)));
	}

	const content = [...typeStrings, 'const resume: JSONResume;', exportTypeNames, 'export default resume;'].join(
		'\n\n'
	);

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
