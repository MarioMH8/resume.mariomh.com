import { z } from 'zod';

import skill from './skill.schema';

const skills = z.array(skill).describe('List out your professional skill-set');

export default skills;
