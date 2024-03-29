//question 37
function make_T_shirt1(size = "large", message = "i love typescript") {
    console.log(`the size of the shirt is ${size} and the message is ${message}`);
}
make_T_shirt1();
make_T_shirt1("medium");
make_T_shirt1("small", "i love baggy clothes");
//question 38
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Pakistan", "France");
describe_city("karachi");
//question 39
function city_country(city, country) {
    return `${city} , ${country}`;
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("morocco", "morocco"));
export {};
