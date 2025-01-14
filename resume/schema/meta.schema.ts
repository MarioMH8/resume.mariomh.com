import { z } from 'zod';

const meta = z
	.object({
		canonical: z.string().url().describe('URL (as per RFC 3986) to latest version of this document').optional(),
		lastModified: z.string().describe('Using ISO 8601 with YYYY-MM-DDThh:mm:ss').optional(),
		version: z.string().describe('A version field which follows semver - e.g. v1.0.0').optional(),
	})
	.describe('The schema version and any other tooling configuration lives here')
	.catchall(z.unknown());

export default meta;
