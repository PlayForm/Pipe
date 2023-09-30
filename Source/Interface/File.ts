/**
 * Represents a file specification.
 *
 * @module File
 * 
 */
export default interface Type {
	/**
	 * The input file.
	 */
	Input: string;

	/**
	 * The output file.
	 */
	Output: string;

	/**
	 * The size after the action.
	 */
	After: number;

	/**
	 * The size before the action.
	 */
	Before: number;

	/**
	 * The buffer data.
	 */
	Buffer: Buffer;
}

import type Buffer from "./Buffer.js";
