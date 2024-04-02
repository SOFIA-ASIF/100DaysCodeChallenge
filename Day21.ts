//question 61
enum vehicles {
  cars,
  tractor,
  buses,
  motorcycle,
}
console.log(vehicles.cars);
console.log(vehicles.tractor);
console.log(vehicles.buses);
console.log(vehicles.motorcycle);
//question 62
//use of interfaces
interface Students {
  name: string;
  age: number;
  class: number;
  courses: string[];
}
let student: Students = {
  name: "sofia",
  age: 19,
  class: 13,
  courses: ["maths", "english", "urdu"],
};
console.log(student);
//question 63
//use of type Alias
type shape = {
  kind: "rectangle" | "square";
  width?: number;
  height?: number;
};
let square: shape = {
  kind: "square",
  height: 5,
};
let rectangle: shape = {
  kind: "rectangle",
  height: 10,
  width: 8,
};
console.log(square);
console.log(rectangle);