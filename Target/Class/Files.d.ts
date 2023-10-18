/**
 * @module Files
 *
 */
export default class implements Type {
    In: (Path: import("../Type/Path.js").Type) => Promise<this>;
    By: (File: string | string[]) => Promise<this>;
    Not: (File: boolean | import("../Type/Exclude.js").Type | import("../Type/Exclude.js").Type[] | Set<import("../Type/Exclude.js").Type> | undefined) => Promise<this>;
    Pipe: (Action?: import("../Interface/Action.js").default | undefined) => Promise<this>;
    Plan: import("../Interface/Plan.js").default;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
type Type = import("../Interface/Files.js").default;
type Option = import("../Interface/Option.js").default;
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2, Action: {
    Read: ({ Input }: import("../Interface/File.js").default) => Promise<string>;
    Wrote: ({ Buffer }: import("../Interface/File.js").default) => Promise<import("../Type/Buffer.js").Type>;
    Passed: (On: import("../Interface/File.js").default) => Promise<true>;
    Failed: ({ Input }: import("../Interface/File.js").default) => Promise<string>;
    Accomplished: ({ Input, Output }: import("../Interface/File.js").default) => Promise<string>;
    Fulfilled: ({ Files }: import("../Interface/Plan.js").default) => Promise<string | false>;
    Changed: (Plan: import("../Interface/Plan.js").default) => Promise<import("../Interface/Plan.js").default>;
};
export declare const Merge: import("typescript-esbuild/Target/Interface/Merge.js").default<import("typescript-esbuild/Target/Interface/Merge.js").Generic>;
export {};
