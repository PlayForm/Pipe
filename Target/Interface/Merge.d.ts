/**
 * @module Merge
 *
 */
export default interface Type<PMF extends Partial<DeepMergeMergeFunctionsURIs>> {
    <Ts extends ReadonlyArray<unknown>>(...objects: Ts): DeepMergeHKT<Ts, GetDeepMergeMergeFunctionsURIs<PMF>, DeepMergeBuiltInMetaData>;
}
import type { DeepMergeBuiltInMetaData, DeepMergeHKT, DeepMergeMergeFunctionsURIs, GetDeepMergeMergeFunctionsURIs } from "deepmerge-ts";
