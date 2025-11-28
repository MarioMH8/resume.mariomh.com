import { z } from 'zod';

import date from './date.schema';

const certificate = z
	.object({
		date: date.optional(),
		issuer: z.string().describe('e.g. CNCF').optional(),
		name: z.string().describe('e.g. Certified Kubernetes Administrator').optional(),
		url: z.url().describe('e.g. http://example.com').optional(),
	})
	.catchall(z.unknown());

export type Certificate = z.infer<typeof certificate>;

export default certificate;
