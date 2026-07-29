import { z } from 'zod';

import date from './date.schema';
import highlights from './highlights.schema';

const work = z
	.object({
		description: z.string().describe('e.g. Social Media Company').optional(),
		endDate: date.optional(),
		highlights: highlights.optional(),
		location: z.string().describe('e.g. Menlo Park, CA').optional(),
		name: z.string().describe('e.g. Facebook').optional(),
		position: z.string().describe('e.g. Software Engineer').optional(),
		startDate: date.optional(),
		summary: z.string().describe('Give an overview of your responsibilities at the company').optional(),
		url: z.url().describe('e.g. https://facebook.example.com').optional(),
	})
	.catchall(z.unknown());

export type Work = z.infer<typeof work>;

export default work;
