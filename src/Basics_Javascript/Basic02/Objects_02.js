// Singleton objects
// const pwinderUser = new Object()

// console.log(pwinderUser);
const pwinderUser = {}

pwinderUser.Id = "87dthg"
pwinderUser.name ="Ritesh"
pwinderUser.isLoggedIn = true

console.log(pwinderUser);

const regularUser = {
    email: "mohitlal.com",
    userfullname: {
        firstname: "Mobashir",
        lastname:"Ahmed",
    }
}
// yahan nesting ka kamal dekha. Hum yahan comma ka use karte hain scope ke inside objects ko separate karne ke liye.

console.log(regularUser.userfullname.firstname);

const maze1 = { 1: "d", 2: "g"} 
const maze2 = { 7: "f", 4: "h"}
const maze5 = { 5: "s", 5: "u"}


const maze4 = Object.assign({}, maze1, maze2, maze5)
console.log(maze4);

const maze3 = { maze1, maze2}
console.log(maze3);

const maze6 =  {...maze1, ...maze2}
console.log(maze6);

const users =[
    {
        id1 : "67WebG",
        email : "Robotics@4545fc.com"
    },
    {
        id2 : "89hFsc" ,
        email : "machine@mobashir.com" 
    },
    {
        id3 : "6yDhv",
        email : "Release"
    }
]
users[1].email

// methods in pwinderUser
console.log(Object.keys(pwinderUser));
console.log(typeof Object.keys(pwinderUser));

console.log(Object.values(pwinderUser));
console.log(Object.entries(pwinderUser));

console.log(pwinderUser.hasOwnProperty('isLoggedIn')); // .hasOwnProperty gives a boolean output similar to .includes

const course = {
    DarudSharif: "درود شریف ",
    coursename: "Maths with Mobashir" ,
    price: "$200",
    courseInstructor: "Mobashir",
}

// course.courseInstructor
console.log(course);

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "Montelucast")
// Above is an example of Destructring using REACT

//API apna kam kisi aur ke sar pe dalna
// {
//     "name": "mobashir",
//     "coursename": "JS in codespace",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
