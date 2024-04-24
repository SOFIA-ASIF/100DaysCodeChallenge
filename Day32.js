"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 94
//Map() function takes each element in an array and perform some actions and store it again in the array
let arr = ["Sofia", "Asif", "Jaziba", "Qurat-ul-ain", "Nayab", "Arifa", "Abdullah"];
console.log(arr);
let changArr = arr.map(ar => ar.length);
console.log(changArr);
//question 95
// filter() funciton filters array however we want
function filterArr(arr1) {
    return arr1.filter(a => a > 10);
}
let arr1 = [5, 78, 52, 6, 3, 9, 1, 5, 7, 25, 85, 65, 45];
console.log(filterArr(arr1));
//question 96
//reduce function give the some of all elements in an array
let reducedElement = arr1.reduce((total, a) => total + a, 0);
console.log(reducedElement);
