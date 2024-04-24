//question 121
for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue;
    console.log(i);
}
//question 122
let i = 10;
while (i >= 1) {
    if (i == 5)
        break;
    console.log(i);
    i--;
}
//quuestion 123
function words(str) {
    const vowels = "aeiouAEIOU";
    for (let st of str) {
        if (vowels.includes(st)) {
            console.log(`First vowel in the given string is ${st}`);
            break;
        }
    }
}
words("sofia");
export {};
