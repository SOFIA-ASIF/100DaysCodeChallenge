//question 97
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
//question 98
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
//question 99
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(3, 18); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
export {};
// Shows the date of the next birthday.
