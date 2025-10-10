import { z } from 'zod';

import $schema from './$schema.schema';
import awards from './awards.schema';
import basics from './basics.schema';
import certificates from './certificates.schema';
import educations from './educations.schema';
import interests from './interests.schema';
import languages from './languages.schema';
import meta from './meta.schema';
import projects from './projects.schema';
import publications from './publications.schema';
import references from './references.schema';
import skills from './skills.schema';
import volunteers from './volunteers.schema';
import works from './works.schema';

const resume = z
	.object({
		$schema: $schema.optional(),
		awards: awards.optional(),
		basics: basics.optional(),
		certificates: certificates.optional(),
		education: educations.optional(),
		interests: interests.optional(),
		languages: languages.optional(),
		meta: meta.optional(),
		projects: projects.optional(),
		publications: publications.optional(),
		references: references.optional(),
		skills: skills.optional(),
		volunteer: volunteers.optional(),
		work: works.optional(),
	})
	.catchall(z.unknown());

export type JSONResume = z.infer<typeof resume>;

export default resume;
