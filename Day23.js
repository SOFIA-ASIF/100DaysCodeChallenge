//question 67
//Number convert string number to integar number
var addStringtoNumber = function (a, b) {
    return a + Number(b);
};
console.log(addStringtoNumber(6, "67"));
//if string doesnot have a number it will give NaN
console.log(addStringtoNumber(6, "Hello"));
//question 68
// we multiply and divide by 1 and how many places we want after ddecimal in output like in below code it is 3 decimal placs
var product = function (c, d) {
    var e = Math.round((c * d) * 1000) / 1000;
    return e;
};
console.log(product(5.369, 2.8965));
//question 69
function division(dividened, divisor) {
    var quotient = dividened / divisor;
    var reminder = dividened % divisor;
    return { quotient: quotient, reminder: reminder };
}
console.log(division(32, 8));
