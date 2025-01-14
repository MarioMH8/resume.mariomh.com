import { z } from 'zod';

import publication from './publication.schema';

const publications = z.array(publication).describe('Specify your publications through your career');

export default publications;
