//If

if (true) {
    
};

const temp = 45;

if (temp < 50) {
    console.log("the temperature is less then 50")
} else {
    console.log("Then Temperture is greater then 50")
}

//  Nesting when we have to check multipl condition

const bankbalance = 1000;

if (bankbalance < 500) {
    console.log("Balance is greater then 500");
}else if (bankbalance < 700){
    console.log("Balance is greater then 700");
}else if (bankbalance < 900){
    console.log("Balance greater then 900")
}else{
    console.log("Balance is less then 1200")
}


// Let see some real life example

const userLoggedIn = true;
const debitCard = false;

if (userLoggedIn && debitCard) {
    console.log("You are allow to logIn");
}else{
    console.log("Not allowed")
};

const loggedByGoogle = true;
const loggedByEmail = false;

if (loggedByGoogle || loggedByEmail) {
    console.log("Logged In");
}else{
    console.log("Pls Retry again");
};

