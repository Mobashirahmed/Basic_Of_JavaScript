//Scope{} it begins with let var const
// var c = 790
// yaha if ke baad jo scope hai vah Block Scope kahlati hai

if (true) {
    let a = 10
    const b = 56
    var c = 73
}


// console.log(a);
// console.log(b);
console.log(c);

// OR

if (true) {
    let a = 19
    const b = 86
    c = 81
}


// console.log(a);
// console.log(b);
console.log(c);

// OR

a = 35  // This vallue of 'a' is assigned in Global Scope 
if (true) {
    let a = 10
    const b = 56
    console.log(("INNER: ", a));
    // function addnum(){

    // }
}
console.log(a);
// console.log(b);
// console.log(c);

// ************** Next Tutorial ******************

// for (let i = 0; i <array.length;i++>){
//     const element = array[i];

// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const Programmer = "Mobashir"
    function two(){
        const website = "Youtube"
        console.log(Programmer); // yahan chhota bhai apne bade bhai se Ice-Creme le kar kha raha hai
    }
    // console.log(website); yaha erro hoga cuz: Block scope ke andar ki chiz ko bahar acces kar rahe ho

    two() // yahan hum function two ko execute kar rahe hain Execution line scope ke humesha bahar hi likhte hain lekin vah kisi bade Block Scope ke andar nested bhi ho sakta hai jaisa ki yahan hai
}

one() // yaha function one execute ho raha hai what is being signified by empty parenthese ()

if (true) {
    const username = "Mobashir"
    if (username === "Mobashir") {
        const website = " mobsite"
        console.log(username + website); // yeh line likhne ke baad output print ho raha hai
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++

// yeh Function hai.
console.log(addone(8))
// addone(73)
function addone(num){
    return num + 1
}

// addone(63)

// yeh Expression hai
const addTwo = function(num){
    return num + 2
}

addTwo(4)

// Above was a Directly declared Function and the one below it is a contained Function
//We cannot execute or call a contained Function before its Lines. But we can call a Non-contained Function anytime we want, the only thing where we must pay attention to is that call must be written outside its scope