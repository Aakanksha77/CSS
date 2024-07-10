// Loops for Object 
// ForIn Loops are use for Looping in Object.

const myObject ={
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Rudy',
    py : 'Python'
}

for (const key in myObject) {
    console.log(myObject[key])
}

// ForIn Loop for Array

const myarray = ['Aakanks', 'VS code', 'Rashmi', 'Github'];
for (const key in myarray) {
    console.log(key)
}