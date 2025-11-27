import { z } from 'zod';

const highlight = z.string().describe('e.g. Increased profits by 20% from 2011-2012 through viral advertising').meta({
	id: 'highlight',
});
export default highlight;
