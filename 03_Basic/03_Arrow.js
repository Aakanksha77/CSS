
const user = {
    username : "Aakanksha",
    price : 399,

    welcomeMsg : function (params) {
        console.log(`${this.username} welcome to the website`);
    }
}

// user.welcomeMsg(); // when the function is inside the object this how it is called.
// user.username = "Rashami"
// user.welcomeMsg();

function info(){
    let username = "Aakanksha"
    console.log(this.username)
}

// info();


const infoIntern =  () => {
    let username = "Rashmi"
    console.log(this.username)
}

// infoIntern()


// ++++++++++++++++ Arrow Function ++++++++++++++++++++

// () => {}     this is representation of Arrow function

// One way 
const arrowOne = (num1 , num2) => {
    return num1+ num2
}

console.log(arrowOne(2,3))

// Other way
const addTwo = (num1 , num2) => num1 + num2
console.log(addTwo(5,6))

// 3rd way
const addTwo1 = (num1, num2) =>(num1+num2)
console.log(addTwo1(1,3));

const info1 = () => ({username : "Aakanksha"})
console.log(info1());