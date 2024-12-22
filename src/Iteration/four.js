const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple",
    py : "Python"
}
// printing keys
for (const key in myObject) {
    console.log(key);
}
// printing keys with object 
for (const key in myObject) {
    console.log(myObject[key]);
}
// printing keys with objects using syntax of concatenation
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "swift", "py"]

for (const key in programming) {
    console.log(key);    
}

for (const key in programming) {
    console.log([key]);    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);   // No output Kuchh hua hi nahi   
// }