/// <reference types="node" />
/// <reference types="node" />
/**
 * Represents various types that can be used as buffer data.
 *
 * @module Buffer
 *
 */
export type Type = string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream;
export type { Type as default };
import type { Stream } from "stream";
