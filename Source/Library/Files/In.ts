import { fileURLToPath as __Path } from "url";
import type { Path, Plan } from "../../Option/Index.js";
import Apply from "../Apply.js";

export default async (Path: Path, Paths: Plan["Paths"]) => {
	const _Path = await Apply(
		(Path: string) => (Path.endsWith("/") ? Path : `${Path}/`),
		await Apply(
			(_URL: URL | string) => (_URL instanceof URL ? __Path(_URL) : _URL),
			Path
		)
	);

	if (_Path instanceof Map) {
		for (const [Input, Output] of _Path) {
			Paths.set(Input, Output);
		}
	} else {
		Paths.set(_Path, _Path);
	}

	return Paths;
};
