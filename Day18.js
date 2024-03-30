//question 52
var smartphone = {
    name: "",
    model: "",
    year: "",
    specs: {
        screensize: "",
        resolution: "",
        storage: ""
    }
};
console.log(smartphone);
//question 53
var developerSkils = {
    languages: ["python", "java", "c++"],
    frameworks: ["angular", "vue.js", "react"],
    tools: ["VS code", "git", "postman"]
};
var languages = developerSkils.languages, frameworks = developerSkils.frameworks, tools = developerSkils.tools;
for (var i = 0; i < 3; i++) {
    console.log("This developer knows ".concat(languages[i], ", ").concat(frameworks[i], ", ").concat(tools[i]));
}
//question 54
function dynamicObjectKey(key, value) {
    var dynamicobject = {};
    dynamicobject[key] = value;
    return dynamicobject;
}
console.log(dynamicObjectKey("theme", "dark"));
