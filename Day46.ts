//question 136
for (let i = 1; i <= 5; i++) {
    console.log(`Value of i is: ${i}`); 
  }

//question 137
try {
    throw new Error("Something went wrong");
} catch (error) {
   // console.log("An error occurred: ", error.message);   
}

//question 138
console.log("Before breakpoint");
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.