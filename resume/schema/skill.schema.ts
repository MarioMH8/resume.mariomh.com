import { z } from 'zod';

const skill = z
	.object({
		keywords: z
			.array(z.string().describe('e.g. HTML'))
			.describe('List some keywords pertaining to this skill')
			.optional(),
		level: z.string().describe('e.g. Master').optional(),
		name: z.string().describe('e.g. Web Development').optional(),
	})
	.catchall(z.unknown());

export default skill;
