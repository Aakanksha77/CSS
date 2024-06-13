const score = 299
const scoreValue = 100.4


const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("1234")
const anotherId = Symbol("1234")

console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail, id ,anotherId])

console.log(typeof id)
console.log(typeof anotherId)

console.log(id == anotherId)
console.log(id === anotherId)

// Non-Primitive

const fruits = ["apple", "banana", "grapes", "lichi"];
console.log(fruits);

let myObj = {
    name : "Aakanksha",
    age: 22,
}

console.log(myObj)

// Function
function myFunction() {
    console.log("Hello World");
 };

 myFunction(); // to call the fuction for Output which will be "Hello World"

//  Stack and Heap Memory allocation

let myName = "Aakanksha"
let schoolName = myName
schoolName = "Rajbhar Aakanksha"

console.log(myName);
console.log(schoolName);


let studentInfo = {
    name: "Aakanksha",
    class: 12,
    subject: "Maths",
    score: 70
}

let studentInfoUpdate = studentInfo;
studentInfoUpdate.name = "Aakanksha Rajbhar"

console.log(studentInfo);
console.log(studentInfoUpdate)


