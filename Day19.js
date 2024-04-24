//question 55
let single = [5, 7, 8, 9, 36, 2];
let doubleOfSingleArray = single.map(singl => 2 * singl);
console.log(single);
console.log(doubleOfSingleArray);
//question 56
let mixedArray = ["hello", "world", 89, false, 896];
let filteredArray = mixedArray.filter(mix => typeof mix === "string");
console.log(mixedArray);
console.log(filteredArray);
//question 57
let grades = [85, 12, 69, 584, 852];
let sumOfgrades = 0;
let averageGrades = grades.forEach(grade => {
    sumOfgrades += grade;
});
console.log(sumOfgrades / grades.length);
export {};
