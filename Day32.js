//question 94
//Map() function takes each element in an array and perform some actions and store it again in the array
var arr = ["Sofia", "Asif", "Jaziba", "Qurat-ul-ain", "Nayab", "Arifa", "Abdullah"];
console.log(arr);
var changArr = arr.map(function (ar) { return ar.length; });
console.log(changArr);
//question 95
// filter() funciton filters array however we want
function filterArr(arr1) {
    return arr1.filter(function (a) { return a > 10; });
}
var arr1 = [5, 78, 52, 6, 3, 9, 1, 5, 7, 25, 85, 65, 45];
console.log(filterArr(arr1));
//question 96
//reduce function give the some of all elements in an array
var reducedElement = arr1.reduce(function (total, a) { return total + a; }, 0);
console.log(reducedElement);
