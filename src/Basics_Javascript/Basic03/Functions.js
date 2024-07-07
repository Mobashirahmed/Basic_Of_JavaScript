// Consider the syntax of Function i.e; keyword_fun container_name () 

function sayMyName(){ 
console.log("M");
console.log("O");
console.log("B");
console.log("A");
console.log("S");
console.log("H");
console.log("I");
console.log("R");
}
//refrence
sayMyName()  // yahan pe hum function ko call kar rahe hai. So what write inside of () is k.a. argument
// container_name() : refrence+execution 


//Method one
function sumofTwoNums (num1, num2){
    console.log(num1 + num2); // yahan console.log kiya sum ko print karne ke liye
}

sumofTwoNums(3, 8)
sumofTwoNums(6, "g")
sumofTwoNums(9, null)
 
//Method Two
function addTwoNumbers (num1, num2){
    console.log(num1 + num2);
}
const result1 = addTwoNumbers(7, 2)
console.log("Result:" , result1);

//Method Three
function addTwoNumbers (num1, num2){
    let result2 = num1 + num2
    return result2
}
const result2 = addTwoNumbers(5, 7)
console.log("Result:" , result2);

//Method Four
function addTwoNumbers (num1, num2){
    // let result2 = num1 + num2
    return num1 + num2
}
const result3 = addTwoNumbers(8, 7)
console.log("Result:" , result3);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Mobashir"))
// console.log(loginUserMessage())

function loginUserMessage_01(username){
    if (username === undefined){
        console.log("Plese entre a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage_01("Mobashir"))
console.log(loginUserMessage_01())

function logoutUserMessage(username){
    if (!username){
        console.log("You're logged out");
        return
    }
    return `${username} just logged out`
}

console.log(logoutUserMessage())
// console.log(logoutUserMessage("Afsana"))


// +++++++++++++++++++++++ Next Tutorial +++++++++++++++++++++++++++++++++
function calculateCartPrice_01(num1){
    return num1
}

console.log(calculateCartPrice_01(200, 568, 237))

function calculateCartPrice_02(...num1){
    return num1
}

console.log(calculateCartPrice_02(578, 450, 300))

function calculateCartPrice_03(vall1, vall2, ...num1){
    return num1
}

console.log(calculateCartPrice_03(456, 789, 500))

// ... is aka spread operator or sometimes ka rest operator

const Grocery_Store ={
    Seller: "Mobashir",
    Price: 799
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.Seller} and price is ${anyobject.price}`);
}
// handleObject(Grocery_Store)
handleObject({
    Seller: "Ramanujan",
    price: 786
})

const myNewArray = [200, 870, 900, 300]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 870, 900, 300]));


// console.log("Afsana  are well know Hoipocrat I believe. She is on my nerves right now. She could not got a chance to have my seamen thats why she looks agitated ,I guess I must have to collect a cup for her. It feel she's licking my balls. Thank you for affirming! Next I was characterising your prefrences. I'm agited of the fact that I didn't get to taste it that's why I'm feeling agoniged. Please God provide me those holy drops, they were few I know but cannot live without them Its Indeed for my life!");