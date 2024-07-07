//ab hum padhenge arrow funs. ES6 JS ke andar bhaut sare features leke aaye. We'll talk about 'this' key-word
const User = {
    username: "Mobashir",
    price: 999.00,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // .this ka matalab hai current context jo iss curly braces ke undar hai
        console.log(this);
    }

}

User.welcomeMessage()
User.username = "Sam" // Here,We'd changed the context/value of username. Now this User will be welcomed
User.welcomeMessage() // & this line will Execute the changed context result

console.log(this); // this will return an empty object

function afsana(){
    // console.log(this); // Here We're printing this inside a node Environment
    let Loves = "Mobashir"
    console.log(this.username);
    // console.log(this);
}

afsana()

// const coffee =() => { 
//     let username = "Afsana"
//     console.log(this);
// }

// coffee()
// arrow function ke app yeh this use nahi kar sakte aur regular funstions me aap use kar sakte hain , Generally diff. karne waqt yahi reply aata hai


//Arrow Functions ke bare me aur Discussion

const addTwo = (num1, num2) => {
    return num1 + num2 // yeh explicit return hai
}
console.log(addTwo(3, 4)); // Here Arrow Function ko call karne bhar se print nahi ,One have to use console.log to print this.

const sumTwo = (num1, num2) => num1 + num2 // yeh implicit return hai yaha humne parentheses ka upyog nahi kiya
console.log(sumTwo(7, 6));

const sumofTwo = (num1, num2) => ( num1 + num2 )
console.log(sumofTwo(5, 3));

const addingTwonumbers = (num1, num2) => ({username: "afsana"}) // benefit of parentheses
console.log(addingTwonumbers(3, 4));

// const myArray = [2, 3, 6, 7 ,3 ,8 ,9]

// myArray.forEach()