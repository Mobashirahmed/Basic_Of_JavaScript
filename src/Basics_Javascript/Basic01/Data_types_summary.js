// Primmitive

// 7 categories: String [call back value], Number, Boolean, null, undefined [variable declared but value ain't decided], BigInt

const score = 100 // [In Javascript , we don't need to define the data=type. And I've report weather Javascript is Static type or Dynamic type C.Lang.]
const:number score = 334 // typescript close brother of Java script

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
    name: "Mobashir",
    age: 20,
}

const myFunction = function (){
    console.log("OOOO Yeah!");
}
console.log( typeof myFunction);