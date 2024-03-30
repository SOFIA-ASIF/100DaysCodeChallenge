//question 58
function averageScore(...scores: number[]){
    let totalScores = (scores.reduce((total,grade) => total + grade, 0))
console.log(totalScores/scores.length)
}
averageScore(58,96,85,47,56,32,45)
averageScore(2,4)
averageScore(8,5,1)

//question 59
function addten(number1: number ): (number: any) =>
number{
return function(number2: number ): number{
return number2 + number1
};
}
let addfive = addten(10)
console.log(addfive(5));


//question 60
let userProfile = (function()
{
    let name = "sofia"
    let age = 18
    return{
        displayInfo: function(){
            console.log(`Name: ${name} \n Age: ${age}`);
            
        }
    }
})();
userProfile.displayInfo()