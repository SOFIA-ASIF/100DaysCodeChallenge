//question 52
let smartphone = {
    name: "",
    model: "",
    year: "",
    specs: {
        screensize: "",
        resolution: "",
        storage: ""
    }
}
console.log(smartphone);


//question 53
let developerSkils = {
    languages: ["python", "java", "c++"],
    frameworks: ["angular", "vue.js", "react"],
    tools: ["VS code", "git", "postman"]
}
let {languages,frameworks,tools} = developerSkils
for (let i = 0; i < 3; i++) {
    
    console.log(`This developer knows ${languages[i]}, ${frameworks[i]}, ${tools[i]}`);

}


//question 54
function dynamicObjectKey(key: string, value:string){
    let dynamicobject :{[key:string]:string} ={}
    dynamicobject [key] = value
    return dynamicobject
}
console.log(dynamicObjectKey("theme","dark"));

