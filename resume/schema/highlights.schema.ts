import { z } from 'zod';

import highlight from './highlight.schema';

const highlights = z.array(highlight).describe('Specify multiple accomplishments').meta({
	id: 'highlights',
});

export default highlights;
