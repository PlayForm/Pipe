import type Interface from "../Interface/Apply.js";

/**
 * @module Apply
 *
 */
export default (async (...[_Function, Test]) => {
	if (typeof _Function === "function") {
		if (Test instanceof Map) {
			const Tests = new Map();

			for (const [Key, Value] of Test) {
				Tests.set(await _Function(Key), await _Function(Value));
			}

			return Tests;
		}

		if (Test instanceof Set) {
			const Tests = new Set();

			for (const El of Test) {
				Tests.add(await _Function(El));
			}

			return Tests;
		}

		if (Array.isArray(Test)) {
			const Tests = new Array();

			for (const Index of Test) {
				Tests.push(await _Function(Index));
			}

			return Tests;
		}

		return await _Function(Test);
	}

	return Test;
}) satisfies Interface as Interface;
