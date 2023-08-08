import type { Pattern } from "fast-glob";
import Glob from "fast-glob";
import type { Plan } from "../../Option/Index.js";

export default async (
	_Glob: Pattern | Pattern[],
	Paths: Plan["Paths"],
	Results: Plan["Results"]
) => {
	for (const [Input, Output] of Paths) {
		const Files = await Glob(_Glob, {
			cwd: Input,
			onlyFiles: true,
		});

		for (const File of Files) {
			Results.set(`${Output}${File}`, `${Input}${File}`);
		}
	}

	return Results;
};
