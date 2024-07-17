//  Reduce

// Reduce with function
const num = [1,2,3,4]

const Total = num.reduce( function (acc, current_value) {
    console.log(`acc: ${acc} and current value: ${current_value}`)
    return acc + current_value;
},0);

console.log(Total);

//Reduce with Arroy function

const iteamPrice = [
    {
        course : 'py cousre',
        price : 999
    },
    {
        course : 'java cousre',
        price : 1299
    },
    {
        course : 'english couse',
        price : 299
    },
    {
        course : 'Data Science',
        price : 399
    }
]

const totalAmount = iteamPrice.reduce( (acc , iteam)=> acc+iteam.price ,0)

console.log(totalAmount)