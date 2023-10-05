/**
 * @module In
 *
 */
export default (async (...[Path, Paths]: Parameters<Type>) => {
	const _Path = await Apply<string>(
		(Path) => (Path.endsWith("/") ? Path : `${Path}/`),
		await Apply<URL | string>(
			async (_URL) =>
				_URL instanceof URL
					? (await import("url")).fileURLToPath(_URL)
					: _URL,
			Path
		)
	);

	if (_Path instanceof Map) {
		for (const [Input, Output] of _Path) {
			Paths.set(Input, Output);
		}
	} else if (typeof _Path === "string") {
		Paths.set(_Path, _Path);
	}

	return Paths;
}) satisfies Type as Type;

import type Type from "../Interface/In.js";

export const { default: Apply } = await import("./Apply.js");
