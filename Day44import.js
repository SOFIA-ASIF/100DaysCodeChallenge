"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utiltwo = exports.utilone = exports.person = exports.add = void 0;
const add = (a, b) => a * b;
exports.add = add;
class person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Helllo my name is ${this.name}`);
    }
}
exports.person = person;
const utilone = () => {
    console.log("utilone");
};
exports.utilone = utilone;
const utiltwo = () => {
    console.log("utiltwo");
};
exports.utiltwo = utiltwo;
// we can have only one dafault export in a file
class calculator {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return (this.a + this.b);
    }
    subtract() {
        return (this.a - this.b);
    }
    multiply() {
        return (this.a * this.b);
    }
    divide() {
        return (this.a / this.b);
    }
}
exports.default = calculator;
