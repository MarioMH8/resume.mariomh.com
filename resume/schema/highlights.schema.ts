import { z } from 'zod';

const highlights = z
	.array(z.string().describe('e.g. Increased profits by 20% from 2011-2012 through viral advertising'))
	.describe('Specify multiple accomplishments');

export default highlights;
