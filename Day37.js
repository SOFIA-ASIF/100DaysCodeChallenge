"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 109
let currentTime = new Date();
if (currentTime.getHours() <= 12) {
    console.log("Good Morning");
}
//question 110
function assigningGrade(marks) {
    if (marks >= 90)
        return "A";
    else if (marks >= 80)
        return "B";
    else if (marks >= 70)
        return "C";
    else if (marks >= 60)
        return "D";
    else
        return "Fail";
}
console.log(assigningGrade(95));
console.log(assigningGrade(65));
console.log(assigningGrade(75));
console.log(assigningGrade(45));
//question 111
function personsCategory(age) {
    if (age < 3)
        return "Baby";
    else if (age >= 3 && age < 13)
        return "Toddler";
    else if (age >= 13 && age <= 19)
        return "Teen";
    else
        return "Adult";
}
console.log(personsCategory(24));
console.log(personsCategory(1.5));
console.log(personsCategory(10));
console.log(personsCategory(19));
