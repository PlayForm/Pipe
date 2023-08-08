import type { Options, Plan } from "../../Option/Index.js";

export default async (Pattern: Options["Exclude"], Files: Plan["Results"]) => {
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
