import { z } from 'zod';

import date from './date.schema';

const publication = z
	.object({
		name: z.string().describe('e.g. The World Wide Web').optional(),
		publisher: z.string().describe('e.g. IEEE, Computer Magazine').optional(),
		releaseDate: date.optional(),
		summary: z
			.string()
			.describe('Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.')
			.optional(),
		url: z
			.string()
			.url()
			.describe('e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html')
			.optional(),
	})
	.catchall(z.unknown());

export default publication;
