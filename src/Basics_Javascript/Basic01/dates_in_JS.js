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

let newDate = new Date() // new Date is an Object
console.log(newDate); // Aaj ki tareekh print aa raha hai
console.log(newDate.getMonth() + 1); // . dalte hi methods option menu open ho jayega, yahan pe humne +1 kiya hai chunki we add the exact month no. [e.g/ Jan→0, July→6]
console.log(newDate.getDay()); // getMonth:month no. getDay => 1 , getFullYear => 2024

//`${newDate.getDay()} and the time`
// toLocaleString me aap ek object define karte hain
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})