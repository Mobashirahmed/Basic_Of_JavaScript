const score = 343
console.log(score);

const balance = new Number (343)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision value

const anaothernumber = 3246.53
console.log(anaothernumber.toPrecision(4)); // 0-21 & do some approximations 

const hundreds = 33324
console.log(hundreds.toLocaleString(`en-IN`));

// *************************MATHS**************************//

console.log(Math);  // simply object ki tarah output aati hai
console.log(Math.abs(-65)); // abs: absolute value  
console.log(Math.round(6.626));
console.log(Math.ceil(8.98755));
console.log(Math.floor(1.414));
console.log(Math.max(4, 5, 3, 4, 7, 9));
console.log(Math.min(4, 6, 2, 7));
// put values in them

console.log(Math.floor(Math.random())); // this will random values from 0 to 1 and floor will behave as GIFunction.
console.log(Math.random());

console.log((Math.random()*43) + 1);
console.log(Math.floor(Math.random()*43) + 1);


const min = 10
const max = 45

console.log(Math.floor(Math.random() * (max - min + 1) + min ));