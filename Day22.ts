//question 64
//combining number with a string
let combiningNumberString = function(text: string, num: number){
    return text + num
}
console.log(
 combiningNumberString("Age: ", 19))
//question 65
let reminder = function(dividened: number, divisor: number){
    return dividened % divisor
}
console.log(reminder(10,4));
//question 66
//use of && operator
let andOperator = function(a: number, b: number){
    let c = a > b && a == 8
    console.log(c);
}
andOperator(8,7)