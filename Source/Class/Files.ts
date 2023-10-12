/**
 * @module Files
 *
 */
export default class implements Type {
	In = async (...[Path]: Parameters<Type["In"]>) => {
		const Paths = await (
			await import("../Function/In.js")
		).default(Path, this.Plan.Paths);

		if (Paths instanceof Map) {
			for (const [Input, Output] of Paths) {
				this.Plan.Paths.set(Input, Output);
			}
		}

		console.log("--- In ---");
		return this;
	};

	By = async (...[Files]: Parameters<Type["By"]>) => {
		this.Plan.Results = await (
			await import("../Function/By.js")
		).default(Files, this.Plan.Paths, this.Plan.Results);

		console.log("--- By ---");
		return this;
	};

	Not = async (...[Exclude]: Parameters<Type["Not"]>) => {
		this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(Exclude, this.Plan.Results);

		console.log("--- Not ---");
		return this;
	};

	Pipe = async (...[Action]: Parameters<Type["Pipe"]>) => {
		console.log("--- Pipe ---");

		return await (
			await import("../Function/Pipe.js")
		).default(
			this.Plan,
			Merge(
				(await import("../Object/Option.js")).default.Action,
				Action ?? {}
			)
		);
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

		console.log("--- CONSTRUCTOR ---");
	}
}

import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";

export const {
	default: { Cache, Logger },
} = await import("../Object/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
