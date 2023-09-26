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
	Cache?: boolean | Cache;

	/**
	 * Configuration for the target path(s).
	 *
	 * @default "./Target"
	 */
	Path?: boolean | (Path | Path[] | Set<Path>);

	/**
	 * Criteria for excluding files.
	 */
	Exclude?: boolean | (Exclude | Exclude[] | Set<Exclude>);

	/**
	 * File patterns to be matched.
	 */
	Files?: boolean | (Pattern | Pattern[]);

	/**
	 * Action pipe configuration.
	 */
	Action?: boolean | Action;

	/**
	 * Debugging level.
	 *
	 * @default 2
	 */
	Logger?: boolean | Logger;
}

import type Action from "./Action.js";
import type Cache from "./Cache.js";
import type Exclude from "./Exclude.js";
import type Logger from "./Logger.js";
import type Path from "./Path.js";

import type { Pattern } from "fast-glob";
