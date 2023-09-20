import type { Type as Action } from "./Action.js";
import type { Type as Cache } from "./Cache.js";
import type { Type as Exclude } from "./Exclude.js";
import type { Type as Logger } from "./Logger.js";
import type { Type as Path } from "./Path.js";

import type { Pattern } from "fast-glob";

/**
 * Represents options for configuring the behavior of the program.
 */
export interface Type {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * Configuration for the target cache.
	 *
	 * @default "{ Folder: ./Cache, Base: }"
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
