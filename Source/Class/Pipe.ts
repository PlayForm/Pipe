/**
 * @module Pipe
 *
 */
export default class implements Interface {
	In = async (...[Path]: Parameters<Interface["In"]>) => {
		for (const [Input, Output] of await (
			await import("@Function/In.js")
		).default(Path, this.Plan.Paths)) {
			this.Plan.Paths.set(Input, Output);
		}

		return this;
	};

	By = async (...[File]: Parameters<Interface["By"]>) => {
		this.Plan.Results = await (
			await import("@Function/By.js")
		).default(File, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	Not = async (...[Exclude]: Parameters<Interface["Not"]>) => {
		this.Plan.Results = (await import("@Function/Not.js")).default(
			Exclude,
			this.Plan.Results
		);

		return this;
	};

	Pipe = async (...[_Action]: Parameters<Interface["Pipe"]>) => {
		this.Plan = await (
			await import("@Function/Pipe.js")
		).default(this.Plan, Merge(Action, _Action ?? {}));

		return this;
	};

	Plan = {
		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
		Cache,
		File: 0,
		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
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

import type Interface from "../Interface/Class.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";

export const {
	default: { Cache, Logger, Action },
} = await import("@Variable/Option.js");

export const { default: Merge } = await import("@Function/Merge.js");
