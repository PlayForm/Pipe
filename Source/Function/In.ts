import type Interface from "../Interface/In.js";
import type Path from "../Type/Path.js";

/**
 * @module In
 *
 */
export default (async (...[Path, Paths]) => {
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
}) satisfies Interface as Interface;

export const { default: Apply } = await import("@Function/Apply.js");

export let _Path: Path;
