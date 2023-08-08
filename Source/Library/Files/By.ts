import type { Pattern } from "fast-glob";
import Glob from "fast-glob";
import type { Plan } from "../../Option/Index.js";

export default async (
	_Glob: Pattern | Pattern[],
	Paths: Plan["Paths"],
	Results: Plan["Results"]
) => {
	Paths.forEach(
		([Input, Output]) =>
			Input &&
			Output &&
			Glob(_Glob, {
				cwd: Input,
				onlyFiles: true,
			}).then((Files) =>
				Files.forEach((File) =>
					Results.set(`${Output}${File}`, `${Input}${File}`)
				)
			)
	);

	return Results;
};
