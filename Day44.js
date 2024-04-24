"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//question 130
const Day44import_1 = require("./Day44import");
console.log((0, Day44import_1.add)(4, 8));
//question 131
const Day44import_2 = require("./Day44import");
const sofia = new Day44import_2.person("Sofia");
sofia.greet();
//question 132
const Day44import_3 = require("./Day44import");
const Day44import_4 = __importDefault(require("./Day44import"));
(0, Day44import_3.utilone)();
(0, Day44import_3.utiltwo)();
let A = new Day44import_4.default(5, 4).add();
let B = new Day44import_4.default(5, 4).subtract();
let C = new Day44import_4.default(5, 4).multiply();
let D = new Day44import_4.default(5, 4).divide();
console.log(A);
console.log(B);
console.log(C);
console.log(D);
