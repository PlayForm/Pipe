// rome-ignore lint/suspicious/noExplicitAny:
export default async <T = string>(Fn: (args: any) => T, Test: any) => {
	switch (true) {
		case Test instanceof Map: {
			const Tests = new Map();

			for (const [Key, Value] of Test) {
				Tests.set(await Fn(Key), await Fn(Value));
			}

			return Tests;
		}

		case Test instanceof Set: {
			const Tests = new Set();

			for (const El of Test) {
				Tests.add(await Fn(El));
			}

			return Tests;
		}

		case Test instanceof Array: {
			const Tests = new Array();

			for (const Index of Test) {
				Tests.push(await Fn(Index));
			}

			return Tests;
		}

		default:
			return await Fn(Test);
	}
};
