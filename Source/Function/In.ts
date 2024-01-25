/**
 * @module In
 *
 */
export default (async (...[Path, Paths]: Parameters<Type>) => {
	_Path = await Apply(
		async (Path) => (Path.endsWith("/") ? Path : `${Path}/`),
		await Apply(
			async (_URL) =>
				_URL instanceof URL
					? (await import("url")).fileURLToPath(_URL)
					: _URL,
			Path,
		),
	);

	if (_Path instanceof Map) {
		for (const [Input, Output] of _Path) {
			Paths.set(Input.toString(), Output.toString());
		}
	} else if (typeof _Path === "string") {
		Paths.set(_Path, _Path);
	}

	return Paths;
}) satisfies Type as Type;

import type Type from "../Interface/In.js";
import type Path from "../Type/Path.js";

export const { default: Apply } = await import("./Apply.js");

export let _Path: Path;
