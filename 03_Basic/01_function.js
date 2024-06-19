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
}

let sum = (addTwoNumber(3,4));

console.log("Result: ",sum);