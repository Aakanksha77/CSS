const userEmail = "anc@gmail.com"

if (userEmail) {
   console.log("User email")
}else {
   console.log("Don't have user email")
}

   // falsy values

   // false, 0, -0, BigInt 0n, "",null, undefined, NaN

   // Truthy values 

   // "0", 'false'," ", [], {}, function () {},


   // Let see how to use Array in truthy and Falsy Case:

const userArray = []

if (userArray) {
   console.log("Execute");
}else{
   console.log("Not Executed");
}


if(userArray.length === 0){
   console.log("Array is empty")
}else{
   console.log("Array is not empty")
}


const emptyObj = {h : "hello"};

if (Object.keys(emptyObj).length === 0) {
   console.log("Object is empty")
} else {
   console.log("object is not empty")
}