import { describe, expect, test } from 'bun:test';

import schema from '../schema';
import resume from '../src';

describe('@mariomh8/resume', () => {
	test('should meet the requirements of the resume', () => {
		const safe = schema.safeParse(resume);
		expect(safe.error).toBeUndefined();
	});
});
