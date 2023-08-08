import { fileURLToPath as _Path } from "url";
import type { Plan, Path } from "../../Option/Index.js";
import Apply from "../Apply.js";

export default async (Path: Path, Paths: Plan["Paths"]) => {
	const _Path = await Apply(
		await Apply(
			(url: URL | string) => (url instanceof URL ? _Path(url) : url),
			Path
		),
		(Path: string) => (Path.endsWith("/") ? Path : `${Path}/`)
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
