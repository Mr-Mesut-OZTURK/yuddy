"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuddyProvider = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../theme");
var YuddyProvider = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.muiTheme }, children));
};
exports.YuddyProvider = YuddyProvider;
exports.default = exports.YuddyProvider;
