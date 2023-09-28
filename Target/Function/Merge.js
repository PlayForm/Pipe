"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module Merge
 *
 */
exports.default = (await Promise.resolve().then(function () { return require("deepmerge-ts"); })).deepmergeCustom({
    mergeArrays: false,
});
