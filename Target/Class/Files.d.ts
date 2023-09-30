/**
 * @module Files
 *
 */
export declare class _Class implements Type {
    Pipe: (Action?: import("../Interface/Action.js").default | undefined) => Promise<Plan>;
    Not: (File: boolean | import("../Interface/Exclude.js").Type | import("../Interface/Exclude.js").Type[] | Set<import("../Interface/Exclude.js").Type> | undefined) => Promise<this>;
    By: (File: string | string[]) => Promise<this>;
    In: (Path: import("../Interface/Path.js").Type) => Promise<this>;
    Plan: Plan;
    constructor({ Cache, Logger }: Pick<Option, "Cache" | "Logger">);
}
export default _Class;
import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2;
