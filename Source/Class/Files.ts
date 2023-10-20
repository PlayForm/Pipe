/**
 * @module Files
 *
 */
export default class implements Type {
	In = async (...[Path]: Parameters<Type["In"]>) => (
		(
			await (
				await import("../Function/In.js")
			).default(Path, this.Plan.Paths)
		).forEach(
			([Input, Output]) =>
				Input && Output && this.Plan.Paths.set(Input, Output)
			// biome-ignore lint/style/noCommaOperator:
		),
		this
	);

	By = async (...[Files]: Parameters<Type["By"]>) =>
		(
			// biome-ignore lint/suspicious/noAssignInExpressions:
			(this.Plan.Results = await (
				await import("../Function/By.js")
			)
				// biome-ignore lint/style/noCommaOperator:
				.default(Files, this.Plan.Paths, this.Plan.Results)),
			this
		);

	Not = async (...[Exclude]: Parameters<Type["Not"]>) =>
		(
			// biome-ignore lint/suspicious/noAssignInExpressions:
			(this.Plan.Results = await (
				await import("../Function/Not.js")
			)
				// biome-ignore lint/style/noCommaOperator:
				.default(Exclude, this.Plan.Results)),
			this
		);

	Pipe = async (...[_Action]: Parameters<Type["Pipe"]>) =>
		(
			// biome-ignore lint/suspicious/noAssignInExpressions:
			(this.Plan = await (
				await import("../Function/Pipe.js")
			)
				// biome-ignore lint/style/noCommaOperator:
				.default(this.Plan, Merge(Action, _Action ?? {}))),
			this
		);

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
