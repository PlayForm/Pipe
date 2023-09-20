/**
 * Default configuration object.
 */
declare const _default: {
    Cache: {
        Folder: string;
        Base: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("../Export.ts").File) => Promise<string>;
        Wrote: (On: import("../Export.ts").File) => Promise<import("../Export.ts").Buffer>;
        Passed: (On: import("../Export.ts").File) => Promise<boolean>;
        Failed: (On: import("../Export.ts").File) => Promise<string>;
        Accomplished: (On: import("../Export.ts").File) => Promise<string>;
        Fulfilled: (Plan: import("../Interface/Plan.ts").Type) => Promise<string | false>;
        Changed: (Plan: import("../Interface/Plan.ts").Type) => Promise<import("../Interface/Plan.ts").Type>;
    };
};
export default _default;
