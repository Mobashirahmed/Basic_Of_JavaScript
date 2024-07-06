//Scope{} it begins with let var const
// var c = 790

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
// if (true) {
//     let a = 10
//     const b = 56
//     console.log(("INNER: ", a));
//     // function addnum(){

//     // }
// }

// for (let i = 0; i <Array.length;i++) {
//     const element = array[i];

// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const Programmer =  "Mobashir"
    function twi(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); yaha erro hoga

    two()
}

one()

if (true) {
    const username = "Mobashir"
    if (username === "Mobashir") {
        const website = " mobsite"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

addTwo(5)