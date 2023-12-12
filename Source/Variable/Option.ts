/**
 * @module Option
 *
 */
export default {
	Cache: {
		Search: "./",
		Folder: "./Cache",
	},
	Path: "./Target",
	Logger: 2,
	Action: {
		Read: async ({ Input }) =>
			await (await import("fs/promises")).readFile(Input, "utf-8"),
		Wrote: async ({ Buffer }) => Buffer,
		// biome-ignore lint/complexity/useSimplifiedLogicExpression:
		Passed: async (On) => On && true,
		Failed: async ({ Input }) => `Error: Cannot process file ${Input}!`,
		Accomplished: async ({ Input, Output }) =>
			`Processed ${Input} in ${Output}.`,
		Fulfilled: async ({ Files }) =>
			Files > 0
				? `Successfully processed a total of ${Files} ${
						Files === 1 ? "file" : "files"
					}.`
				: false,
		Changed: async (Plan) => Plan,
	},
	Files: "**/*",
	Exclude: false,
} satisfies Type;

import type Type from "../Interface/Option.js";
