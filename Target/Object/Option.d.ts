/**
 * Represents options for configuring the behavior of the program.
 *
 * @module Option
 */
declare const _default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("../Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("../Interface/File.js").default) => Promise<import("../Interface/Buffer.js").Type>;
        Passed: (On: import("../Interface/File.js").default) => Promise<boolean>;
        Failed: (On: import("../Interface/File.js").default) => Promise<string>;
        Accomplished: (On: import("../Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("../Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("../Interface/Plan.js").default) => Promise<import("../Interface/Plan.js").default>;
    };
    Files: string;
    Exclude: false;
};
export default _default;
