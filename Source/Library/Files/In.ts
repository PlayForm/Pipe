import { fileURLToPath as _Path } from "url";
import type { Plan, Path } from "../../Option/Index.js";
import Apply from "../Apply.js";

export default async (Path: Path, Paths: Plan["Paths"]) => {
	Apply(
		(__URL: URL | string) => (__URL instanceof URL ? _Path(__URL) : __URL),
		Path
	).then((Path) =>
		Apply(
			(Path: string) => (Path.endsWith("/") ? Path : `${Path}/`),
			Path
		).then((Path) =>
			Path instanceof Map
				? Path.forEach(([Input, Output]) => Paths.set(Input, Output))
				: Paths.set(Path, Path)
		)
	);

	return Paths;
};
