import { z } from 'zod';

const $schema = z.url().describe('link to the version of the schema that can validate the resume');

export default $schema;
