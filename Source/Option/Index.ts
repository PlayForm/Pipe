import type { Type as Action } from "../Library/Files/Action.js";
import type { Type as Cache } from "../Library/Files/Cache.js";
import type { Type as Exclude } from "../Library/Files/Exclude.js";
import type { Type as Logger } from "../Library/Files/Logger.js";
import type { Type as Path } from "../Library/Files/Path.js";

import type { Pattern } from "fast-glob";

import { readFile as File } from "fs/promises";

/**
 * Represents options for configuring the behavior of the program.
 */
export interface Type {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * Configuration for the target cache.
	 *
	 * @default "./Cache"
	 */
	Cache?: Cache;

	/**
	 * Configuration for the target path(s).
	 *
	 * @default "./Target"
	 */
	Path?: Path | Path[] | Set<Path>;

	/**
	 * Criteria for excluding files.
	 */
	Exclude?: Exclude | Exclude[] | Set<Exclude>;

	/**
	 * File patterns to be matched.
	 */
	Files?: Pattern | Pattern[];

	/**
	 * Action pipe configuration.
	 */
	Action?: Action;

	/**
	 * Debugging level.
	 *
	 * @default 2
	 */
	Logger?: Logger;
}

/**
 * Default configuration object.
 */
export default {
	Cache: "./Cache",
	Path: "./Target",
	Logger: 2,
	Action: {
		Read: async (On) => await File(On.Input, "utf-8"),
		Wrote: async (On) => On.Buffer,
		Passed: async (On) => On && true,
		Failed: async (On) => `Error: Cannot process file ${On.Input}!`,
		Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully processed a total of ${Plan.Files} ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		Changed: async (Plan) => Plan,
	},
} satisfies Type;
