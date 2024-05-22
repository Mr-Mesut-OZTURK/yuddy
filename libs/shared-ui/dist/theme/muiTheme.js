"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.muiTheme = void 0;
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
// A custom theme for this app
exports.muiTheme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            main: "#333333",
        },
        secondary: {
            main: "#e95f42",
        },
        error: {
            main: colors_1.red.A400,
        },
        background: {
            default: "#fff",
            paper: "#f1f1f1", // menu popup background etc...
        },
    },
    shape: {
        borderRadius: 0,
    },
    typography: {
        h1: {
            fontSize: 50,
            fontWeight: 600,
        },
        h2: {
            fontSize: 45,
            fontWeight: 600,
        },
    },
    shadows: __spreadArray([
        "none",
        "1px 1px 5px 0px #ccc",
        "1px 1px 5px 0px #ccc",
        "1px 1px 5px 0px #ccc",
        "1px 1px 5px 0px #ccc"
    ], Array(20).fill("none"), true),
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 48,
                    // borderRadius: 0,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    height: 48,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    width: "100%",
                    borderRadius: 10,
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                },
            },
        },
    },
});
