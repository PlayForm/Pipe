/**
 * @module Files
 *
 */
export class _Class implements Type {
	Pipe = async (...[Action]: Parameters<Type["Pipe"]>) =>
		await (
			await import("../Function/Pipe.js")
		).default(
			this.Plan,
			(await import("../Function/Merge.js")).default(
				(await import("../Object/Option.js")).default.Action,
				Action ?? {}
			)
		);

	Not = async (...[Exclude]: Parameters<Type["Not"]>) => {
		this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(Exclude, this.Plan.Results);

		return this;
	};

	By = async (...[Files]: Parameters<Type["By"]>) => {
		this.Plan.Results = await (
			await import("../Function/By.js")
		).default(Files, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	In = async (...[Path]: Parameters<Type["In"]>) => {
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

	constructor({ Cache, Logger }: Pick<Option, "Cache" | "Logger">) {
		this.Plan.Cache = typeof Cache === "object" ? Cache : this.Plan.Cache;
		this.Plan.Logger =
			typeof Logger === "number" ? Logger : this.Plan.Logger;
	}
}

export default _Class;

import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";

export const {
	default: { Cache, Logger },
} = await import("../Object/Option.js");
