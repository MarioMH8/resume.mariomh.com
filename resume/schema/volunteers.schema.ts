import { z } from 'zod';

import volunteer from './volunteer.schema';

const volunteers = z.array(volunteer);

export default volunteers;
