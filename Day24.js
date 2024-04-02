//question 70
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//question 71
//const can't be updated while let can
var a = 6;
console.log(a);
a = 8;
console.log(a);
var b = "sofia";
console.log(b);
//b = "Jaziba"
try {
    console.log(b);
}
catch (error) {
    console.log("can't be accessible");
}
//question 72
{
    var blockLet = 5;
    var blockConst = 5;
    console.log(blockLet);
    console.log(blockConst);
}
try {
    //console log comment out bcz they gives error means {} blocks elements are not accesible outside the block
    // console.log(blockLet);
}
catch (error) {
    console.log("block is not accessible");
}
try {
    // console.log(blockConst);
}
catch (error) {
    console.log("Nlock is not accessible");
}
