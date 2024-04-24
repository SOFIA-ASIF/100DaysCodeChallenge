//question 130
import { add } from "./Day44import";
console.log(add(4,8));

//question 131
import { person } from "./Day44import";
const sofia = new person("Sofia")
sofia.greet();

//question 132
import { utilone, utiltwo } from "./Day44import";
import calculator from "./Day44import";
utilone()
utiltwo()
let A = new calculator(5, 4).add()
let B = new calculator(5, 4).subtract()
let C = new calculator(5, 4).multiply()
let D = new calculator(5, 4).divide()
console.log(A);
console.log(B);
console.log(C);
console.log(D);
