/**
 * @module Files
 *
 */
export default class implements Type {
	In = async (...[Path]: Parameters<Type["In"]>) => {
		for (const [Input, Output] of await (
			await import("../Function/In.js")
		).default(Path, this.Plan.Paths)) {
			this.Plan.Paths.set(Input, Output);
		}

		return this;
	};

	By = async (...[Files]: Parameters<Type["By"]>) => {
		this.Plan.Results = await (
			await import("../Function/By.js")
		).default(Files, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	Not = async (...[Exclude]: Parameters<Type["Not"]>) => {
		this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(Exclude, this.Plan.Results);

		return this;
	};

	Pipe = async (...[_Action]: Parameters<Type["Pipe"]>) => {
		this.Plan = await (
			await import("../Function/Pipe.js")
		).default(this.Plan, Merge(Action, _Action ?? {}));

		return this;
	};

	Plan = {
		Cache,
		Files: 0,
		Logger,
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
	} satisfies Plan as Plan;

	constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]) {
		this.Plan.Cache =
			typeof Cache === "object"
				? Merge(this.Plan.Cache, Cache)
				: this.Plan.Cache;

		this.Plan.Logger =
			typeof Logger === "number" ? Logger : this.Plan.Logger;
	}
}

type Type = import("../Interface/Files.js").default;
type Option = import("../Interface/Option.js").default;
type Plan = import("../Interface/Plan.js").default;

export const {
	default: { Cache, Logger, Action },
} = await import("../Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
