import { z } from 'zod';

import certificate from './certificate.schema';

const certificates = z
	.array(certificate)
	.describe('Specify any certificates you have received throughout your professional career');

export default certificates;
