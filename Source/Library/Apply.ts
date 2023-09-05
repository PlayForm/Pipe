/**
 * The function `Apply` takes a function `Function` and a test value `Test`, and applies `Function` to `Test` based
 * on its type (Map, Set, Array, or other) and returns the result.
 * @param {unknown} Function - Function is a parameter that represents a function. It can be any type of function.
 * @param {unknown} Test - The `Test` parameter can be any value that you want to apply the function
 * `Function` to. It can be a single value, an array of values, a set of values, or a map of key-value pairs.
 * @returns The function `Apply` returns the result of applying the function `Function` to the input `Test`.
 * The specific return value depends on the type of `Test`:
 */
export default async (Function: unknown, Test: unknown) => {
	if (Function instanceof Function) {
		if (Test instanceof Map) {
			const Tests = new Map();

			for (const [Key, Value] of Test) {
				Tests.set(await Function(Key), await Function(Value));
			}

			return Tests;
		}

		if (Test instanceof Set) {
			const Tests = new Set();

			for (const El of Test) {
				Tests.add(await Function(El));
			}

			return Tests;
		}

		if (Test instanceof Array) {
			const Tests = new Array();

			for (const Index of Test) {
				Tests.push(await Function(Index));
			}

			return Tests;
		}

		return await Function(Test);
	}
};
