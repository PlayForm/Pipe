/**
 * @module Apply
 *
 */
export default interface Type {
	/**
	 * The function `Apply` takes a function `_Function` and a test value `Test`, and applies `_Function` to `Test` based
	 * on its type (Map, Set, Array, or other) and returns the result.
	 *
	 * @param {unknown} _Function - _Function is a parameter that represents a function. It can be any type of function.
	 *
	 * @param {unknown} Test - The `Test` parameter can be any value that you want to apply the function `_Function` to. It can be a single value, an array of values, a set of values, or a map of key-value pairs.
	 *
	 * @returns The function `Apply` returns the result of applying the function `_Function` to the input `Test`. The specific return value depends on the type of `Test`:
	 *
	 */
	<T>(_Function: (Test: T) => unknown, Test: unknown): Promise<typeof Test>;
}
