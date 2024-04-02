//question 61
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["tractor"] = 1] = "tractor";
    vehicles[vehicles["buses"] = 2] = "buses";
    vehicles[vehicles["motorcycle"] = 3] = "motorcycle";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars);
console.log(vehicles.tractor);
console.log(vehicles.buses);
console.log(vehicles.motorcycle);
var student = {
    name: "sofia",
    age: 19,
    class: 13,
    courses: ["maths", "english", "urdu"]
};
console.log(student);
var square = {
    kind: "square",
    height: 5
};
var rectangle = {
    kind: "rectangle",
    height: 10,
    width: 8
};
console.log(square);
console.log(rectangle);
