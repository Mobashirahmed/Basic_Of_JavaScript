let score = "62"
//const{score}=req.body
// quote represents string data type
//Data type: Number e.g. 1,2,3,4, etc; String e.g. a,b,crdfg, nbyg, etc and what about charaters like these $,%,@,*#, etc
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 => 33 but the type of the container score becomes string
// "33" => 33
//"33aa" => Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true, 0=> false
// "" => false
// "Mobashir" => true

//let somenumber = 56

//let stringnumber = String (somenumber)
//console.log(stringnumber);
//console.log(typeof stringnumber);