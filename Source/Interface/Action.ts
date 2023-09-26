/**
 * Represents the execution configuration for specific actions on files.
 *
 * @module Action
 */
export default interface Type {
	/**
	 * Attaches a callback for the fulfillment of the Action.
	 *
	 * @param {Plan} Plan
	 *
	 */
	Fulfilled?: boolean | ((Plan: Plan) => Promise<false | string>);

	/**
	 * Attaches a callback for handling failures in the Action.
	 *
	 * @param {File} Input The input file being processed.
	 *
	 * @param {unknown} _Error The error encountered during execution.
	 *
	 */
	Failed?:
		| boolean
		| ((Input: File, _Error: unknown) => Promise<false | string>);

	/**
	 * Attaches a callback for actions that are accomplished.
	 *
	 * @param On The file on which an action was accomplished.
	 *
	 */
	Accomplished?: boolean | ((On: File) => Promise<false | string>);

	/**
	 * Attaches a callback for actions that result in changes to the plan.
	 *
	 * @param {Plan} Plan The execution plan to be changed.
	 *
	 * @returns A Promise that resolves to the modified execution plan.
	 *
	 */
	Changed?: (Plan: Plan) => Promise<Plan>;

	/**
	 * Attaches a callback for actions that check if a file can pass through the pipe.
	 *
	 * @param On The file on which the action is being checked.
	 *
	 * @returns A Promise that resolves to a boolean value indicating if the file has passed the checks.
	 *
	 */
	Passed?: (On: File) => Promise<Boolean>;

	/**
	 * Attaches a callback for reading from a file.
	 *
	 * @param On The file to be read.
	 *
	 * @returns A Promise that resolves to the buffer read from the file.
	 *
	 */
	Read?: (On: File) => Promise<Buffer>;

	/**
	 * Attaches a callback for writing to a file.
	 *
	 * @param On The file to be written to.
	 *
	 * @returns A Promise that resolves to the buffer written to the file.
	 *
	 */
	Wrote?: (On: File) => Promise<Buffer>;
}

import type Buffer from "./Buffer.js";
import type File from "./File.js";
import type Plan from "./Plan.js";
