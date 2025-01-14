import { z } from 'zod';

const reference = z
	.object({
		name: z.string().describe('e.g. Timothy Cook').optional(),
		reference: z
			.string()
			.describe(
				'e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.'
			)
			.optional(),
	})
	.catchall(z.unknown());

export default reference;
