import type { Type as Buffer } from "./Buffer.js";
import type { Type as Cache } from "./Cache.js";
import type { Type as File } from "./File.js";
import type { Type as Plan } from "./Plan.js";
/**
 * Represents the execution configuration for specific actions on files.
 */
export interface Type {
    /**
     * Attaches a callback for the fulfillment of the Action.
     * @param Plan The execution plan to be fulfilled.
     * @returns A Promise that resolves to either a string or false.
     */
    Fulfilled?: boolean | ((Plan: Plan) => Promise<false | string>);
    /**
     * Attaches a callback for handling failures in the Action.
     * @param Input The input file being processed.
     * @param _Error The error encountered during execution.
     * @returns A Promise that resolves to either a string or false.
     */
    Failed?: boolean | ((Input: File, _Error: unknown) => Promise<false | string>);
    /**
     * Attaches a callback for actions that are accomplished.
     * @param On The file on which an action was accomplished.
     * @returns A Promise that resolves to either a string or false.
     */
    Accomplished?: boolean | ((On: File) => Promise<false | string>);
    /**
     * Attaches a callback for actions that result in changes to the plan.
     * @param Plan The execution plan to be changed.
     * @returns A Promise that resolves to the modified execution plan.
     */
    Changed?: (Plan: Plan) => Promise<Plan>;
    /**
     * Attaches a callback for actions that check if a file can pass through the pipe.
     * @param On The file on which the action is being checked.
     * @returns A Promise that resolves to a boolean value indicating if the file has passed the checks.
     */
    Passed?: (On: File) => Promise<Boolean>;
    /**
     * Attaches a callback for reading from a file.
     * @param On The file to be read.
     * @returns A Promise that resolves to the buffer read from the file.
     */
    Read?: (On: File) => Promise<Buffer>;
    /**
     * Attaches a callback for writing to a file.
     * @param On The file to be written to.
     * @returns A Promise that resolves to the buffer written to the file.
     */
    Wrote?: (Cache: Cache, On: File) => Promise<Buffer>;
}
