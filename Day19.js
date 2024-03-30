//question 55
var single = [5, 7, 8, 9, 36, 2];
var doubleOfSingleArray = single.map(function (singl) { return 2 * singl; });
console.log(single);
console.log(doubleOfSingleArray);
//question 56
var mixedArray = ["hello", "world", 89, false, 896];
var filteredArray = mixedArray.filter(function (mix) { return typeof mix === "string"; });
console.log(mixedArray);
console.log(filteredArray);
//question 57
var grades = [85, 12, 69, 584, 852];
var sumOfgrades = 0;
var averageGrades = grades.forEach(function (grade) {
    sumOfgrades += grade;
});
console.log(sumOfgrades / grades.length);
