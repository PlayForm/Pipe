/**
 * Default configuration object.
 */
declare const _default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("../Export.js").File) => Promise<string>;
        Wrote: (On: import("../Export.js").File) => Promise<import("../Export.js").Buffer>;
        Passed: (On: import("../Export.js").File) => Promise<boolean>;
        Failed: (On: import("../Export.js").File) => Promise<string>;
        Accomplished: (On: import("../Export.js").File) => Promise<string>;
        Fulfilled: (Plan: import("../Interface/Plan.js").Type) => Promise<string | false>;
        Changed: (Plan: import("../Interface/Plan.js").Type) => Promise<import("../Interface/Plan.js").Type>;
    };
};
export default _default;
