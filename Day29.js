"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//question 85
//indexof checks the index of your desired position in a string and if did not find the string it returns -1
function checkingOfSubstring(line) {
    return line.indexOf("hy");
}
console.log(checkingOfSubstring("Your mouth can be a barrier between you and your success"));
//question 86
//includes checks if certain thing is in the give item/string and gives boolean answer
function checkingString(line1) {
    return line1.includes("you");
}
console.log(checkingString("your mouth can be a barrier between you and your success"));
//question 87
//substring cut the string from where we want to start it and end it
function extractingAString(line2) {
    console.log(line2.substring(0, 20));
}
extractingAString("your mouth can be a barrier between you and your success");
