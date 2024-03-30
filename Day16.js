//question 46
let laptop = {
    make: "samsung",
    model: "qwe 13",
    year: 2022,
    describe: function () {
        console.log(`the laptop is ${this.make}, ${this.model},${this.year}`);
    }
};
laptop.describe();
//question 47
let laptoop = [{
        make: "dell",
        model: "",
        year: 2024
    }, {
        make: "",
        model: "",
        year: 2023,
    }];
let [laptop1, laptop2] = laptoop;
console.log(laptop1);
console.log(laptop2);
//question 48
let prices1 = [500, 200, 456, 874, 569, 201, 56];
let prices2 = [458, 963, 258, 741, 123, 200, 40];
let combinedPrices = [...prices1, ...prices2].sort();
console.log(combinedPrices);
export {};
