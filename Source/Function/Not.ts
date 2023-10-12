/**
 * @module Not
 *
 */
export default (async (...[Pattern, Results]: Parameters<Type>) => {
	const Filters = new Set();

	if (typeof Pattern !== "undefined") {
		if (Pattern instanceof Array || Pattern instanceof Set) {
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
					if (Result[0].match(Filter) || Result[1].match(Filter)) {
						Results.delete(Result[0]);
					}

					break;
				}

				case typeof Filter === "function": {
					if (Filter(Result[0]) || Filter(Result[1])) {
						Results.delete(Result[0]);
					}
				}
			}
		}
	}

	return Results;
}) satisfies Type as Type;

import type Type from "../Interface/Not.js";
