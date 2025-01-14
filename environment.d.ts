declare module '*.astro' {
	import type { Props } from 'astro';

	const component: (properties: Props) => unknown;
	export default component;
}
