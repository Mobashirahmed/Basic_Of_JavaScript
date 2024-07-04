// singleton

// Object literals
// Object.create
const mySym = Symbol("Rarity")
const JSuser = {
    name1: "Mobashir",
    fullName: "Mobashir Ahmed",
    name2:"Mohsin",
    [mySym]: "Rarity",
    age: 18,
    location: "Darbhanga",
    email: "Georgia@yahooo.com",
    isLoggedIn: false,
    lastLoginDay: ["Tuesday","Wednesday"]
}

console.log(typeof JSuser);

// yahan humare pass objects ke keys access karne ke diff. syntax hai. Pahla hai .key aur dusara hai ["key"]
// symbols ke liye [symbolcontainer] likh kar access karte hai

console.log(JSuser .email);
console.log(JSuser["email"]);
console.log(JSuser[mySym]);
console.log(JSuser["fullName"]);

JSuser.email = "LOpazrazor@8ichat.com"
// Object.freeze(JSuser)
// JSuser.email = "LOpazrazor@8ichat.com"

console.log(JSuser);


// Yaha pe Hitesh bhaiya ne kya samjhaya tha vah kuch behtar samajh nahi aaya tha!
JSuser.greeting = function(){
    console.log(("Hellow Everyone"));
}

console.log(JSuser.greeting);

JSuser.greetingTwo = function(){
    console.log(`Hello Everyone, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

