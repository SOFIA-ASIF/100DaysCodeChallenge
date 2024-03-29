//question 34
let favourite_pizza = ["pepperoni", "pineapple", "tikka"];
for (let i = 0; i < favourite_pizza.length; i++) {
    let element = favourite_pizza[i];
    console.log(`i like ${favourite_pizza} pizza`);
}
console.log("Pizza, a beloved culinary creation, is a versatile dish enjoyed worldwide. With its combination of dough, sauce, cheese, and toppings, pizza offers a delightful fusion of flavors and textures that satisfies cravings and brings people together. i really love pizza");
//question 35
let favourite_animal = ["cat", "dog", "rabbit"];
for (let j = 0; j < favourite_animal.length; j++) {
    console.log(favourite_animal[j]);
}
for (let i = 0; i < favourite_animal.length; i++) {
    if (favourite_animal[i] === "cat")
        console.log("cats are stubborn");
    else if (favourite_animal[i] === "dog")
        console.log("i love dogs");
    else
        console.log("rabbits eat carrots");
}
console.log("any of these animal make a great pet");
//question 36
function make_T_shirt(size, message) {
    console.log(`the size of the shirt is ${size} and the message is ${message}`);
}
make_T_shirt("large", " i love black color t shirts");
export {};
