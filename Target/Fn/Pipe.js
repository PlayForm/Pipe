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
var fs_1 = require("fs");
var promises_1 = require("fs/promises");
var path_1 = require("path");
/**
 * The function `Pipe` takes a `Plan` and an `Action` object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 * @param {Plan} Plan - The `Plan` parameter is an object that represents the execution plan. It
 * contains information about the tasks to be executed and their corresponding inputs and outputs.
 * @param {Action}  - - `Plan`: The plan object that contains the tasks to be executed.
 * @returns The function `Pipe` returns the modified `Plan` object.
 */
exports.default = (function (Plan, _a) {
    var Fulfilled = _a.Fulfilled, Failed = _a.Failed, Accomplished = _a.Accomplished, Changed = _a.Changed, Passed = _a.Passed, Read = _a.Read, Wrote = _a.Wrote;
    return __awaiter(void 0, void 0, void 0, function () {
        var _Plan, _i, _b, _c, Output, Input, _d, _e, Buffer_1, _f, _Error_1, _g, Message, _Error_2, Message, Message;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _Plan = Plan;
                    _i = 0, _b = _Plan.Results;
                    _h.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 24];
                    _c = _b[_i], Output = _c[0], Input = _c[1];
                    _h.label = 2;
                case 2:
                    _h.trys.push([2, 19, , 23]);
                    _Plan.On.Input = Input;
                    _Plan.On.Output = Output;
                    _d = _Plan.On;
                    return [4 /*yield*/, (0, promises_1.stat)(_Plan.On.Input)];
                case 3:
                    _d.Before = (_h.sent()).size;
                    if (!(Read && Wrote)) return [3 /*break*/, 18];
                    // @TODO: Before Read check cache, only on read file write is always necessary
                    _e = _Plan.On;
                    return [4 /*yield*/, Read(_Plan.On)];
                case 4:
                    // @TODO: Before Read check cache, only on read file write is always necessary
                    _e.Buffer = _h.sent();
                    return [4 /*yield*/, Wrote(_Plan.On)];
                case 5:
                    Buffer_1 = _h.sent();
                    if (!Buffer_1) {
                        return [3 /*break*/, 23];
                    }
                    _Plan.On.Buffer = Buffer_1;
                    _f = Passed;
                    if (!_f) return [3 /*break*/, 7];
                    return [4 /*yield*/, Passed(_Plan.On)];
                case 6:
                    _f = (_h.sent());
                    _h.label = 7;
                case 7:
                    if (!_f) return [3 /*break*/, 18];
                    _h.label = 8;
                case 8:
                    _h.trys.push([8, 10, , 12]);
                    return [4 /*yield*/, (0, promises_1.access)((0, path_1.dirname)(_Plan.On.Output), fs_1.constants.W_OK)];
                case 9:
                    _h.sent();
                    return [3 /*break*/, 12];
                case 10:
                    _Error_1 = _h.sent();
                    return [4 /*yield*/, (0, promises_1.mkdir)((0, path_1.dirname)(_Plan.On.Output), {
                            recursive: true,
                        })];
                case 11:
                    _h.sent();
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, (0, promises_1.writeFile)(_Plan.On.Output, _Plan.On.Buffer, "utf-8")];
                case 13:
                    _h.sent();
                    _g = _Plan.On;
                    return [4 /*yield*/, (0, promises_1.stat)(_Plan.On.Output)];
                case 14:
                    _g.After = (_h.sent()).size;
                    if (!(_Plan.Logger > 0)) return [3 /*break*/, 16];
                    _Plan.Files++;
                    if (!Changed) return [3 /*break*/, 16];
                    return [4 /*yield*/, Changed(_Plan)];
                case 15:
                    _Plan = _h.sent();
                    _h.label = 16;
                case 16:
                    if (!(_Plan.Logger > 1)) return [3 /*break*/, 18];
                    if (!(typeof Accomplished === "function")) return [3 /*break*/, 18];
                    return [4 /*yield*/, Accomplished(_Plan.On)];
                case 17:
                    Message = _h.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    _h.label = 18;
                case 18: return [3 /*break*/, 23];
                case 19:
                    _Error_2 = _h.sent();
                    _Plan.Results.delete(Output);
                    if (!(typeof Failed === "function")) return [3 /*break*/, 21];
                    return [4 /*yield*/, Failed(_Plan.On, _Error_2)];
                case 20:
                    Message = _h.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    return [3 /*break*/, 22];
                case 21:
                    if (_Plan.Logger > 1) {
                        console.log(_Error_2);
                    }
                    _h.label = 22;
                case 22: return [3 /*break*/, 23];
                case 23:
                    _i++;
                    return [3 /*break*/, 1];
                case 24:
                    if (!(_Plan.Logger > 0 && _Plan.Results.size > 0)) return [3 /*break*/, 26];
                    if (!(typeof Fulfilled === "function")) return [3 /*break*/, 26];
                    return [4 /*yield*/, Fulfilled(_Plan)];
                case 25:
                    Message = _h.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    _h.label = 26;
                case 26: return [2 /*return*/, _Plan];
            }
        });
    });
});
