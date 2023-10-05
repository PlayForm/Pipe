/**
 * @module In
 *
 */
export default interface Type {
	/**
	 * The function `In` takes a `Path` and a `Paths` object, and adds the `Path` to the `Paths` object.
	 *
	 *
	 * @param {Path} Path - The `Path` parameter is a string or URL that represents the path to a file or
	 * directory.
	 *
	 * @param {Plan["Paths"]} Paths - Paths is a variable of type Plan["Paths"]. It is likely an object or a map that
	 * stores key-value pairs.
	 *
	 * @returns {Plan["Paths"]} The function `In` returns the `Paths` object.
	 *
	 */
	(Path: Path, Paths: Plan["Paths"]): Promise<typeof Paths>;
}

import type Path from "../Interface/Path.js";
import type Plan from "../Interface/Plan.js";

