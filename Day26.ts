//question 76
function addition(a: number, b: number) {
  return a + b;
}
console.log(addition(5, 9));
//question 77
function greeting(name: string = "anonymous user") {
  console.log(`Hello ${name}`);
}
greeting("Sofia");
greeting();
//question 78
//function can be declared by 2 types one is function declaration and function expression both can do same work but the method is different
function declaration(c: number) {
  return c * c;
}
const expression = function (d: number) {
  return d * d;
};
console.log(declaration(9));
console.log(expression(9));
