//question 103
function randomBooelan(number?: number): boolean{
    return Math.random()>0.5
}
console.log(randomBooelan())
console.log(randomBooelan(6))

//question 104
function hexadecimalColor(): string{
    const color = "#" +
    Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')
    return color
}
console.log(hexadecimalColor());

//question 105
function diceRoll(): number{
    return Math.floor(Math.random() * 6) + 1
}
console.log(diceRoll());
