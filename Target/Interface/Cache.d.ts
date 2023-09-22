/// <reference types="node" resolution-mode="require"/>
/**
 * Represents the cache path configuration.
 */
export type Type = false | {
    Search: string | URL;
    Folder: string | URL;
};
