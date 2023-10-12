/**
 * @module Files
 *
 */
export default class implements Type {
    In: (Path: import("../Interface/Path.js").Type) => Promise<this>;
    By: (File: string | string[]) => Promise<this>;
    Not: (File: boolean | import("../Interface/Exclude.js").Type | import("../Interface/Exclude.js").Type[] | Set<import("../Interface/Exclude.js").Type> | undefined) => Promise<this>;
    Pipe: (Action?: import("../Interface/Action.js").default | undefined) => Promise<Plan>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2;
export declare const Merge: import("typescript-esbuild/Target/Interface/Merge.js").default<import("typescript-esbuild/Target/Interface/Merge.js").Generic>;
