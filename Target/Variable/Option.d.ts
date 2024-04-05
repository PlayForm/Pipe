/**
 * @module Option
 *
 */
declare const _default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: ({ Input }: import("../Interface/File").default) => Promise<string>;
        Wrote: ({ Buffer }: import("../Interface/File").default) => Promise<import("../Type/Buffer").Type>;
        Passed: (On: import("../Interface/File").default) => Promise<true>;
        Failed: ({ Input }: import("../Interface/File").default) => Promise<string>;
        Accomplished: ({ Input, Output }: import("../Interface/File").default) => Promise<string>;
        Fulfilled: ({ File }: import("../Interface/Plan").default) => Promise<string | false>;
        Changed: (Plan: import("../Interface/Plan").default) => Promise<import("../Interface/Plan").default>;
    };
    File: string;
    Exclude: false;
};
export default _default;
