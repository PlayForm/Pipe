import type { DeepMergeLeafURI as URI } from "deepmerge-ts";

import { deepmergeCustom as Merge } from "deepmerge-ts";

export default Merge<{
	DeepMergeArraysURI: URI;
}>({
	mergeArrays: false,
});
