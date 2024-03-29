//question 13
let cars = [
    "Toyota Camry",
    "Honda Civic",
    "Ford Mustang",
    "Chevrolet Silverado",
    "Tesla Model",
];
cars.forEach((car) => {
    console.log("My favourite car is", car, "car");
});
//question 14
let GuestNames1 = ["hina", "ammara", "bushra"];
GuestNames1.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you on a dinner at saturday evening");
});
// question 15
let GuestNames2 = ["hina", "sadia", "ammara", "bushra"];
GuestNames2.forEach((Guestname) => {
    console.log(Guestname, " is invited to dinner");
});
let unableToAttend = "hina";
console.log(`but "${unableToAttend}" cant make it to dinner `);
let newguest1 = "hina";
GuestNames2[GuestNames2.indexOf(unableToAttend)] = newguest1;
GuestNames2.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you on a dinner at saturday evening");
});
export {};
