"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// question 22
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1[10]);
console.log(numbers1[2]);
// question 23
let x = 5;
let y = 10;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y == 10? I predict True.");
console.log(y == 10);
console.log("Is x != 3? I predict True.");
console.log(x != 3);
console.log("Is y != 5? I predict True.");
console.log(y != 5);
console.log("Is x > 3? I predict True.");
console.log(x > 3);
console.log("Is y <= 10? I predict True.");
console.log(y <= 10);
console.log("Is x < 2? I predict False.");
console.log(x < 2);
console.log("Is y > 20? I predict False.");
console.log(y > 20);
console.log("Is x == '5'? I predict False.");
console.log(x == 16);
console.log("Is y == '10'? I predict False.");
console.log(y == 18);
// question 24
console.log("Test for equality with strings: 'apple' == 'Apple'");
console.log("Apple" == "Apple");
console.log("Test for inequality with strin'apple' != 'orange'gs: ");
console.log("apple" != "apple");
console.log("Test using lower case function: 'HELLO'.toLowerCase() == 'hello'");
console.log("HELLO".toLowerCase() == "hello"); // True
console.log("Numerical test for equality: 5 == 5");
console.log(5 == 5); // True
console.log("Numerical test for inequality: 5 != 5");
console.log(5 != 5); // false
console.log("Numerical test for greater than: 10 > 5");
console.log(10 > 5); // True
console.log("Numerical test for less than: 5 < 10");
console.log(5 < 10); // True
console.log("Numerical test for greater than or equal to: 10 >= 10");
console.log(10 >= 10); // True
console.log("Numerical test for less than or equal to: 5 <= 10");
console.log(5 <= 10); // True
console.log("Test using 'and' operator: (5 > 3) && (10 < 20)");
console.log(5 > 3 && 10 < 20); // True
console.log("Test using 'or' operator: (5 < 3) || (10 < 20)");
console.log(5 < 3 || 10 < 20); // True
let fruits1 = ["apple", "banana", "orange"];
console.log("Test whether 'banana' is in the array: fruits.includes('banana')");
console.log(fruits1.includes("banana")); // True
console.log("Test whether 'grape' is not in the array: !fruits.includes('grape')");
console.log(!fruits1.includes("grape")); // True
