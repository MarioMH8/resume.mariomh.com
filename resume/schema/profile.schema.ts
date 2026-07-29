import { z } from 'zod';

const profile = z
	.object({
		network: z.string().describe('e.g. Facebook or Twitter').optional(),
		url: z.url().describe('e.g. https://twitter.example.com/neutralthoughts').optional(),
		username: z.string().describe('e.g. neutralthoughts').optional(),
	})
	.catchall(z.unknown());

export type SocialProfile = z.infer<typeof profile>;

export default profile;
