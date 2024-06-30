//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate01 = new Date(2024,5,30)
let myCreatedDate02 = new Date(2025, 3, 4, 5, 3)
console.log((myCreatedDate01.toDateString()));
console.log((myCreatedDate02.toDateString()));

let DateFormats01 = new Date("2024-06-30") // YY/MM/DD
let DateFormats02 = new Date("06-30-2024") // MM/DD/YY in India
console.log(DateFormats01);
console.log(DateFormats02);

let myTimeStamp =Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate01.getTime());
console.log(Date.now()); // only one of 'em can run
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// hgthfgk
// 

newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})