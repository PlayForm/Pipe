/// <reference types="node" />
/**
 * The function `Pipe` takes a `Plan` and an `Action` object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 *
 * @module Pipe
 *
 * @param {import('../Interface/Plan.js')} Plan - The `Plan` parameter is an object that represents the execution plan. It
 * contains information about the tasks to be executed and their corresponding inputs and outputs.
 * @param {Action}  - - `Plan`: The plan object that contains the tasks to be executed.
 * @returns The function `Pipe` returns the modified `Plan` object.
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Pipe.js";
export declare const stat: typeof import("fs/promises").stat;
export declare const dirname: (path: string) => string;
