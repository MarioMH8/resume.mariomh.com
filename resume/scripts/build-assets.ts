import { mkdir, writeFile } from 'node:fs/promises';

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
} from '../schema';
import resume from '../src';

const schemas = [
	{ name: 'Location', schema: location },
	{ name: 'Profile', schema: profile },
	{ name: 'Award', schema: award },
	{ name: 'Basics', schema: basics },
	{ name: 'Certificate', schema: certificate },
	{ name: 'Education', schema: education },
	{ name: 'Interest', schema: interest },
	{ name: 'Language', schema: language },
	{ name: 'Meta', schema: meta },
	{ name: 'Project', schema: project },
	{ name: 'Publication', schema: publication },
	{ name: 'Reference', schema: reference },
	{ name: 'Skill', schema: skill },
	{ name: 'Volunteer', schema: volunteer },
	{ name: 'Work', schema: work },
	{ name: 'JSONResume', schema },
];

async function writeResume() {
	await writeFile('dist/resume.json', JSON.stringify(resume, undefined, 4));
}

async function writeSchema() {
	const generated = z.toJSONSchema(schema, {
		cycles: 'ref',
		reused: 'ref',
		target: 'draft-7',
		unrepresentable: 'throw',
	});

	await writeFile('dist/schema.json', JSON.stringify(generated, undefined, 4));
}

async function writeDefinitions() {
	const auxiliaryTypeStore = createAuxiliaryTypeStore();
	const overrides: TypeOverrideMap = new Map();
	const typeStrings: string[] = [];
	const typeNames = schemas.map(entry => entry.name);
	const exportTypeNames = `export type { ${typeNames.join(', ')} };`;

	for (const { name, schema: entrySchema } of schemas) {
		const { node } = zodToTs(entrySchema, { auxiliaryTypeStore, overrides });
		const typeAlias = createTypeAlias(node, name);

		typeStrings.push(printNode(typeAlias));
		overrides.set(entrySchema, ts => ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(name)));
	}

	const content = [...typeStrings, 'const resume: JSONResume;', exportTypeNames, 'export default resume;'].join(
		'\n\n'
	);

	await writeFile('dist/index.d.mts', content);
}

await mkdir('dist', { recursive: true });
await Promise.all([writeResume(), writeSchema(), writeDefinitions()]);
