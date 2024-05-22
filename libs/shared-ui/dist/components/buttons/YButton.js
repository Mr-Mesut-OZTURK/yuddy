"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YButton = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var YButton = function (_a) {
    var _b;
    var children = _a.children, onClick = _a.onClick, sx = _a.sx, rest = __rest(_a, ["children", "onClick", "sx"]);
    return (react_1.default.createElement(material_1.Button, { variant: "contained", color: (_b = rest === null || rest === void 0 ? void 0 : rest.color) !== null && _b !== void 0 ? _b : "primary", onClick: onClick, sx: __assign({}, sx) }, children));
};
exports.YButton = YButton;
