//question 76
function addition(a, b) {
    return a + b;
}
console.log(addition(5, 9));
//question 77
function greeting(name) {
    if (name === void 0) { name = "anonymous user"; }
    console.log("Hello ".concat(name));
}
greeting("Sofia");
greeting();
//question 78
//function can be declared by 2 types one is function declaration and function expression both can do same work but the method is different
function declaration(c) {
    return c * c;
}
var expression = function (d) {
    return d * d;
};
console.log(declaration(9));
console.log(expression(9));
