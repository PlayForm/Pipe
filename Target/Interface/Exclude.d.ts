/**
 * Represents criteria for excluding files.
 *
 * @module Exclude
 */
export type Type = string | RegExp | ((File: string) => boolean);
export type { Type as default };
