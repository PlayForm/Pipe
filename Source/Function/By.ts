/**
 * @module By
 *
 */
export default (async (...[File, Paths, Results]: Parameters<Type>) => {
	Paths.forEach(async ([Input, Output]) => {
		(
			await async(File, {
				cwd: Input ?? (await import("process")).cwd(),
				onlyFiles: true,
			})
		).forEach((File) => Results.set(`${Output}${File}`, `${Input}${File}`));
	});

	return Results;
}) satisfies Type as Type;

import type Type from "../Interface/By.js";

export const { async } = await import("fast-glob");
