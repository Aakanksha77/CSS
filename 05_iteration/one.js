// for Loop

// With If condition
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`${element} is my roll No.`)
    }
    console.log(element);
};

// Nested For Loop
for (let i = 1; i <= 5; i++) {
    // const element = array[i];
    // console.log(`Outer for lopp ${i}`)
    for (let j = 1; j <= 10; j++) {
        // const element = array[j];
        // console.log(`Inner ${i}*${j}=${i}*${j}`)
        console.log(i + '*'+ j +'=' + i*j);
    }
}

// Let see array 

let superHero = ["Hanuman","SpriderMan", "IranMan" , "Dr.Strange"];

for (let i = 0; i < superHero.length; i++) {
    const element = superHero[i];
    console.log(element);
}