

// //question 43
// function show_magicians1(magicians1: string[]): void {
//     magicians1.forEach((magician1) => {
//       console.log(magician1);
//     });
//   }
//   function make_great(magicians1: string[]): string[] {
//     return magicians1.map((magician1) => `the great ${magician1}`);
//   }
//   let magicians1: string[] = [
//     "David Copperfield",
//     "Harry Houdini",
//     "Penn Jillette",
//     "Teller",
//   ];
//   let greatmagicians: string[] = make_great([
//     "David Copperfield",
//     "Harry Houdini",
//     "Penn Jillette",
//     "Teller",
//   ]);
//   console.log("original magicians");
//   show_magicians1(magicians1);
//   console.log("\nGreat magicians");
//   show_magicians1(greatmagicians);
  
//   //question 44
//   function makesandwich(...items: string[]): void {
//     console.log("your sandwich includes");
//     if (items.length === 0) {
//       console.log("oops :( your sandwich is empty");
//     } else {
//       items.forEach((item) => {
//         console.log(item);
//       });
//     }
//     console.log();
//   }
//   makesandwich("potato", "tomato", "carrot", "cucumber");
//   makesandwich("lettucs", "cucumber");
//   makesandwich();
  
//   //question 45
//   function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//       let car = { manufacturer, model };
//       options.forEach(([key, value]) => car[key] = value);
//       return car;
//   }
  
//   console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));