import { z } from 'zod';

import language from './language.schema';

const languages = z.array(language).describe('List any other languages you speak');

export default languages;
