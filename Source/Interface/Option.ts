import type Action from "./Action.js";
import type Cache from "./Cache.js";
import type Exclude from "./Exclude.js";
import type Logger from "./Logger.js";
import type Path from "./Path.js";

import type { Pattern } from "fast-glob";

/**
 * Represents options for configuring the behavior of the program.
 *
 * @module Option
 */
export default interface Type {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	/**
	 * Configuration for the target cache.
	 *
	 * @default { Search: "./", Folder: "./Cache" }
	 *
	 */
	Cache?: false | Cache;

	/**
	 * Configuration for the target path(s).
	 *
	 * @default "./Target"
	 */
	Path?: false | (Path | Path[] | Set<Path>);

	/**
	 * Criteria for excluding files.
	 */
	Exclude?: false | (Exclude | Exclude[] | Set<Exclude>);

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
