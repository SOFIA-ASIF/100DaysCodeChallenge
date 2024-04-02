//question 82
//.length gives the total legth of the string
function lengthOfString(line3) {
    return line3.length;
}
console.log(lengthOfString("Your mouth can be a barrier between you and your success"));
//question 83
function cases(line4) {
    console.log(line4.toUpperCase());
    console.log(line4.toLowerCase());
}
cases("Your mouth can be a barrier between you and your success");
//question 84
//replace function takes one word and replace it with another and it can be done globally
function replacement(line5) {
    return line5.replace(/your/g, "our");
}
console.log(replacement("your mouth can be a barrier between you and your success"));
