
const user = {
    username : "Aashi",
    price : 399,

    welcomeMsg : function (params) {
        console.log(`${this.username} welcome to the website`);
    }
}

console.log(user);
user.welcomeMsg(); // when the function is inside the object this how it is called.

