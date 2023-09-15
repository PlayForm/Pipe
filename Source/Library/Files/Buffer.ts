import type { Stream } from "stream";

/**
 * Represents various types that can be used as buffer data.
 */
export type Type =
	| string
	| NodeJS.ArrayBufferView
	| Iterable<string | NodeJS.ArrayBufferView>
	| AsyncIterable<string | NodeJS.ArrayBufferView>
	| Stream;
