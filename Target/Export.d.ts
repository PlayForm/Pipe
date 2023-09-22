export type { Type as Action } from "./Interface/Action.js";
export type { Type as Buffer } from "./Interface/Buffer.js";
export type { Type as Dir } from "./Interface/Dir.js";
export type { Type as Exclude } from "./Interface/Exclude.js";
export type { Type as File } from "./Interface/File.js";
export type { Type as Logger } from "./Interface/Logger.js";
export type { Type as Option } from "./Interface/Option.js";
export type { Type as Path } from "./Interface/Path.js";
export declare const By: (File: string | string[], Paths: Map<string, string>, Results: Map<string, string>) => Promise<Map<string, string>>;
export declare const Bytes: (Bytes: number, Decimals?: number) => Promise<string>;
export declare const Apply: (Fn: unknown, Test: unknown) => Promise<any>;
export declare const WalkUntilGit: (Search: string, From?: string | undefined) => Promise<string>;
export declare const Default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("./Interface/File.js").Type) => Promise<string>;
        Wrote: (On: import("./Interface/File.js").Type) => Promise<import("./Interface/Buffer.js").Type>;
        Passed: (On: import("./Interface/File.js").Type) => Promise<boolean>;
        Failed: (On: import("./Interface/File.js").Type) => Promise<string>;
        Accomplished: (On: import("./Interface/File.js").Type) => Promise<string>;
        Fulfilled: (Plan: Plan) => Promise<string | false>;
        Changed: (Plan: Plan) => Promise<Plan>;
    };
};
export declare const In: (Path: Path, Paths: Map<string, string>) => Promise<Map<string, string>>;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeLeafURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
}>, Readonly<{
    key: PropertyKey;
    parents: readonly Readonly<Record<PropertyKey, unknown>>[];
}>>;
export declare const Not: (Pattern: import("./Interface/Exclude.js").Type | import("./Interface/Exclude.js").Type[] | Set<import("./Interface/Exclude.js").Type> | undefined, Files: Map<string, string>) => Promise<Map<string, string>>;
export declare const Pipe: (Plan: Plan, { Fulfilled, Failed, Accomplished, Changed, Passed, Read, Wrote }: Action) => Promise<Plan>;
export default class {
    /**
     * The function `Pipe` is a TypeScript async function that takes an optional `Action`
     * parameter and returns the result of calling `Pipe` with `this.Plan` and `Action`.
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
     * @param {Pattern | Pattern[]} - The `File` parameter is of type `Pattern` or
     * `Pattern[]`. It represents the file or files that you want to search for. The `Pattern` type is a
     * string pattern that can include wildcards to match multiple files. The default value for `File` is
     * `"**/ By: (File?: Pattern | Pattern[]) => Promise<this>;
    /**
     * The function `In` takes a path and updates the `Plan.Paths` property with the input and output
     * paths.
     * @param {Path} - The `Path` parameter is a string that represents the path to a file or
     * directory. It has a default value of "./", which means it will use the current directory if no path
     * is provided.
     * @returns the value of `this`, which refers to the current object.
     */
    In: (Path?: Path) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
import type { Type as Action } from "./Interface/Action.js";
import type { Type as Option } from "./Interface/Option.js";
import type { Type as Path } from "./Interface/Path.js";
import type { Type as Plan } from "./Interface/Plan.js";
import type { Pattern } from "fast-glob";
