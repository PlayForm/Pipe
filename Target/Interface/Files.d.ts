import type Action from "./Action.js";
import type Option from "./Option.js";
import type Plan from "./Plan.js";
import type { Pattern } from "fast-glob";
/**
 * @module Files
 */
export default interface Type {
    /**
     * The function `Pipe` is a TypeScript async function that takes an optional {@link "Action"}
     * parameter and returns the result of calling {@link "Pipe"} with `this.Plan` and {@link "Action"}.
     *
     * @param Action - The Action parameter is an optional parameter that
     * specifies the execution strategy to be used in the Pipe function. It has a default value of
     * Default.Pipe, which means that if no Action parameter is provided when calling the Pipe
     * function, it will use the default execution strategy.
     * @returns Plan
     */
    Pipe: (Action?: Action) => Promise<Plan>;
    /**
     * The function `Not` takes a `File` parameter and excludes it from the `Plan.Results` array.
     * @param File - The parameter "File" is of type "Option['Exclude']".
     * @returns the current object (`this`) after performing some operations.
     */
    Not: (File: Option["Exclude"]) => Promise<Type>;
    /**
     * The function `By` takes a file pattern or an array of file patterns and returns a promise that
     * resolves to the results of executing the patterns on the specified paths.
     * @param {Pattern | Pattern[]} File parameter is of type `Pattern` or
     * `Pattern[]`. It represents the file or files that you want to search for. The `Pattern` type is a
     * string pattern that can include wildcards to match multiple files. The default value for `File` is
     * `"**/ By: (File: Pattern | Pattern[]) => Promise<void>;
}
