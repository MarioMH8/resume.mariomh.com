import { z } from 'zod';

const interest = z
	.object({
		keywords: z.array(z.string().describe('e.g. Friedrich Nietzsche')).optional(),
		name: z.string().describe('e.g. Philosophy').optional(),
	})
	.catchall(z.unknown());

export type Interest = z.infer<typeof interest>;

export default interest;
