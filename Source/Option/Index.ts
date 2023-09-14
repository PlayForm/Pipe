import type { Pattern } from "fast-glob";
import { readFile as File } from "fs/promises";

import type { Type as Action } from "./Files/Action.ts";
import type { Type as Cache } from "./Files/Cache.ts";
import type { Type as Debug } from "./Files/Debug.ts";
import type { Type as Exclude } from "./Files/Exclude.ts";
import type { Type as Path } from "./Files/Path.ts";

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
	Logger?: Debug;
}

/**
 * Default configuration object.
 */
export default {
	/**
	 * Configuration for the target path(s).
	 */
	Path: "./Target",

	/**
	 * Debugging level.
	 */
	Logger: 2,

	/**
	 * Action configuration.
	 */
	Action: {
		/**
		 * Attaches a callback for reading from a file.
		 */
		Read: async (On) => await File(On.Input, "utf-8"),

		/**
		 * Attaches a callback for writing to a file.
		 */
		Wrote: async (On) => On.Buffer,

		/**
		 * Attaches a callback for actions that check if a file can pass through the pipe.
		 */
		Passed: async (On) => On && true,

		/**
		 * Attaches a callback for handling failures in the Action.
		 */
		Failed: async (On) => `Error: Cannot process file ${On.Input}!`,

		/**
		 * Attaches a callback for actions that are accomplished.
		 */
		Accomplished: async (On) => `Processed ${On.Input} in ${On.Output}.`,

		/**
		 * Attaches a callback for the fulfillment of the Action.
		 */
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully processed a total of ${Plan.Files} ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,

		/**
		 * Attaches a callback for actions that result in changes to the plan.
		 */
		Changed: async (Plan) => Plan,
	},
} satisfies Type;
