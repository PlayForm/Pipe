import type { DeepMergeLeafURI } from "deepmerge-ts";

export default (await import("deepmerge-ts")).deepmergeCustom<{
	DeepMergeArraysURI: DeepMergeLeafURI;
}>({
	mergeArrays: false,
});
