import type { Pattern } from "fast-glob";
import Glob from "fast-glob";
import type { Plan } from "../../Option/Index.js";

export default async (
	File: Pattern | Pattern[],
	Paths: Plan["Paths"],
	Results: Plan["Results"]
) => {
	for (const [Input, Output] of Paths) {
		for (const _File of await Glob(File, {
			cwd: Input,
			onlyFiles: true,
		})) {
			Results.set(`${Output}${_File}`, `${Input}${_File}`);
		}
	}

	return Results;
};
