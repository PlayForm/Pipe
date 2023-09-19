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
 * The function `Apply` takes a function `Fn` and a test value `Test`, and applies `Fn` to `Test` based
 * on its type (Map, Set, Array, or other) and returns the result.
 * @param {unknown} Fn - Fn is a parameter that represents a function. It can be any type of function.
 * @param {unknown} Test - The `Test` parameter can be any value that you want to apply the function
 * `Fn` to. It can be a single value, an array of values, a set of values, or a map of key-value pairs.
 * @returns The function `Apply` returns the result of applying the function `Fn` to the input `Test`.
 * The specific return value depends on the type of `Test`:
 */
exports.default = (function (Fn, Test) { return __awaiter(void 0, void 0, void 0, function () {
    var Tests, _i, Test_1, _a, Key, Value, _b, _c, _d, Tests, _e, Test_2, El, _f, _g, Tests, _h, Test_3, Index, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                if (!(Fn instanceof Function)) return [3 /*break*/, 18];
                if (!(Test instanceof Map)) return [3 /*break*/, 6];
                Tests = new Map();
                _i = 0, Test_1 = Test;
                _l.label = 1;
            case 1:
                if (!(_i < Test_1.length)) return [3 /*break*/, 5];
                _a = Test_1[_i], Key = _a[0], Value = _a[1];
                _c = (_b = Tests).set;
                return [4 /*yield*/, Fn(Key)];
            case 2:
                _d = [_l.sent()];
                return [4 /*yield*/, Fn(Value)];
            case 3:
                _c.apply(_b, _d.concat([_l.sent()]));
                _l.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/, Tests];
            case 6:
                if (!(Test instanceof Set)) return [3 /*break*/, 11];
                Tests = new Set();
                _e = 0, Test_2 = Test;
                _l.label = 7;
            case 7:
                if (!(_e < Test_2.length)) return [3 /*break*/, 10];
                El = Test_2[_e];
                _g = (_f = Tests).add;
                return [4 /*yield*/, Fn(El)];
            case 8:
                _g.apply(_f, [_l.sent()]);
                _l.label = 9;
            case 9:
                _e++;
                return [3 /*break*/, 7];
            case 10: return [2 /*return*/, Tests];
            case 11:
                if (!(Test instanceof Array)) return [3 /*break*/, 16];
                Tests = new Array();
                _h = 0, Test_3 = Test;
                _l.label = 12;
            case 12:
                if (!(_h < Test_3.length)) return [3 /*break*/, 15];
                Index = Test_3[_h];
                _k = (_j = Tests).push;
                return [4 /*yield*/, Fn(Index)];
            case 13:
                _k.apply(_j, [_l.sent()]);
                _l.label = 14;
            case 14:
                _h++;
                return [3 /*break*/, 12];
            case 15: return [2 /*return*/, Tests];
            case 16: return [4 /*yield*/, Fn(Test)];
            case 17: return [2 /*return*/, _l.sent()];
            case 18: return [2 /*return*/];
        }
    });
}); });
