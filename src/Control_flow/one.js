// if statement

if (false) {
    
}
if (true) {
    
}

const isUserLoggedIn = true
if (isUserLoggedIn) {
    
}
2<=2
// < , > , <=, >=, ==, !=, ===, !==

if (2 == "2") {
    
    console.log("execute");
}
const temperature = 52
if (temperature === 41) {
    console.log(("temperature is less than 60"));
} else {
    console.log("temperature is greater than 60");
}

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);    
}

console.log(`User power: ${power}`);

if (score > 100) {
    var power = "fly" // var is not ussually used. Basically it is not prefferebly used
    console.log(`User power: ${power}`);    
}

console.log(`User power: ${power}`);

const balance = 1006

// if (balance > 577) console.log("test1"), console.log("test2"); {
    
// } Aisa nahi karna hai!

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 764) {
    console.log("less than 764 ");
} else if (balance < 1200) {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = false

if (userLoggedIn && debitcard && 2==3) {
    console.log( "Allow to Buy Courses");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
}