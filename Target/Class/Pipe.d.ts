/**
 * @module Pipe
 *
 */
export default class implements Type {
    In: (Path: import("../Type/Path").Type) => Promise<this>;
    By: (File: string | string[]) => Promise<this>;
    Not: (File: boolean | import("../Type/Exclude").Type | Set<import("../Type/Exclude").Type> | import("../Type/Exclude").Type[] | undefined) => Promise<this>;
    Pipe: (Action?: import("../Interface/Action").default | undefined) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
import type Type from "@Interface/Class.js";
import type Option from "@Interface/Option.js";
import type Plan from "@Interface/Plan.js";
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2, Action: {
    Read: ({ Input }: import("../Interface/File").default) => Promise<string>;
    Wrote: ({ Buffer }: import("../Interface/File").default) => Promise<import("../Type/Buffer").Type>;
    Passed: (On: import("../Interface/File").default) => Promise<true>;
    Failed: ({ Input }: import("../Interface/File").default) => Promise<string>;
    Accomplished: ({ Input, Output }: import("../Interface/File").default) => Promise<string>;
    Fulfilled: ({ File }: Plan) => Promise<string | false>;
    Changed: (Plan: Plan) => Promise<Plan>;
};
export declare const Merge: import("../Interface/Merge").default<import("../Interface/Merge").Generic>;
