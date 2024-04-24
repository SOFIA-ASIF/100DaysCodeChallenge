"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 133
const student = {
    name: "Sofia Asif",
    age: 19,
    class: "13th"
};
// JSON.stringify converts object to JSON string
const jsonstring = JSON.stringify(student);
console.log(jsonstring);
//question 134
// JSON.parse converts JSON string to object
console.log(JSON.parse(jsonstring));
//question 135
const jsonstringg = JSON.stringify(student, ['name', 'age'], 2);
console.log(jsonstringg);
