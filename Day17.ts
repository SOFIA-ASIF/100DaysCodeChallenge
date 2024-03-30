//question 49
function hobbies (...hobby : string[]){
    hobby.forEach(hobb => {
        console.log(`i like to ${hobb}`);
                
    });   
}
hobbies("swimming")
hobbies("playing","wood crafting")
hobbies("studying","reading","planting")

//question 50
let idealDay = `my ideal day have has following activities:
1. I wake up at 5:00 and pray fajr salah
2. I study for atleast 3 hours 
3. I read my favourite book`
console.log(idealDay);


//question 51
let area = (height:number, width:number,) : number => height * width
console.log(area(4,5))