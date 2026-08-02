import type Interface from "../Interface/Class.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
/**
 * @module Pipe
 *
 */
export default class implements Interface {
    In: (...[Path]: Parameters<Interface["In"]>) => Promise<this>;
    By: (...[File]: Parameters<Interface["By"]>) => Promise<this>;
    Not: (...[Exclude]: Parameters<Interface["Not"]>) => Promise<this>;
    Pipe: (...[_Action]: Parameters<Interface["Pipe"]>) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
export declare const Cache: any, Logger: any, Action: any;
export declare const Merge: <Target extends object, Ts extends ReadonlyArray<unknown>>(target: Target, ...objects: Ts) => void;
