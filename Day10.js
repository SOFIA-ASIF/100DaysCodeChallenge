"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 28
let age = 26;
if (age < 2) {
    console.log("person is a baby");
}
if (age == 2 || age < 4) {
    console.log("person is a toddler");
}
if (age == 4 || age < 13) {
    console.log("person is a kid");
}
if (age == 13 || age < 20) {
    console.log("person is a teenager");
}
if (age == 20 || age < 65) {
    console.log("person is a adult");
}
if (age >= 65) {
    console.log("person is a elder");
}
//question 29
let favourite_fruits = ["cheeko", "tomato", "grapes"];
if (favourite_fruits.includes("cheeko")) {
    console.log("i really like cheeko");
}
if (favourite_fruits.includes("tomato")) {
    console.log("i really like tomato");
}
if (favourite_fruits.includes("grapes")) {
    console.log("i really like grapes");
}
if (favourite_fruits.includes("apple")) {
    console.log("i really like apple");
}
if (favourite_fruits.includes("mango")) {
    console.log("i really like mango");
}
//question 30, 31
let user_name = ["admin", "hania", "wara", "sadia", "umer"];
if (user_name.length === 0) {
    console.log("we neeed to find the users");
}
for (let i = 0; i <= user_name.length; i++) {
    if (user_name[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", user_name[i], "thank you for logging in again");
    }
}
user_name = [];
console.log("we need to find some users");
