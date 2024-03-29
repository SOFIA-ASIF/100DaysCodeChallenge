

// question 16
let GuestNames3: string[] = ["hina", "sadia", "ammara", "bushra"];
GuestNames3.forEach((Guestname) => {
  console.log("Hey!", Guestname, "Guess what?? I found a big dinner table");
});
let newguest = "umer";
GuestNames3.unshift(newguest);
let indexToAdd = Math.floor(GuestNames3.length / 2);
GuestNames3.splice(indexToAdd, 0, "sofia");
newguest = "sadia";
GuestNames3.push(newguest);
GuestNames3.forEach((Guestname) => {
  console.log("Hey!", Guestname, "I would like to invite you to a dinner");
});
//question 17
console.log("i am sorry but i can invite only two people at a time");
while (GuestNames3.length > 2) {
  let removedGuest = GuestNames3.pop();
  console.log(`sorry ${removedGuest} i can't invite you to dinner today`);
}
console.log("hey!", GuestNames3[0], " you are still invited to dinner");
console.log("hey!", GuestNames3[1], " you are still invited to dinner");
GuestNames3.splice(0, GuestNames3.length);
console.log("Guest list is empty", GuestNames3);

//  question 18
let favouritePlaces: string[] = [
  "paris",
  "africa",
  "japan",
  "korea",
  "saudia arabia",
];
console.log("array is", favouritePlaces);
console.log("sorted array", favouritePlaces.slice().sort());
console.log("original array is", favouritePlaces);
console.log("reverse array", favouritePlaces.slice().sort().reverse());
console.log("original array is", favouritePlaces);
console.log("reversed order array", favouritePlaces.reverse());
console.log("again reverse the reversed order array", favouritePlaces.reverse());
console.log("alphabetically order yhr again reverse the reversed order array",favouritePlaces.sort());
console.log("again reverse the reversed order array", favouritePlaces.reverse());