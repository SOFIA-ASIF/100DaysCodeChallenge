"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 70
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//question 71
//const can't be updated while let can
let a = 6;
console.log(a);
a = 8;
console.log(a);
const b = "sofia";
console.log(b);
//b = "Jaziba"   comment out bcz can't be possible
try {
    console.log(b);
}
catch (error) {
    console.log("can't be accessible");
}
//question 72
{
    let blockLet = 5;
    const blockConst = 5;
    console.log(blockLet);
    console.log(blockConst);
}
try {
    //console log comment out bcz they gives error means {} blocks elements are not accesible outside the block
    // console.log(blockLet);
}
catch (error) {
    console.log("block is not accessible");
}
try {
    // console.log(blockConst);
}
catch (error) {
    console.log("Nlock is not accessible");
}
