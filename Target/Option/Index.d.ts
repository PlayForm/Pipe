import type { Type as Action } from "../Library/Files/Action.js";
import type { Type as Cache } from "../Library/Files/Cache.js";
import type { Type as Exclude } from "../Library/Files/Exclude.js";
import type { Type as Logger } from "../Library/Files/Logger.js";
import type { Type as Path } from "../Library/Files/Path.js";
import type { Pattern } from "fast-glob";
/**
 * Represents options for configuring the behavior of the program.
 */
export interface Type {
    [key: string]: any;
    /**
     * Configuration for the target cache.
     *
     * @default "./Cache"
     */
    Cache?: Cache;
    /**
     * Configuration for the target path(s).
     *
     * @default "./Target"
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
     * Action pipe configuration.
     */
    Action?: Action;
    /**
     * Debugging level.
     *
     * @default 2
     */
    Logger?: Logger;
}
/**
 * Default configuration object.
 */
declare const _default: {
    Cache: string;
    Path: string;
    Logger: 2;
    Action: {
        Read: (On: import("../Index.ts").File) => Promise<string>;
        Wrote: (On: import("../Index.ts").File) => Promise<import("../Index.ts").Buffer>;
        Passed: (On: import("../Index.ts").File) => Promise<boolean>;
        Failed: (On: import("../Index.ts").File) => Promise<string>;
        Accomplished: (On: import("../Index.ts").File) => Promise<string>;
        Fulfilled: (Plan: import("../Library/Files/Plan.ts").Type) => Promise<string | false>;
        Changed: (Plan: import("../Library/Files/Plan.ts").Type) => Promise<import("../Library/Files/Plan.ts").Type>;
    };
};
export default _default;
