//question 112
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
countries.set("China", "Beijing");
console.log(countries);
//question 113
function checkingOfCountry(countries) {
    if (countries.has("Canada"))
        console.log(`The capital of canada is ${countries.get("Canada")}`);
    else
        console.log(`Map doesn't have Canada`);
}
checkingOfCountry(countries);
//question 114
countries.forEach((capital, country) => {
    console.log(`The capital of ${country} is ${capital}`);
});
//OR
for (let capital of countries)
    console.log(`The capitals are ${capital}`);
export {};
