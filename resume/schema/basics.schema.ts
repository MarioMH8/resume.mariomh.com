import { z } from 'zod';

import location from './location.schema';
import profiles from './profiles.schema';

const basics = z
	.object({
		email: z.string().email().describe('e.g. thomas@gmail.com').optional(),
		image: z.string().describe('URL (as per RFC 3986) to a image in JPEG or PNG format').optional(),
		label: z.string().describe('e.g. Web Developer').optional(),
		location: location.optional(),
		name: z.string().optional(),
		phone: z
			.string()
			.describe('Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923')
			.optional(),
		profiles: profiles.optional(),
		summary: z.string().describe('Write a short 2-3 sentence biography about yourself').optional(),
		url: z.string().url().describe('URL (as per RFC 3986) to your website, e.g. personal homepage').optional(),
	})
	.catchall(z.unknown());

export type Basics = z.infer<typeof basics>;

export default basics;
