import type { Pattern } from "fast-glob";
import type { Executions, Plan, Path, Options } from "../Option/Index.js";
import Default from "../Option/Index.js";
import By from "./Files/By.js";
import In from "./Files/In.js";
import Not from "./Files/Not.js";
import Pipe from "./Files/Pipe.js";

export default class Files {
	Pipe = (Callbacks: Executions = Default.Pipe) => Pipe(this.Plan, Callbacks);

	Not = (Pattern: Options["Exclude"]) =>
		Not(Pattern, this.Plan.Results).then((Results) => {
			this.Plan.Results = Results;
		}) || this;

	By = (Glob: Pattern | Pattern[] = "**/*") =>
		By(Glob, this.Plan.Paths, this.Plan.Results).then((Results) => {
			this.Plan.Results = Results;
		}) || this;

	In = (Path: Path = "./") =>
		(!Path &&
			In(Path, this.Plan.Paths).then((Paths) => {
				Paths instanceof Map
					? Paths.forEach(
							([Input, Output]) =>
								Input &&
								Output &&
								this.Plan.Paths.set(Input, Output)
					  )
					: this.Plan.Paths;
			})) ||
		this;

	Plan: Plan = {
		Files: 0,
		Debug: 2,
		Info: {},
		Paths: new Map(),
		Results: new Map(),
		On: {
			Buffer: "",
			After: 0,
			Before: 0,
			Input: "",
			Output: "",
		},
	};

	constructor(Debug: Plan["Debug"] = 2) {
		this.Plan.Debug = Debug;
	}
}
