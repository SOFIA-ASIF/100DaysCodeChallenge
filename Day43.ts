//question 127
function traditionalFunction(a: number, b: number): void{
    console.log(a*b);
}
traditionalFunction(5,6)
let async = (a:number, b:number): number =>  a*b
 async(5,6)   

 //question 128
 let multiplyParameters = (...numbers: number[]) => {
    return numbers.reduce((total, number) => total*number, 1)
 }
 console.log(multiplyParameters(1,2,3,4,5));
 
 //question 129
 const traditionalVSArrow = {
    value: "Traditional VS Arrow",
    trditional: function(){
        console.log(this.value);
    },
    arrow: () => {
    //    console.log(this.value);
    }
    
 }
 traditionalVSArrow.trditional()
 traditionalVSArrow.arrow() //undefined