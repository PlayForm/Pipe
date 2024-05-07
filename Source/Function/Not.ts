/**
 * @module Not
 *
 */
export default ((...[Pattern, Results]: Parameters<Interface>) => {
	if (typeof Pattern !== "undefined") {
		if (Array.isArray(Pattern) || Pattern instanceof Set) {
			for (const Patterns of Pattern) {
				Filters.add(Patterns);
			}
		} else {
			Filters.add(Pattern);
		}
	}

	for (const Filter of Filters) {
		for (const Result of Results) {
			switch (true) {
				case typeof Filter === "string": {
					if (
						Result[0].match(Filter as string) ||
						Result[1].match(Filter as string)
					) {
						Results.delete(Result[0]);
					}

					break;
				}

				case typeof Filter === "function": {
					if (
						// biome-ignore lint/complexity/noBannedTypes:
						(Filter as Function)(Result[0]) ||
						// biome-ignore lint/complexity/noBannedTypes:
						(Filter as Function)(Result[1])
					) {
						Results.delete(Result[0]);
					}
				}
			}
		}
	}

	return Results;
}) satisfies Interface as Interface;

import type Interface from "../Interface/Not.js";

export const Filters = new Set();
