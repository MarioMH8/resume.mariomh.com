import { z } from 'zod';

import reference from './reference.schema';

const references = z.array(reference).describe('List references you have received');

export default references;
