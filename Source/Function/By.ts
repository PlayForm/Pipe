/**
 * @module By
 *
 */
export default (async (...[File, Paths, Results]: Parameters<Type>) => (
	Paths.forEach(
		async ([Input, Output]) => (
			console.log(Paths),
			(
				await (
					await import("fast-glob")
				).default(File, {
					cwd: Input ?? (await import("process")).cwd(),
					onlyFiles: true,
				})
			).forEach((Result) =>
				Results.set(`${Output}${Result}`, `${Input}${Result}`)
			)
		)
	),
	Results
)) satisfies Type as Type;

import type Type from "../Interface/By.js";
