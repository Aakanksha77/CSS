//  Let's create a function

function database() {
    console.log(`This is database`);
}

database();

(function database1() {          //this is named iife
    console.log(`This is database`);
} )();


((user) => {
    console.log(`heello Aakanksha . I am ${user}`)
}) ("Rashami");

