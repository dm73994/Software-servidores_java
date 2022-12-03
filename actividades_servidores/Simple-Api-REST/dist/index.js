"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const productsRouter_1 = __importDefault(require("./Client-res/productsRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/', productsRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
