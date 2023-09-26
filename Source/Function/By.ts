import type Plan from "../Interface/Plan.js";

import type { Pattern } from "fast-glob";

/**
 * The function `By` takes in a file pattern or an array of file patterns, a set of input and output paths, and a map of results, and returns the updated map of results after matching the file patterns with the input paths.
 *
 * @param {Pattern | Pattern[]} File - The `File` parameter is either a single file pattern or an array of file patterns. These patterns are used to match files in the input directory (`Input`) that will be processed.
 *
 * @param Paths - Paths is an array of tuples that represent the input and output paths. Each tuple contains two elements: the input path and the output path.
 *
 * @param Results - The `Results` parameter is a Map object that stores the mapping between the output file paths and their corresponding input file paths. It is used to keep track of the files that have been processed and their respective destinations.
 *
 * @returns {Results}
 *
 */
export default async (
	File: Pattern | Pattern[],
	Paths: Plan["Paths"],
	Results: Plan["Results"]
) => {
	for (const [Input, Output] of Paths) {
		for (const _File of await (
			await import("fast-glob")
		).default(File, {
			cwd: Input,
			onlyFiles: true,
		})) {
			Results.set(`${Output}${_File}`, `${Input}${_File}`);
		}
	}

	return Results;
};
