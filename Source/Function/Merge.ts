import type { DeepMergeLeafURI } from "deepmerge-ts";

/**
 * @module Merge
 * 
 */
export default (await import("deepmerge-ts")).deepmergeCustom<{
	DeepMergeArraysURI: DeepMergeLeafURI;
}>({
	mergeArrays: false,
});
