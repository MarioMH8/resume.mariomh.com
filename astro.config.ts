import fs from 'node:fs';

import sitemap from '@astrojs/sitemap';
import resume from '@mariomh/resume';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import pwa from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import type { WebmanifestOptions } from 'astro-webmanifest';
import manifest from 'astro-webmanifest';

const { name = '', nameShort, summaryShort, url } = resume.basics ?? {};

export default defineConfig({
	integrations: [
		{
			hooks: {
				'astro:build:done': ({ dir }) => {
					const cvContent = JSON.stringify(resume, undefined, '\t');
					const url = new URL('resume/resume.json', dir);

					fs.writeFileSync(url, cvContent);
				},
			},
			name: 'astro-include-resume',
		},
		sitemap(),
		robotsTxt(),
		manifest({
			background_color: '#0F1214',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: typeof summaryShort === 'string' ? summaryShort : undefined,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name,
			short_name: typeof nameShort === 'string' ? nameShort : undefined,
			start_url: '/',

			theme_color: '#FFFFFF',
		} as WebmanifestOptions),
		pwa({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
		}),
		compress(),
	],
	prefetch: false,
	// eslint-disable-next-line typescript/no-non-null-assertion
	site: url!,
	vite: {
		plugins: [tailwindcss()],
	},
});
