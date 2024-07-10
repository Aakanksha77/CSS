

//for of
// with array
let myarray = [1,2,3,4,5];

for (const num of myarray) {
    console.log(num);
}

// with string
const greeting = "Hello World";
for (const greet of greeting) {
    console.log(greet);
}

// Maps
const map = new Map()
map.set(1 ,"India")
map.set(2,"USA")
map.set(3,"Japan")

for (const key of map) {
    console.log(key)
}

// desturing od key value pair
for (const [key1, value] of map) {
    console.log(key1 , ':' , value);
    
}

//Object in ForOf loop

let myObject = {
    1 : 'Aakanksha',
    2 : 'Riya',
    3 : 'Priya',
    4 : 'Disha'
}

for (const obj of myObject) {
    console.log(obj);
}