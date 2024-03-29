

//question 32
let current_array: string[] = ["saad", "abdullah", "ali", "bushra", "hassan"];
let new_users: string[] = ["saad", "abdullah", "sadia", "ammara", "sofia"];
current_array = current_array.map((array) => array.toLowerCase());
new_users.forEach((user) => {
  let new_userLowerCase = user.toLowerCase();
  if (current_array.includes(user)) {
    console.log(`${new_userLowerCase} username is already in used`);
  } else {
    console.log(`${new_userLowerCase} user name is available`);
  }
});

//question 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
  let ordinalending: string;
  if (number === 1) {
    ordinalending = "st";
  } else if (number === 2) {
    ordinalending = "nd";
  } else if (number === 3) {
    ordinalending = "rd";
  } else {
    ordinalending = "th";
  }
  console.log(`${number}${ordinalending}`);
});
