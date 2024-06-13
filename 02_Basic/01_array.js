const myArray = [1,2,3,4] // One way to define array
const nameSuperHero = ["Wonder-Women","IronMan","Halk","Loki","Dr.Strange"]

const indSuperHero = new Array("Hanu-man","SakthiMan","G-One","krish"); // Decralde as Object

console.log(myArray);
console.log(myArray[3])
console.log(nameSuperHero);
console.log(nameSuperHero[2])
console.log(indSuperHero);
console.log(indSuperHero[1]);

// converstion
const newArray = myArray.join()
console.log(newArray);
console.log(typeof newArray);

// Method

myArray.push(7);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(0)
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(10));
console.log(myArray.includes(2));
console.log(myArray.indexOf(4));

//  Methods --> slice, splice
console.log("A",myArray);

const mynew1 = myArray.slice(1,3) //the orginal array is not modified . And give this element form 1 to 3(and 3 is not included)
console.log(mynew1);

console.log("B", myArray) 

const mynew2 = myArray.splice(1,3) //the original array changes. And remove the elements from 1 till 3 index .and give the remain element as a Output.
console.log("C",myArray);
console.log(mynew2);
