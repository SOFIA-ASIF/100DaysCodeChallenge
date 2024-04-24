//question 106
function findLeapYear(year: number): void{
    if((year % 4 === 0 && year % 100 === 0) || year % 400 === 0){
      console.log(`The year ${year} is a leap year`);

    }else
    console.log(`The year ${year} is a regular year`);
}
findLeapYear(2000)
findLeapYear(2022)
findLeapYear(2016)

//question 107
//to check if the number is divisible by both 2 & 3
function checking(number: number): boolean{
    return number % 2 === 0 && number % 3 === 0
}
console.log(checking(5))
console.log(checking(6))
console.log(checking(9))

//question 108
function stringChecking(str1: string, str2: string):boolean{
    return str1.toLowerCase === str2.toLowerCase
}
console.log(stringChecking("Sofia", "sofia"));
console.log(stringChecking("Muhammad", "Asif"));