/**
 * @module Pipe
 *
 */
export default class implements Interface {
    In: (Path: import("../Type/Path.js").Type) => Promise<this>;
    By: (File: string | string[]) => Promise<this>;
    Not: (File: boolean | import("../Type/Exclude.js").Type | Set<import("../Type/Exclude.js").Type> | import("../Type/Exclude.js").Type[] | undefined) => Promise<this>;
    Pipe: (Action?: import("../Interface/Action.js").default | undefined) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
import type Interface from "../Interface/Class.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
export declare const Cache: boolean | import("../Interface/Cache.js").default | undefined, Logger: boolean | import("../Type/Logger.js").Type | undefined, Action: boolean | import("../Interface/Action.js").default | undefined;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: readonly Readonly<Record<PropertyKey, unknown>>[];
}>>;
