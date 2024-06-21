function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // Accessible
}

myFunction();
console.log(localVar); // Error: localVar is not defined

