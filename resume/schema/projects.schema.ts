import { z } from 'zod';

import project from './project.schema';

const projects = z.array(project).describe('Specify career projects');

export default projects;
