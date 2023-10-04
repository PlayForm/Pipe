import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";

/**
 * The function `Not` filters out files from the `Files` array based on the provided `Pattern`
 * parameter.
 *
 * @module Not
 *
 * @param Pattern - The `Pattern` parameter is of type `Option["Exclude"]`. It represents the patterns
 * or filters that will be used to exclude certain files from the `Results` array.
 *
 * @param Results - The `Results` parameter is expected to be an array of results from a plan. Each element
 * in the array should be an array itself, with two elements. The first element represents the file
 * name, and the second element represents the file content.
 *
 * @returns Results
 *
 */
export default async (Pattern: Option["Exclude"], Results: Plan["Results"]) => {
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
};
