"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YMainProductCard = void 0;
var react_1 = __importDefault(require("react"));
var buttons_1 = require("../buttons");
var material_1 = require("@mui/material");
var YMainProductCard = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'bg-[#f0f2f4] p-2 relative' },
            react_1.default.createElement("img", { src: "https://demo4techies.com/prestashop/shopkart-lite/1-home_default/casual-shoes-sneaker.jpg", alt: "" }),
            react_1.default.createElement("div", { className: 'top-0 left-0 right-0' },
                react_1.default.createElement("div", { className: 'bg-red-700' }, "NEW PRODUCT"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: 'bg-gray-500' }, "ON SALE"),
                    react_1.default.createElement("div", { className: 'bg-black' }, "-12%")))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(material_1.Link, { href: "" }, "CASUAL SHOES SNEAKER"),
            react_1.default.createElement("p", { className: 'font-bold' },
                "$99.00",
                react_1.default.createElement("span", { className: 'color' }, "$87.12"))),
        react_1.default.createElement(buttons_1.YButton, { sx: {
                borderRadius: 0,
                backgroundColor: '#000'
            } }, "ADD TO CART")));
};
exports.YMainProductCard = YMainProductCard;
