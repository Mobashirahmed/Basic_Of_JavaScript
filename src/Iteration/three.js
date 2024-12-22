// for of

// ["", "", ""]
// [{}, {}, {}]

const object_arr = [ 1, 2, 3, 4, 5]

for (const iterator of object_arr){
    console.log(iterator);
}

const greetings = "Hey Baby!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Maps are known for unique elements and it remembers the order

console.log(map);

// Applying loops on Maps
for (const key of map) {
    console.log(key);
}
// de-structuring array
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// Iterating Objects in JS

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'BGMI',
//     'game3' : 'PubG',
//     'game4' : 'SpiderMan',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'BGMI',
//     game3 : 'PubG',
//     game4 : 'SpiderMan',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// You can not Iterate Objects in JS, But maps are iteratable