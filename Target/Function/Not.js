"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The function `Not` filters out files from the `Files` array based on the provided `Pattern`
 * parameter.
 *
 * @module Not
 *
 * @param Pattern - The `Pattern` parameter is of type `Option["Exclude"]`. It represents the patterns
 * or filters that will be used to exclude certain files from the `Results` array.
 *
 * @param Results - The `Results` parameter is expected to be an array of results from a plan. Each element
 * in the array should be an array itself, with two elements. The first element represents the file
 * name, and the second element represents the file content.
 *
 * @returns Results
 *
 */
exports.default = (function (Pattern, Results) { return __awaiter(void 0, void 0, void 0, function () {
    var Filters, _i, Pattern_1, Patterns, _a, Filters_1, Filter, _b, Results_1, Result;
    return __generator(this, function (_c) {
        Filters = new Set();
        if (typeof Pattern !== "undefined") {
            if (Pattern instanceof Array || Pattern instanceof Set) {
                for (_i = 0, Pattern_1 = Pattern; _i < Pattern_1.length; _i++) {
                    Patterns = Pattern_1[_i];
                    Filters.add(Patterns);
                }
            }
            else {
                Filters.add(Pattern);
            }
        }
        for (_a = 0, Filters_1 = Filters; _a < Filters_1.length; _a++) {
            Filter = Filters_1[_a];
            for (_b = 0, Results_1 = Results; _b < Results_1.length; _b++) {
                Result = Results_1[_b];
                switch (true) {
                    case typeof Filter === "string": {
                        if (Result[0].match(Filter) ||
                            Result[1].match(Filter)) {
                            Results.delete(Result[0]);
                        }
                        break;
                    }
                    case typeof Filter === "function": {
                        if (Filter(Result[0]) ||
                            Filter(Result[1])) {
                            Results.delete(Result[0]);
                        }
                    }
                }
            }
        }
        return [2 /*return*/, Results];
    });
}); });
