"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 139
// there are 4 reserved words in these codes that are let, const, if, else
let a = 1;
const b = 5;
if (a < b)
    console.log(a + b);
else
    console.log(a - b);
//question 140
// let if = "sofia"
console.log(`using reserved words cause syntax errors`);
//question 141
async function fatchData() {
    const data = fetchSomething();
    console.log(data);
}
function fetchSomething() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous behavior with a setTimeout
        setTimeout(() => {
            resolve("Some data fetched");
        }, 1000); // Simulating a delay of 1 second
    });
}
fatchData();
console.log("The 'await' keyword allow asynchronous function, promise bades behavior to be written in a cleaner, more linear fashion");
