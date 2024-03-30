//question 58
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var totalScores = (scores.reduce(function (total, grade) { return total + grade; }, 0));
    console.log(totalScores / scores.length);
}
averageScore(58, 96, 85, 47, 56, 32, 45);
averageScore(2, 4);
averageScore(8, 5, 1);
//question 59
function addten(number1) {
    return function (number2) {
        return number2 + number1;
    };
}
var addfive = addten(10);
console.log(addfive(5));
//question 60
var userProfile = (function () {
    var name = "sofia";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, " \n Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
