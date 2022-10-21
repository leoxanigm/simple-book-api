"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookNames_1 = __importDefault(require("./bookNames"));
const app = (0, express_1.default)();
app.get('/all', (req, res) => {
    /* Add cross policy header */
    res.header('Access-Control-Allow-Origin', '*');
    res.json(bookNames_1.default);
});
app.get('/search', (req, res) => {
    const foundBooks = bookNames_1.default.filter(book => { var _a; return book.toLowerCase().includes((_a = req.query) === null || _a === void 0 ? void 0 : _a.text.toLowerCase()); });
    res.header('Access-Control-Allow-Origin', '*');
    res.json(foundBooks);
});
app.listen(8081, () => {
    console.log('Simple API running on port 8081...');
});
