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
		Fulfilled: async ({ File }) =>
			File > 0
				? `Successfully processed a total of ${File} ${
						File === 1 ? "file" : "files"
					}.`
				: false,
		Changed: async (Plan) => Plan,
	},
	File: "**/*",
	Exclude: false,
} satisfies Interface as Interface;

import type Interface from "../Interface/Option.js";
