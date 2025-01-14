import { z } from 'zod';

import award from './award.schema';

const awards = z.array(award).describe('Specify any awards you have received throughout your professional career');

export default awards;
