"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 79
//if we kknow that we will add any other property in obj we have to add its parameter as a optional parameter
let car = {
    make: "corolla",
    model: "Toyota",
    year: 2023,
};
console.log(car);
//question 80
car.color = "yellow";
car.year = 2025;
console.log(car);
//question 81
//to iterate every object we have to use for loop and assign type as an object
function iteration(obj) {
    let prop;
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
let table = {
    color: "brown",
    madeBy: "Dawlance",
    madeOf: "plastic",
    working: "use to eat food",
    year: 2026,
};
iteration(table);
