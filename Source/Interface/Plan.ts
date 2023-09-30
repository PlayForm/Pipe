import type Cache from "./Cache.js";
import type Dir from "./Dir.js";
import type File from "./File.js";
import type Logger from "./Logger.js";

/**
 * Represents the execution's plan. It contains information about the tasks to be executed and their corresponding inputs and outputs.
 *
 * @module Plan
 * 
 */
export default interface Type {
	/**
	 * Represents the cache configuration.
	 */
	Cache: Cache;

	/**
	 * The debugging level for the execution plan.
	 */
	Logger: Logger;

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
