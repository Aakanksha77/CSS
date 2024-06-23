
// This if is Block scope 
 if (true){
    let a = 100    // ReferenceError: a is not defined
    const b = 200  // ReferenceError: b is not defined
    var c = 30     // 30
 }

// console.log(a);
// console.log(b);
console.log(c);


// Global scope v/s Block Scope 

let a = 200;

if (true) {
    let a = 10
    let b = 200

    console.log(`Inner a value : ${a}`)
}

console.log(a);

// Nested Scope 

function one () {
    const username = "Aakanksha"

    function two() {
        const websit = "Google"
        console.log(username);
    }
     console.log(websit);

    two()
}

one ()


if (true) {
    const username = "Aakanksha"
    if (username == "Aakanksha") {
        const websit = " youtube"
        console.log(username + websit)
    }
     console.log(websit);   // ReferenceError: websit is not defined
}

 console.log(username);     // ReferenceError: username is not defined

 // +++++++++++++++++ interesting +++++++++++++++++++++++

 console.log(addOne(3));
 function addOne(num) {
    return num + 1
 }

 console.log( addTwo(4));  //ReferenceError: Cannot access 'addTwo' before initialization
 const addTwo = function (num) {
    return num + 2
 }

