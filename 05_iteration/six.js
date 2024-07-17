const coding = ["js","py","c++"];

const newcoding = coding.forEach((element) => {
    console.log(element);
});

//console.log(newcoding); //Output: undefined Reason: Because forEach Loop dos't not return the values.

//******************************Filter*******************************\\

const myNum = [1,2,3,4,5,6,7,8,9,10]

const Num =myNum.filter((num) => num > 4);
console.log(Num);

//With return

const  Num_1 = myNum.filter( (value) => {
    return value < 5;
});

console.log(Num_1)


const myBooks = [
    {
        title: 'Book One', 
        genre: 'Fiction',
        publish: 1982,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Ficition',
        publish: 1928,
        edition: 2008
    },
    {
        title: 'Book three',
        genre: 'History',
        publish: 1974,
        edition: 2003
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1967,
        edition: 2007
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 1987,
        edition: 2005
    },
    {
        title: 'Book Six',
        genre: 'Science',
        publish: 1956,
        edition: 2008
    }
];

let userBook = myBooks.filter( (Book) => Book.genre === 'Science')
 userBook = myBooks.filter( (Book)=>Book.edition > 2000 && Book.genre === 'Science')

console.log(userBook);
