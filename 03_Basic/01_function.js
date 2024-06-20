function myfunction () {   
    console.log("hello");
}

myfunction    //refernces of the fuction
myfunction(); // this is the execution of the function 

// "function" is a keyword 
// "myfunction" is a name of function with ()
// By using {} we action the fuction
// to call the function we call the name of the function with ().




function addTwoNumber (number1, number2){
    return  number1+ number2;
    console.log("Aakanksha");  
}

let sum = (addTwoNumber(3,4));

console.log("Result: ",sum);

function loginMessage(username = "user"){
    if (!username) {
        return
    };
    return `${username} Welcome to helping Desk`
}

 console.log(loginMessage("Aakanksha"));


// 

function calculateCartPrice(val1, val2, ...num1) { //this ... is a reset operator 

    return  num1;
}

console.log(calculateCartPrice(200, 300, 800, 500, 400, 100, 1000));


// Object in function
// 1 way

const user = {
    name : "aakanksha",
    price : 998
};

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user);


//  2 way

function userBill(billObject) {
    console.log (`User name is ${billObject.userinfo} and probuct price is ${billObject.prices}`)   
}

userBill({
    userinfo : "Mansi",
    prices : 499
})

// Array in Function
//  1 way

const listOfArray = [200, 300, 400, 500, 6000];

function returnArray(getArray) {
    return getArray;
}

console.log(returnArray(listOfArray));

// 2 way

function listOfPrice(getCalculated) {
    return getCalculated
}

console.log(listOfPrice([100, 200, 300, 400]));