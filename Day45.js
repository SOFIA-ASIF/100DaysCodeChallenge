//question 133
var student = {
    name: "Sofia Asif",
    age: 19,
    class: "13th"
};
// JSON.stringify converts object to JSON string
var jsonstring = JSON.stringify(student);
console.log(jsonstring);
//question 134
// JSON.parse converts JSON string to object
console.log(JSON.parse(jsonstring));
//question 135
var jsonstringg = JSON.stringify(student, ['name', 'age'], 2);
console.log(jsonstringg);
