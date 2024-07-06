//ab hum padhenge arrow funs. ES6 JS ke andar bhaut sare features leke aaye. We'll talk about 'this' key-word
const User = {
    username: "Mobashir",
    price: 999.00,

    welcomeMesssage: function() {
        console.log(`${this.username} , welcome to website`); // .this ka matalab hai current context jo iss curly braces ke undar hai
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// usee.welcomeMessage()

console.log(this);

// function afsana(){
//     let Loves = "Mobashir"
//     console.log(this.username);
// }

// chai()

const coffee =() => { 
    let username = "Afsana"
    console.log(this);
}

coffee()
// arrow function ke app yeh this use nahi kar sakte aur regular funstions me aap use kar sakte hain , Generally diff. karne waqt yahi reply aata hai


//Arrow Functions ke bare me aur Discussion

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4));
// const addTwo = (num1, num2) => ({username: "afsana"})
// console.log(addTwo(3, 4));

const myArray = [2, 3, 6, 7 ,3 ,8 ,9]

myArray.forEach(() => ())