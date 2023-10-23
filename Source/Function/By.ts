/**
 * @module By
 *
 */
export default (async (...[Files, Paths, Results]: Parameters<Type>) => {
	for (const [Input, Output] of Paths) {
		console.log(Input);

		for (const Result of await FastGlob(Files, {
			cwd: Input ?? cwd(),
			onlyFiles: true,
		})) {
			Results.set(`${Output}${Result}`, `${Input}${Result}`);
		}
	}

	return Results;
}) satisfies Type as Type;

import type Type from "../Interface/By.js";

export const { cwd } = await import("process");

export const { default: FastGlob } = await import("fast-glob");
