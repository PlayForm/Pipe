/**
 * @module Files
 *
 */
export default class implements Type {
	Pipe = async (...[Action]: Parameters<Type["Pipe"]>) => {
		console.log("----	Pipe	----");

		return await (
			await import("../Function/Pipe.js")
		).default(
			this.Plan,
			(
				await import("typescript-esbuild/Target/Function/Merge.js")
			).default(
				(await import("../Object/Option.js")).default.Action,
				Action ?? {}
			)
		);
	};

	Not = async (...[Exclude]: Parameters<Type["Not"]>) => {
		console.log("----	Not	----");

		this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(Exclude, this.Plan.Results);

		return this;
	};

	By = async (...[Files]: Parameters<Type["By"]>) => {
		console.log("----	By	----");

		this.Plan.Results = await (
			await import("../Function/By.js")
		).default(Files, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	In = async (...[Path]: Parameters<Type["In"]>) => {
		console.log("----	In	----");

		const Paths = await (
			await import("../Function/In.js")
		).default(Path, this.Plan.Paths);

		if (Paths instanceof Map) {
			for (const [Input, Output] of Paths) {
				this.Plan.Paths.set(Input, Output);
			}
		}

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
		console.log("----	constructor	----");

		this.Plan.Cache =
			typeof Cache === "object"
				? Merge(Cache, this.Plan.Cache)
				: this.Plan.Cache;

		this.Plan.Logger =
			typeof Logger === "number" ? Logger : this.Plan.Logger;
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
