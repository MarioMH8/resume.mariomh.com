import { z } from 'zod';

import education from './education.schema';

const educations = z.array(education);

export default educations;
