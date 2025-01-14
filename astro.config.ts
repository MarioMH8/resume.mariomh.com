import fs from 'node:fs';

import sitemap from '@astrojs/sitemap';
import resume from '@mariomh/resume';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import pwa from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

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
		webmanifest({
			background_color: '#0F1214',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: resume.basics.summaryShort,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name: resume.basics.name,
			short_name: resume.basics.shortName,
			start_url: '/',

			theme_color: '#FFFFFF',
		}),
		pwa({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
		}),
		compress(),
	],
	prefetch: false,
	site: resume.basics.url,
	vite: {
		plugins: [tailwindcss()],
	},
});
