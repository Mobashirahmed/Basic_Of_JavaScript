const name = " Mobashir"
const repoCount = 128

// console.log(name + repoCount + "Value");
console.log(`Hello my User Name is ${name} and my repo Count is ${repoCount}`); // the scratch on name is due to those limiting features of script language 
// above is an ex. of String Interpolation method/syntax of script

const gameName = new String (`Moba-feit-lorian`)

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length );
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`o`));

const newString = gameName.substring(0,4) // start ni\o. and end no. last count isn't included. count from 0. On -ve values it'll ignore it and begin counting from 0.
console.log()

const anotherString = gameName.slice(-4,7));

const newStringOne = "   Mobashir     "
console.log(newStringOne.trim()); // whitespace and line terminators

const url = "https://mobashir.com/mobashir&%#hmed"

console.log(url.replace(`&%#`, `a`)); //kya mai search karna chahta hun aur kya mai uss se replace karna chahta hun
console.log(url.includes(`Pichaimusk`));
//
console.log(gameName.split(`-`));
