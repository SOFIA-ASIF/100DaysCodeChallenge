//question 67
//Number convert string number to integar number
let addStringtoNumber = function (a: number, b: string): number {
  return a + Number(b);
};
console.log(addStringtoNumber(6, "67"));
//if string doesnot have a number it will give NaN
console.log(addStringtoNumber(6, "Hello"));
//question 68
// we multiply and divide by 1 and how many places we want after ddecimal in output like in below code it is 3 decimal placs
let product = function (c: number, d: number) {
  let e = Math.round(c * d * 1000) / 1000;
  return e;
};
console.log(product(5.369, 2.8965));
//question 69
function division(
  dividened: number,
  divisor: number
): { quotient: number; reminder: number } {
  let quotient = dividened / divisor;
  let reminder = dividened % divisor;
  return { quotient, reminder };
}
console.log(division(32, 8));