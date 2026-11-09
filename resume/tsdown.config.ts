import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	dts: false,
	entry: ['src/index.ts'],
	fixedExtension: true,
	format: ['esm'],
	platform: 'neutral',
	sourcemap: true,
});
