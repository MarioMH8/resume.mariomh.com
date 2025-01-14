import { z } from 'zod';

import profile from './profile.schema';

const profiles = z.array(profile).describe('Specify any number of social networks that you participate in');

export default profiles;
