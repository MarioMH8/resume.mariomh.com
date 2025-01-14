import { z } from 'zod';

import interest from './interest.schema';

const interests = z.array(interest);

export default interests;
