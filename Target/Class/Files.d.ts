/**
 * @module Files
 */
import type Action from "../Interface/Action.js";
import type Option from "../Interface/Option.js";
import type Path from "../Interface/Path.js";
import type Plan from "../Interface/Plan.js";
import type { Pattern } from "fast-glob";
export declare const _Action: {
    Read: (On: import("../Interface/File.js").default) => Promise<string>;
    Wrote: (On: import("../Interface/File.js").default) => Promise<import("../Interface/Buffer.js").Type>;
    Passed: (On: import("../Interface/File.js").default) => Promise<boolean>;
    Failed: (On: import("../Interface/File.js").default) => Promise<string>;
    Accomplished: (On: import("../Interface/File.js").default) => Promise<string>;
    Fulfilled: (Plan: Plan) => Promise<string | false>;
    Changed: (Plan: Plan) => Promise<Plan>;
}, Cache: {
    Search: string;
    Folder: string;
}, Logger: 2;
export default class {
    /**
     * The function `Pipe` is a TypeScript async function that takes an optional `Action`
     * parameter and returns the result of calling {@link "Pipe"} `this.Plan` and `Action`.
     * @param {Action} Action - The Action parameter is an optional parameter that
     * specifies the execution strategy to be used in the Pipe function. It has a default value of
     * Default.Pipe, which means that if no Action parameter is provided when calling the Pipe
     * function, it will use the default execution strategy.
     */
    Pipe: (Action: Action) => Promise<Plan>;
    /**
     * The function `Not` takes a `File` parameter and excludes it from the `Plan.Results` array.
     * @param File - The parameter "File" is of type "Option['Exclude']".
     * @returns the current object (`this`) after performing some operations.
     */
    Not: (File: Option["Exclude"]) => Promise<this>;
    /**
     * The function `By` takes a file pattern or an array of file patterns and returns a promise that
     * resolves to the results of executing the patterns on the specified paths.
     * @param {Pattern | Pattern[]} File parameter is of type `Pattern` or
     * `Pattern[]`. It represents the file or files that you want to search for. The `Pattern` type is a
     * string pattern that can include wildcards to match multiple files. The default value for `File` is
     * `"**/ By: (File?: Pattern | Pattern[]) => Promise<this>;
    /**
     * The function `In` takes a path and updates the `Plan.Paths` property with the input and output
     * paths.
     * @param {Path} Path parameter is a string that represents the path to a file or
     * directory. It has a default value of "./", which means it will use the current directory if no path
     * is provided.
     * @returns the value of `this`, which refers to the current object.
     */
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
