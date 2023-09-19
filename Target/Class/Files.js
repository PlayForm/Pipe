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
var By_js_1 = require("../Fn/By.js");
var In_js_1 = require("../Fn/In.js");
var Merge_js_1 = require("../Fn/Merge.js");
var Not_js_1 = require("../Fn/Not.js");
var Pipe_js_1 = require("../Fn/Pipe.js");
var Option_js_1 = require("../Object/Option.js");
var Files = /** @class */ (function () {
    function Files(Cache, Logger) {
        var _this = this;
        /**
         * The function `Pipe` is a TypeScript async function that takes an optional `Action`
         * parameter and returns the result of calling `Pipe` with `this.Plan` and `Action`.
         * @param {Action} Action - The Action parameter is an optional parameter that
         * specifies the execution strategy to be used in the Pipe function. It has a default value of
         * Default.Pipe, which means that if no Action parameter is provided when calling the Pipe
         * function, it will use the default execution strategy.
         */
        this.Pipe = function (Action) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, Pipe_js_1.default)(this.Plan, (0, Merge_js_1.default)(Option_js_1.default.Action, Action))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        /**
         * The function `Not` takes a `File` parameter and excludes it from the `Plan.Results` array.
         * @param File - The parameter "File" is of type "Option['Exclude']".
         * @returns the current object (`this`) after performing some operations.
         */
        this.Not = function (File) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Plan;
                        return [4 /*yield*/, (0, Not_js_1.default)(File, this.Plan.Results)];
                    case 1:
                        _a.Results = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        }); };
        /**
         * The function `By` takes a file pattern or an array of file patterns and returns a promise that
         * resolves to the results of executing the patterns on the specified paths.
         * @param {Pattern | Pattern[]} [File=**/ /*] - The `File` parameter is of type `Pattern` or
        * `Pattern[]`. It represents the file or files that you want to search for. The `Pattern` type is a
        * string pattern that can include wildcards to match multiple files. The default value for `File` is
        * `"**/ /*"
        * @returns the current object (`this`) after the `By` function has been executed.
        */
        this.By = function (File) {
            if (File === void 0) { File = "**/*"; }
            return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.Plan;
                            return [4 /*yield*/, (0, By_js_1.default)(File, this.Plan.Paths, this.Plan.Results)];
                        case 1:
                            _a.Results = _b.sent();
                            return [2 /*return*/, this];
                    }
                });
            });
        };
        /**
         * The function `In` takes a path and updates the `Plan.Paths` property with the input and output
         * paths.
         * @param {Path} [Path=./] - The `Path` parameter is a string that represents the path to a file or
         * directory. It has a default value of "./", which means it will use the current directory if no path
         * is provided.
         * @returns the value of `this`, which refers to the current object.
         */
        this.In = function (Path) {
            if (Path === void 0) { Path = "./"; }
            return __awaiter(_this, void 0, void 0, function () {
                var Paths, _i, Paths_1, _a, Input, Output;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, In_js_1.default)(Path, this.Plan.Paths)];
                        case 1:
                            Paths = _b.sent();
                            if (Paths instanceof Map) {
                                for (_i = 0, Paths_1 = Paths; _i < Paths_1.length; _i++) {
                                    _a = Paths_1[_i], Input = _a[0], Output = _a[1];
                                    this.Plan.Paths.set(Input, Output);
                                }
                            }
                            return [2 /*return*/, this];
                    }
                });
            });
        };
        this.Plan = {
            Cache: Option_js_1.default.Cache,
            Files: 0,
            Logger: Option_js_1.default.Logger,
            Info: {},
            Paths: new Map(),
            Results: new Map(),
            On: {
                Buffer: "",
                After: 0,
                Before: 0,
                Input: "",
                Output: "",
            },
        };
        this.Plan.Cache = Cache !== null && Cache !== void 0 ? Cache : this.Plan.Cache;
        this.Plan.Logger = Logger !== null && Logger !== void 0 ? Logger : this.Plan.Logger;
    }
    return Files;
}());
exports.default = Files;
