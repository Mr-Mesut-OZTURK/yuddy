"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YButton = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var YButton = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onClick }, children));
};
exports.YButton = YButton;
