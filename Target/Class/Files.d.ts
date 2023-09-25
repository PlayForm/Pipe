/**
 * @module Files
 */
export default class Files implements Type {
    Pipe: (Action?: Action | undefined) => Promise<Plan>;
    Not: (File: Option["Exclude"]) => Promise<this>;
    By: (File?: Pattern | Pattern[]) => Promise<this>;
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
import type Type from "../Interface/Files.js";
import type Action from "../Interface/Action.js";
import type Option from "../Interface/Option.js";
import type Path from "../Interface/Path.js";
import type Plan from "../Interface/Plan.js";
import type { Pattern } from "fast-glob";
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2;
