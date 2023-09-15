import type { Type as Plan } from "../../Option/Files/Plan.js";
import type { Type as Option } from "../../Option/Index.js";

/**
 * The function `Not` filters out files from the `Files` array based on the provided `Pattern`
 * parameter.
 * @param Pattern - The `Pattern` parameter is of type `Option["Exclude"]`. It represents the patterns
 * or filters that will be used to exclude certain files from the `Files` array.
 * @param Files - The `Files` parameter is expected to be an array of results from a plan. Each element
 * in the array should be an array itself, with two elements. The first element represents the file
 * name, and the second element represents the file content.
 * @returns the modified `Files` set after applying the filters.
 */
export default async (Pattern: Option["Exclude"], Files: Plan["Results"]) => {
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
		for (const File of Files) {
			switch (true) {
				case typeof Filter === "string": {
					if (
						File[0].match(Filter as string) ||
						File[1].match(Filter as string)
					) {
						Files.delete(File[0]);
					}

					break;
				}

				case typeof Filter === "function": {
					if (
						(Filter as Function)(File[0]) ||
						(Filter as Function)(File[1])
					) {
						Files.delete(File[0]);
					}
				}
			}
		}
	}

	return Files;
};
