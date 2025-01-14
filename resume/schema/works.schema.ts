import { z } from 'zod';

import work from './work.schema';

const works = z.array(work);

export default works;
