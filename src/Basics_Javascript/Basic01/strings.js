const name = "Mobashir"
const repoCount = 128

// console.log(name + repoCount + "Value"); for concatenation of string characters but Hitesh bhaiya suggets that this Syntax is Outdated and he don't recommend it so 
console.log(`Hello my User Name is ${name} and my repo Count is ${repoCount}`); // the scratch on name is due to those limiting features of script language 
// above is an ex. of String Interpolation method/syntax of script ,In this method we use place holders ${} , we can easily use methods inside those curly braces.

const gameName = new String (`Moba-feit-lorian`)
// To easily read the doc. of methods in JS : First,inspect a Google Home page next is go on console tab then paste the above code and press enter.
//And then type container's name and press enter You'll see:
//  >String. On tapping on that arrow a list of arrays will expand where the lower most entry will be : >Prototype,On expanding that you see methods.

console.log(gameName [0]);      // Key value acess kar rahe hain
console.log(gameName.__proto__);

console.log(gameName.length );
console.log(gameName.toUpperCase());
// idexing is like 0,1,2,3,..
console.log(gameName.charAt(2)); // charAt will give the character of specified index no.
console.log(gameName.indexOf(`l`)); // indexOf will give index no. of specified character 

const newString = gameName.substring(0,4) // start no.0 is being included and end no.4 is being excluded in the count. On -ve values it'll ignore it and begin counting from 0.
console.log(newString);

const anotherString = gameName.slice(-4,7) // Bhai! dhayan rakho Parentheses 🤯 an extra closing parenthes has caused erros in code.
console.log(anotherString);

const newStringOne = "   Mobashir     "
console.log(newStringOne.trim()); // whitespace and line terminators

const url = "https://mobashir.com/mobashir&%#hmed"

console.log(url.replace(`&%#`, `a`)); //kya mai search karna chahta hun aur kya mai uss se replace karna chahta hun
console.log(url.includes(`Pichaimusk`)); // Here you asking whether the word `Pichaimusk` is present in the url or not. It'll give you bollean output. 
//
console.log(gameName.split(`-`)); 
// the above program removes hyphen present in the string as specified
// Moba-feit-lorian → [ 'Moba', 'feit', 'lorian' ]
