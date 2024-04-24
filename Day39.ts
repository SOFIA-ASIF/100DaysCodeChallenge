//question 115
function switchExecution(dayNumber: number): string{
    switch (dayNumber) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;    
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        case 7:
            return "Sunday"
            break;
        default:
            return "Invalid Number"
    }
}
console.log(`Enter a number 1-7 to print a day`);
console.log(switchExecution(1));
console.log(switchExecution(9));

//question 116
function seasons(month: number):void {
    switch (month) {
        case 10:
        case 11:
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break
        case 9:
            console.log("Autumn");
            break
//question 117{
        default:
            console.log("invalid month");
            break;
            //}
    }
}
seasons(3)
seasons(13)

