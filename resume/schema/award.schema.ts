import { z } from 'zod';

import date from './date.schema';

const award = z
	.object({
		awarder: z.string().describe('e.g. Time Magazine').optional(),
		date: date.optional(),
		summary: z.string().describe('e.g. Received for my work with Quantum Physics').optional(),
		title: z.string().describe('e.g. One of the 100 greatest minds of the century').optional(),
	})
	.catchall(z.unknown());

export type Award = z.infer<typeof award>;

export default award;
