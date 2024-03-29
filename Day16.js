//question 45
let laptop = {
    make: "samsung",
    model: "qwe 13",
    year: 2022,
    describe: function () {
        console.log(`the laptop is ${this.make}, ${this.model},${this.year}`);
    }
};
laptop.describe();
export {};
