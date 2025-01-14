import { z } from 'zod';

import date from './date.schema';

const education = z
	.object({
		area: z.string().describe('e.g. Arts').optional(),
		courses: z
			.array(z.string().describe('e.g. H1302 - Introduction to American history'))
			.describe('List notable courses/subjects')
			.optional(),
		endDate: date.optional(),
		institution: z.string().describe('e.g. Massachusetts Institute of Technology').optional(),
		score: z.string().describe('grade point average, e.g. 3.67/4.0').optional(),
		startDate: date.optional(),
		studyType: z.string().describe('e.g. Bachelor').optional(),
		url: z.string().url().describe('e.g. http://facebook.example.com').optional(),
	})
	.catchall(z.unknown());

export default education;
