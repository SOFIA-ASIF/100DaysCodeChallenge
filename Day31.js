//question 91
var favouriteFruit = ["Apple", "Orange", "Banana"];
console.log(favouriteFruit);
favouriteFruit.push("Kiwi");
console.log(favouriteFruit);
//question 92
function removeElement(favouriteFruit) {
    return favouriteFruit.pop();
}
console.log(removeElement(favouriteFruit));
//question 93
var index = favouriteFruit.indexOf("Banana");
console.log(index);
favouriteFruit[index] = "Mango";
console.log(favouriteFruit);
