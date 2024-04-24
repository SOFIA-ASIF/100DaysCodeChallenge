"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 73
function trackingOfVariable() {
    let num = 4;
    console.log(num);
    num = 6;
    console.log((num));
}
trackingOfVariable();
//question 74
let a = 5;
let b = 10;
console.log("Before swapping value of a:", a, " value of b:", b);
let temp = a;
a = b;
b = temp;
console.log("After swapping value of a:", a, " value of b:", b);
//question 75
function assignmentOperator(a) {
    console.log(a += 4);
    console.log(a -= 4);
    console.log(a *= 4);
    console.log(a /= 4);
}
assignmentOperator(8);
