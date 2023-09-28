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
exports.dirname = exports.stat = void 0;
/**
 * The function {@link "Pipe"} takes a {@link "Plan"} and an {@link "Action"} object as input, and performs a series of
 * operations based on the plan, handling various callbacks and error handling along the way.
 *
 * @module Pipe
 *
 */
exports.default = (function (Plan, _a) {
    var Accomplished = _a.Accomplished, Changed = _a.Changed, Failed = _a.Failed, Fulfilled = _a.Fulfilled, Passed = _a.Passed, Read = _a.Read, Wrote = _a.Wrote;
    return __awaiter(void 0, void 0, void 0, function () {
        var _Plan, _i, _b, _c, _Output, _Input, _d, _e, _f, _g, _h, _j, _k, _Error_1, _l, Message, _Error_2, Message, Message;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    _Plan = Plan;
                    _i = 0, _b = _Plan.Results;
                    _m.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3 /*break*/, 28];
                    _c = _b[_i], _Output = _c[0], _Input = _c[1];
                    _Plan.On.Input = _Input;
                    _Plan.On.Output = _Output;
                    _m.label = 2;
                case 2:
                    _m.trys.push([2, 23, , 27]);
                    _d = _Plan.On;
                    return [4 /*yield*/, (0, exports.stat)(_Plan.On.Input)];
                case 3:
                    _d.Before = (_m.sent()).size;
                    if (!(Read && Wrote)) return [3 /*break*/, 22];
                    // await Exec(
                    // 	`git --no-pager log --format="H%" --max-count=1 --oneline -- ${Input}`
                    // );
                    // @TODO: Before Read check cache, only on read file write is always necessary
                    _e = _Plan.On;
                    return [4 /*yield*/, Read(_Plan.On)];
                case 4:
                    // await Exec(
                    // 	`git --no-pager log --format="H%" --max-count=1 --oneline -- ${Input}`
                    // );
                    // @TODO: Before Read check cache, only on read file write is always necessary
                    _e.Buffer = _m.sent();
                    // @TODO: Check cache
                    // Fingerprint the whole operation (get function name or something from prototype)
                    _f = _Plan.On;
                    return [4 /*yield*/, Wrote(_Plan.On)];
                case 5:
                    // @TODO: Check cache
                    // Fingerprint the whole operation (get function name or something from prototype)
                    _f.Buffer = _m.sent();
                    if (!_Plan.On.Buffer) {
                        return [3 /*break*/, 27];
                    }
                    _g = Passed;
                    if (!_g) return [3 /*break*/, 7];
                    return [4 /*yield*/, Passed(_Plan.On)];
                case 6:
                    _g = (_m.sent());
                    _m.label = 7;
                case 7:
                    if (!_g) return [3 /*break*/, 22];
                    _m.label = 8;
                case 8:
                    _m.trys.push([8, 12, , 15]);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("fs/promises"); })];
                case 9:
                    _j = (_h = (_m.sent())).access;
                    _k = [(0, exports.dirname)(_Plan.On.Output)];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("fs"); })];
                case 10: return [4 /*yield*/, _j.apply(_h, _k.concat([(_m.sent()).constants.W_OK]))];
                case 11:
                    _m.sent();
                    return [3 /*break*/, 15];
                case 12:
                    _Error_1 = _m.sent();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("fs/promises"); })];
                case 13: return [4 /*yield*/, (_m.sent()).mkdir((0, exports.dirname)(_Plan.On.Output), {
                        recursive: true,
                    })];
                case 14:
                    _m.sent();
                    return [3 /*break*/, 15];
                case 15: return [4 /*yield*/, Promise.resolve().then(function () { return require("fs/promises"); })];
                case 16: return [4 /*yield*/, (_m.sent()).writeFile(_Plan.On.Output, _Plan.On.Buffer, "utf-8")];
                case 17:
                    _m.sent();
                    _l = _Plan.On;
                    return [4 /*yield*/, (0, exports.stat)(_Plan.On.Output)];
                case 18:
                    _l.After = (_m.sent()).size;
                    if (!(_Plan.Logger > 0)) return [3 /*break*/, 20];
                    _Plan.Files++;
                    if (!Changed) return [3 /*break*/, 20];
                    return [4 /*yield*/, Changed(_Plan)];
                case 19:
                    _Plan = _m.sent();
                    _m.label = 20;
                case 20:
                    if (!(_Plan.Logger > 1)) return [3 /*break*/, 22];
                    if (!(typeof Accomplished === "function")) return [3 /*break*/, 22];
                    return [4 /*yield*/, Accomplished(_Plan.On)];
                case 21:
                    Message = _m.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    _m.label = 22;
                case 22: return [3 /*break*/, 27];
                case 23:
                    _Error_2 = _m.sent();
                    _Plan.Results.delete(_Plan.On.Output);
                    if (!(typeof Failed === "function")) return [3 /*break*/, 25];
                    return [4 /*yield*/, Failed(_Plan.On, _Error_2)];
                case 24:
                    Message = _m.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    return [3 /*break*/, 26];
                case 25:
                    if (_Plan.Logger > 1) {
                        console.log(_Error_2);
                    }
                    _m.label = 26;
                case 26: return [3 /*break*/, 27];
                case 27:
                    _i++;
                    return [3 /*break*/, 1];
                case 28:
                    if (!(_Plan.Logger > 0 && _Plan.Results.size > 0)) return [3 /*break*/, 30];
                    if (!(typeof Fulfilled === "function")) return [3 /*break*/, 30];
                    return [4 /*yield*/, Fulfilled(_Plan)];
                case 29:
                    Message = _m.sent();
                    if (Message && Message.length > 0) {
                        console.log(Message);
                    }
                    _m.label = 30;
                case 30: return [2 /*return*/, _Plan];
            }
        });
    });
});
exports.stat = (await Promise.resolve().then(function () { return require("fs/promises"); })).stat;
exports.dirname = (await Promise.resolve().then(function () { return require("path"); })).dirname;
