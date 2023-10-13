/**
 * @module By
 *
 */
export default (async (...[Files, Paths, Results]: Parameters<Type>) => {
	for (const [Input, Output] of Paths) {
		for (const Result of globSync(Files, {
			cwd: Input ?? cwd(),
			onlyFiles: true,
		})) {
			Results.set(`${Output}${Result}`, `${Input}${Result}`);
		}
	}

	return Results;
}) satisfies Type as Type;

import type Type from "../Interface/By.js";

export const { globSync } = await import("fast-glob");

export const { cwd } = await import("process");
