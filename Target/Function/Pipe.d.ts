/// <reference types="node" />
/**
 * The function `Pipe` takes a `Plan` and an `Action` object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 *
 * @module Pipe
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Pipe.js";
export declare const stat: typeof import("fs/promises").stat;
export declare const dirname: (path: string) => string;
