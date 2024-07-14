const coding = ["js","py","c++"];

const newcoding = coding.forEach((element) => {
    console.log(element);
});

console.log(newcoding); //Output: undefined Reason: Because forEach Loop dos't not return the values.

