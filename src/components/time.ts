type DateType = Date | number | string;

type DateFormat = 'year' | 'year-month';

export type { DateType };

export default function time(argument: DateType, format: DateFormat = 'year'): string | undefined {
	if (!argument) {
		return undefined;
	}
	if (typeof argument === 'string') {
		return time(new Date(argument), format);
	}
	if (typeof argument === 'number') {
		return time(new Date(argument), format);
	}

	switch (format) {
		case 'year': {
			return argument.getFullYear().toString();
		}
		case 'year-month': {
			const year = argument.getFullYear();
			const month = argument.getMonth() + 1;

			return `${year.toFixed(0)}-${month.toString().padStart(2, '0')}`;
		}
	}
}
