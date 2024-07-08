const Musketeere = "M0b@shir.AI"

if (Musketeere) {
    console.log(("Got Musketeere email'"));
} else {
    console.log("Don't have Musketeere email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {} , function(){}

if (Musketeere.length === 0) {
    console.log("Array is empty");    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 29 // yahan ?? operator ka kya kaam hai? Ans: null ho to to usse execute kardo OR undefined ho to usse execute kar do
// val1 = null ?? 56
// val1 = undefined ?? 46
val1 = null ?? 87 ?? 34

console.log(val1);

// **********Ternary Operator************

// condition ? true : false
 const iceTeaPrice = 300
 iceTeaPrice >= 78 ? console.log("less than 78") : console.log("more than 78");