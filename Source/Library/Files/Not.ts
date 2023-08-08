import type { Options, Plan } from "../../Option/Index.js";

export default async (Pattern: Options["exclude"], Files: Plan["Results"]) =>
	new Map(
		Array.from(Files).filter(
			([Key, Value]) =>
				!(
					Pattern instanceof Array
						? Pattern
						: Pattern instanceof Set
						? Array.from(Pattern)
						: [Pattern]
				).some(
					(Filter) =>
						(typeof Filter === "string" &&
							(Key.match(Filter) || Value.match(Filter))) ||
						(typeof Filter === "function" &&
							(Filter(Key) || Filter(Value)))
				)
		)
	);
