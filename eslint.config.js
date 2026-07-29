import hexadrop from '@hexadrop/eslint-config';

export default hexadrop(
	{
		rules: {
			'import/no-unresolved': 'off',
		},
	},
	{
		files: ['src/components/time.ts'],
		rules: {
			'unicorn/no-useless-recursion': 'off',
		},
	}
);
