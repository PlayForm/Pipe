/**
 * @module Files
 *
 */
export declare class _Class implements Type {
    Pipe: (Action?: Option["Action"]) => Promise<import("../Interface/Plan.js").default>;
    Not: (Exclude?: Option["Exclude"]) => Promise<this>;
    By: (Files?: Option["Files"]) => Promise<this>;
    In: (Path?: Option["Path"]) => Promise<this>;
    Plan: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Files: number;
        Logger: 2;
        Info: {};
        Paths: Map<any, any>;
        Results: Map<any, any>;
        On: {
            Buffer: string;
            After: number;
            Before: number;
            Input: string;
            Output: string;
        };
    };
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
export default _Class;
import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2;
