import type { Type as Cache } from "./Cache.ts";
import type { Type as Debug } from "./Debug.ts";
import type { Type as Dir } from "./Dir.ts";
import type { Type as File } from "./File.ts";

/**
 * Represents the execution's plan.
 */
export interface Type {
	/**
	 * The folder of the plan cache.
	 */
	Cache: Cache;

	/**
	 * The debugging level for the execution plan.
	 */
	Debug: Debug;

	/**
	 * The number of files in the execution plan.
	 */
	Files: number;

	/**
	 * Additional information associated with the execution plan.
	 */
	// rome-ignore lint/suspicious/noExplicitAny:
	Info: any;

	/**
	 * Mapping of input paths to output paths.
	 */
	Paths: Map<Dir["Input"], Dir["Output"]>;

	/**
	 * Mapping of result paths to corresponding input paths.
	 */
	Results: Map<
		`${Dir["Output"]}${File["Output"]}`,
		`${Dir["Input"]}${File["Input"]}`
	>;

	/**
	 * The file currently being operated on.
	 */
	On: File;
}
