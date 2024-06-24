
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

info();
