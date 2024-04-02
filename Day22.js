//question 64
//combining number with a string
var combiningNumberString = function (text, num) {
    return text + num;
};
console.log(combiningNumberString("Age: ", 19));
//question 65
var reminder = function (dividened, divisor) {
    return dividened % divisor;
};
console.log(reminder(10, 4));
//question 66
//use of && operator
var andOperator = function (a, b) {
    var c = a > b && a == 8;
    console.log(c);
};
andOperator(8, 7);
