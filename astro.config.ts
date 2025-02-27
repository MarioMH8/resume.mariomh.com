import fs from 'node:fs';

import sitemap from '@astrojs/sitemap';
import resume from '@mariomh/resume';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import type { WebmanifestOptions } from 'astro-webmanifest';
import manifest from 'astro-webmanifest';

const { name = '', nameShort, summary } = resume.basics ?? {};

export default defineConfig({
	integrations: [
		{
			hooks: {
				'astro:build:done': ({ dir }) => {
					const cvContent = JSON.stringify(resume, undefined, '\t');
					const url = new URL('resume.json', dir);

					fs.writeFileSync(url, cvContent);
				},
			},
			name: 'astro-include-resume',
		},
		sitemap(),
		robotsTxt(),
		manifest({
			background_color: '#001C16',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name,
			short_name: typeof nameShort === 'string' ? nameShort : undefined,
			start_url: '/',

			theme_color: '#c6f118',
		} as WebmanifestOptions),
		compress(),
	],
	prefetch: false,
	site: 'https://resume.mariomh.com',
	vite: {
		plugins: [tailwindcss()],
	},
});
