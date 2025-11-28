/// <reference path="../.astro/types.d.ts" />

declare module '*.astro' {
	import type { Props } from 'astro';

	const component: (properties: Props) => unknown;
	export default component;
}
