import { z } from 'zod';

const language = z
	.object({
		fluency: z.string().describe('e.g. Fluent, Beginner').optional(),
		language: z.string().describe('e.g. English, Spanish').optional(),
	})
	.catchall(z.unknown());

export type Language = z.infer<typeof language>;

export default language;
