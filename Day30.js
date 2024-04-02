//question 88
function roundOff(number) {
    return Math.round(number);
}
console.log(roundOff(5.88));
console.log(roundOff(3.9));
//question 89
function convertingToString(string) {
    return parseFloat(string);
}
console.log(convertingToString("985"));
console.log(convertingToString("98755.3698"));
//question 90
function checkNumber(value) {
    return isNaN(value);
}
console.log(checkNumber("hello"));
console.log(checkNumber(985));
