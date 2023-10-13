/**
 * @module Files
 *
 */
export default class implements Type {
	In = async (...[Path]: Parameters<Type["In"]>) => {
		const Paths = await In(Path, this.Plan.Paths);

		for (const [Input, Output] of Paths) {
			this.Plan.Paths.set(Input, Output);
		}

		return this;
	};

	By = async (...[Files]: Parameters<Type["By"]>) => {
		this.Plan.Results = await By(Files, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	Not = async (...[Exclude]: Parameters<Type["Not"]>) => {
		this.Plan.Results = await Not(Exclude, this.Plan.Results);

		return this;
	};

	Pipe = async (...[_Action]: Parameters<Type["Pipe"]>) => {
		this.Plan = await Pipe(this.Plan, Merge(Action, _Action ?? {}));

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

import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";

export const {
	default: { Cache, Logger, Action },
} = await import("../Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);

export const { default: In } = await import("../Function/In.js");

export const { default: By } = await import("../Function/By.js");

export const { default: Not } = await import("../Function/Not.js");

export const { default: Pipe } = await import("../Function/Pipe.js");
