/**
 * The function `Apply` takes a function `Fn` and a test value `Test`, and applies `Fn` to `Test` based
 * on its type (Map, Set, Array, or other) and returns the result.
 * @param {unknown} Fn - Fn is a parameter that represents a function. It can be any type of function.
 * @param {unknown} Test - The `Test` parameter can be any value that you want to apply the function
 * `Fn` to. It can be a single value, an array of values, a set of values, or a map of key-value pairs.
 * @returns The function `Apply` returns the result of applying the function `Fn` to the input `Test`.
 * The specific return value depends on the type of `Test`:
 */
export default async (Fn: unknown, Test: unknown) => {
	if (Fn instanceof Function) {
		if (Test instanceof Map) {
			const Tests = new Map();

			for (const [Key, Value] of Test) {
				Tests.set(await Fn(Key), await Fn(Value));
			}

			return Tests;
		}

		if (Test instanceof Set) {
			const Tests = new Set();

			for (const El of Test) {
				Tests.add(await Fn(El));
			}

			return Tests;
		}

		if (Test instanceof Array) {
			const Tests = new Array();

			for (const Index of Test) {
				Tests.push(await Fn(Index));
			}

			return Tests;
		}

		return await Fn(Test);
	}
};
