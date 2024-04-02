//question 88
//round function round off the given integar or float
function roundOff(number: number) {
  return Math.round(number);
}
console.log(roundOff(5.88));
console.log(roundOff(3.9));
//question 89
//if we know that the number given will be integar we use parseInt but if both can come we use parseFloat
function convertingToString(string: string) {
  return parseFloat(string);
}
console.log(convertingToString("985"));
console.log(convertingToString("98755.3698"));
//question 90
//isNan check if the value given is number or not if the value is given other than number it gives true otherwise false
function checkNumber(value: any): boolean {
  return isNaN(value);
}
console.log(checkNumber("hello"));
console.log(checkNumber(985));
