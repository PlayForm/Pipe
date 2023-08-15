/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Pattern } from "fast-glob";
import type { Stream } from "stream";
export type Debug = 0 | 1 | 2;
export type Buffer = string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream;
/**
 * Represents the execution configuration for specific actions on files.
 */
export interface Execution {
    /**
     * Attaches a callback for the fulfillment of the Execution.
     * @param Plan The execution plan to be fulfilled.
     * @returns A Promise that resolves to either a string or false.
     */
    Fulfilled?: boolean | ((Plan: Plan) => Promise<false | string>);
    /**
     * Attaches a callback for handling failures in the Execution.
     * @param Input The input file being processed.
     * @param _Error The error encountered during execution.
     * @returns A Promise that resolves to either a string or false.
     */
    Failed?: boolean | ((Input: File, _Error: unknown) => Promise<false | string>);
    /**
     * Attaches a callback for actions that are accomplished.
     * @param On The file on which an action was accomplished.
     * @returns A Promise that resolves to either a string or false.
     */
    Accomplished?: boolean | ((On: File) => Promise<false | string>);
    /**
     * Attaches a callback for actions that result in changes to the plan.
     * @param Plan The execution plan to be changed.
     * @returns A Promise that resolves to the modified execution plan.
     */
    Changed?: (Plan: Plan) => Promise<Plan>;
    /**
     * Attaches a callback for actions that have passed.
     * @param On The file on which the action has passed.
     * @returns A Promise that resolves to a boolean value.
     */
    Passed?: (On: File) => Promise<Boolean>;
    /**
     * Attaches a callback for reading from a file.
     * @param On The file to be read.
     * @returns A Promise that resolves to the buffer read from the file.
     */
    Read?: (On: File) => Promise<Buffer>;
    /**
     * Attaches a callback for writing to a file.
     * @param On The file to be written to.
     * @returns A Promise that resolves to the buffer written to the file.
     */
    Wrote?: (On: File) => Promise<Buffer>;
}
/**
 * Represents criteria for excluding files.
 */
export type Exclude = string | RegExp | ((File: string) => boolean);
/**
 * Represents a path specification.
 */
export type Path = string | URL | Map<string | URL, string | URL> | false;
/**
 * Represents options for configuring the behavior of the program.
 */
export interface Option {
    [key: string]: any;
    /**
     * Configuration for the target path(s).
     */
    Path?: Path | Path[] | Set<Path>;
    /**
     * Criteria for excluding files.
     */
    Exclude?: Exclude | Exclude[] | Set<Exclude>;
    /**
     * File patterns to be matched.
     */
    Files?: Pattern | Pattern[];
    /**
     * Execution pipeline configuration.
     */
    Pipe?: Execution;
    Logger?: Debug;
}
export interface Plan {
    Debug: Debug;
    Files: number;
    Info: any;
    Paths: Map<Dir["Input"], Dir["Output"]>;
    Results: Map<`${Dir["Output"]}${File["Output"]}`, `${Dir["Input"]}${File["Input"]}`>;
    On: File;
}
export interface Dir {
    Input: string;
    Output: string;
}
export interface File {
    Input: string;
    Output: string;
    After: number;
    Before: number;
    Buffer: Buffer;
}
declare const _default: {
    Path: string;
    Logger: 2;
    Pipe: {
        Wrote: (On: File) => Promise<Buffer>;
        Read: (On: File) => Promise<string>;
        Passed: (On: File) => Promise<boolean>;
        Failed: (On: File) => Promise<string>;
        Accomplished: (On: File) => Promise<string>;
        Fulfilled: (Plan: Plan) => Promise<string | false>;
        Changed: (Plan: Plan) => Promise<Plan>;
    };
};
export default _default;
