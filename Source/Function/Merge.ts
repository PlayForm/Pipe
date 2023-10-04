/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeCustom<PMF>({
	mergeArrays: false,
}) satisfies Type<PMF> as Type<PMF>;

export interface PMF {
	DeepMergeArraysURI: DeepMergeLeafURI;
}

import type Type from "../Interface/Merge.js";

import type { DeepMergeLeafURI } from "deepmerge-ts";
