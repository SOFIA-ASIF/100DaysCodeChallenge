"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 124
let person = {
    name: "sofia",
    getName: function () {
        return this.name;
    }
};
console.log(person.getName());
//question 125
let square = {
    length: 25,
    calculateParameter: function () {
        let parameter = "The parameter of the square is " + (this.length * this.length);
        return parameter;
    }
};
console.log(square.calculateParameter());
//question 126
let student = {
    class: "5th",
    outerMethod: function () {
        console.log(`the class of the student is ${this.class}`);
        const innerMethod = () => {
            console.log(`the class of the student is ${this.class}`);
        };
        innerMethod();
    }
};
student.outerMethod();
