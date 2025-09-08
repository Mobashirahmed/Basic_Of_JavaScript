// Primmitive

// 7 categories: String [call back value], Number, Boolean, null, undefined [variable declared but value ain't decided], BigInt

const score = 100 // [In Javascript , we don't need to define the data=type. And I've report weather Javascript is Static type or Dynamic type C.Lang.]
// const Score:Number = 334 // typescript close brother of Java script

const isLoggedIn = false
const outsideTemp = null
let userEmail;

 const id = Symbol('123');
 const anotherid = Symbol('123');
 console.log(id === anotherid );

//  const bigNumber = 67645844578774233543254764n

// Reference (Non Primitive) *****************


// Array, Objects, Functions

const heros = ["shaktiman", "Krish", "Doga"]
{
    name: "Mobashir";
    age: 20
}

const myFunction = function (){
    console.log("OOOO Yeah!");
}
console.log( typeof myFunction);

// ******************************++++++++++*****************************//
//                                 Memory
// Stack and Heap {Non Primitive}

let myYoutubeName = "Mobashir's Youtube Channel"

let anothername = "RareSigt"

console.log(anothername);
let userOne ={
    email: "user@google.com"
    upi : "user@ybl",
}
let userTwo = userOne

userTwo.email = "Mobashir@google.com"
console.log(userOne.email);
console.log(userTwo.email);
