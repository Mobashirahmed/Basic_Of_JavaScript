//Array

const myArr1 = [7, 4, 6, 0, 5, 8,]
console.log(myArr1[4]); // we cannot write arrays like "string"
myArr1.push(9)
console.log(myArr1.includes(9)); // .includes is a boolean method in JS that returns a T/F output
console.log(myArr1.indexOf(3)); // value jo exist karti hai agar () ke andar entre karoge toh .indexOf returns its index no. That is similar to container[] writtten inside console.log()

const myHeros = ["Shaktiman", "IronMan", "SpiderMan", "CaptainAmerica"]
console.log(myHeros);

const myArr2 = new Array(0, 1, 2, 3, 4) // yeh ek dusara tarika hai array assign karne ke liye
console.log(myArr2[1]);
console.log(myArr2);

//Array methods
const arr01 = [2, 3, 4, 7, 4]
arr01.push(6) // this will add 6 as extreme entry
arr01.push(7)
arr01.pop() // this will remove the very last entry
console.log(arr01);
const arr02 = [8, 3, 5, 786, 64]
arr02.unshift(9) // this will add 9 as the very first entry
arr02.unshift(7)
arr02.shift() // this will remove the very first entry
console.log(arr02);

const myArr3 = myArr1.join() // .join kya kar raha hai😥 Ans: It converts the data type of array from Object to String. In the output those square brackets were removed along with those spaces and the data in the array comes out as string.

console.log(myArr1);
console.log(myArr3);
console.log(typeof myArr1);
console.log(typeof myArr3);

//slice, splice

const mobashirarray = [5, 7, 4, 5 , 7, 0, 3]

console.log("A",mobashirarray );

const myn1 = mobashirarray.slice(1, 3) // returs a copy of section of an array, includes left index & excludes right index

console.log(myn1);
console.log("B", mobashirarray);

const myn2 = mobashirarray.splice(1, 3)
console.log("C", mobashirarray);
console.log(myn2);
console.log(myn1);

// PLAYING WITH ARRAYS
const commitment = new Array("Afsanana is a hipocrat", 786, 3.1415926535897932384626)
commitment.push("mobashir Afsana larva rakh diya aur ussi se chikh padi aur got wet" )
// commitment.pop("Afsanana is a hipocrat") // yahan pe tumne pop ke syntax me galti kar di!😙 One should not write anything inside the method-theses 
// commitment.push("she's a bitch")
commitment.pop()
commitment.shift()
console.log(commitment);