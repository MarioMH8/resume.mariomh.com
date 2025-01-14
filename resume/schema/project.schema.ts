import { z } from 'zod';

import date from './date.schema';

const project = z
	.object({
		description: z.string().describe('Short summary of project. e.g. Collated works of 2017.').optional(),
		endDate: date.optional(),
		entity: z
			.string()
			.describe(`Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'`)
			.optional(),
		highlights: z
			.array(z.string().describe('e.g. Directs you close but not quite there'))
			.describe('Specify multiple features')
			.optional(),
		keywords: z
			.array(z.string().describe('e.g. AngularJS'))
			.describe('Specify special elements involved')
			.optional(),
		name: z.string().describe('e.g. The World Wide Web').optional(),
		roles: z
			.array(z.string().describe('e.g. Team Lead, Speaker, Writer'))
			.describe('Specify your role on this project or in company')
			.optional(),
		startDate: date.optional(),
		type: z
			.string()
			.describe(` e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'`)
			.optional(),
		url: z.string().url().describe('e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html').optional(),
	})
	.catchall(z.unknown());

export default project;
