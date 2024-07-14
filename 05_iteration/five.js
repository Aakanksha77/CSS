const coding = ['js','ry', 'cpp','py'];

coding.forEach( function (params) {
    console.log(params);
})  // as it is a call back function it doesn't have name in it .The value In the paraenties () will act as a paramenter because there are inside the array 

// On other version of the above :

//By using arrow function

coding.forEach( (iteam) => {
    console.log(iteam);
} )

//One other way:

function printMe(values) {
    console.log(`I am print Me: ${values}`)
}

coding.forEach(printMe) //Here printMe is reference 

// In the following we are access the object value stored in array 
const myObject = [
    {
        Laungage: "Python",
        Extention: "py"
    },
    {
        Laungage: "Java",
        Extention: "Java"
    },
    {
        Laungage: "C#",
        Extention: "cpy"
    },
    {
        Laungage: "Kotlin",
        Extention: "kl"
    }
];

myObject.forEach( (iteam)=>{
    console.log(iteam.Extention);
})