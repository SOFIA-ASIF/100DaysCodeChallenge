export const add = (a: number, b: number): number => a*b;
export class person {
    name: string;
    constructor(name: string){
        this.name = name
    }
    greet() {
        console.log(`Helllo my name is ${this.name}`);
    }
}
export const utilone = () => {
    console.log("utilone");
}
export const utiltwo = () => {
    console.log("utiltwo");
}
// we can have only one dafault export in a file
export default class calculator {
    a: number
    b: number

constructor(a:number, b:number)
{
    this.a = a
    this.b = b
}
add(){
    return(this.a + this.b)
}
subtract(){
    return(this.a - this.b)
}
multiply(){
    return(this.a * this.b)
}
divide(){
    return(this.a / this.b)
}
}