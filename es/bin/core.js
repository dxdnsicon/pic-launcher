"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const loadUrl = (url) => {
    const $ = cheerio_1.default.load(url);
};
exports.default = loadUrl;
//# sourceMappingURL=core.js.map