// singleton

// Object literals
// Object.create
const mySym = Symbol("Rarity")
const JSuser = {
    name1: "Mobashir",
    full: "Mobashir Ahmed",
    name2:"Mohsin",
    [mySym]: "Rarity",
    age: 18,
    location: "Darbhanga",
    email: "Georgia@yahooo.com",
    isLoggedIn: false,
    lastLoginDaya: ["Tuesday","Wednesday"]
}

console.log(typeof JSuser);
console.log(JSuser .email);
console.log(JSuser["email"]);
console.log(JSuser[mySym]);
console.log(JSuser["full"]);

JSuser.email = "LOpazrazor@8ichat.com"
// Object.freeze(JSuser)
// JSuser.email = "LOpazrazor@8ichat.com"

console.log(JSuser);

JSuser.greeting = function(){
    console.log(("Hellow Everyone"));
}

console.log(JSuser.greeting);

JSuser.greetingTwo = function(){
    console.log(`Hello Everyone, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

