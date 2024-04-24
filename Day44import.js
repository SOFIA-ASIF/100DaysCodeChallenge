"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utiltwo = exports.utilone = exports.person = exports.add = void 0;
var add = function (a, b) { return a * b; };
exports.add = add;
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("Helllo my name is ".concat(this.name));
    };
    return person;
}());
exports.person = person;
var utilone = function () {
    console.log("utilone");
};
exports.utilone = utilone;
var utiltwo = function () {
    console.log("utiltwo");
};
exports.utiltwo = utiltwo;
var calculator = /** @class */ (function () {
    function calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    calculator.prototype.add = function () {
        return (this.a + this.b);
    };
    calculator.prototype.subtract = function () {
        return (this.a - this.b);
    };
    calculator.prototype.multiply = function () {
        return (this.a * this.b);
    };
    calculator.prototype.divide = function () {
        return (this.a / this.b);
    };
    return calculator;
}());
exports.default = calculator;
