//question 73
function trackingOfVariable() {
    var num = 4;
    console.log(num);
    num = 6;
    console.log((num));
}
trackingOfVariable();
//question 74
var a = 5;
var b = 10;
console.log("Before swapping value of a:", a, " value of b:", b);
var temp = a;
a = b;
b = temp;
console.log("After swapping value of a:", a, " value of b:", b);
//question 75
function assignmentOperator(a) {
    console.log(a += 4);
    console.log(a -= 4);
    console.log(a *= 4);
    console.log(a /= 4);
}
assignmentOperator(8);
