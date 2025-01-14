import { z } from 'zod';

const location = z
	.object({
		address: z
			.string()
			.describe(
				'To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.'
			)
			.optional(),
		city: z.string().optional(),
		countryCode: z.string().describe('code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN').optional(),
		postalCode: z.string().optional(),
		region: z
			.string()
			.describe('The general region where you live. Can be a US state, or a province, for instance.')
			.optional(),
	})
	.catchall(z.unknown());

export default location;
