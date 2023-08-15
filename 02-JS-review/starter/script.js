const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

// Section 1: Destructuring Object
// const books = getBooks();
// const book = getBook(2);
// const { title, author } = book;
// const [gen1, gen2] = book.genres;

// console.log(title, author);

// // Section 2: RestSpread operator (three dots)
// const [gen1, gen2, ...otherGen] = book.genres;
// console.log(book.genres);
// console.log(gen1);
// console.log(otherGen);

// // append to list
// const newArray1 = [book.genres, "milf hunter"]; // this does not append to the end of newArrays
// const newArray2 = [...book.genres, "milf hunter"]; // operator spread will expose book.genres one by one and put it into array
// const newArray3 = ["milf hunter", ...book.genres];
// newArray1;
// newArray2;
// newArray3;

// // add and update new property to a object
// const oldBook = book;
// const newBook = {
//   ...book,
//   // adding new property
//   roatenTomatoesVote: "Fresh",
//   // update property
//   pages: 2300,
// }; // this is a new object

// newBook;
// oldBook;

// Section 3: Template Literal
// const book = getBook(3);
// const someText = `${book.author} is a famous writer,
// he publish the book ${book.title} in ${book.publicationDate.split("-")[0]}`;

// someText;

// Section 4 + 5: ifelse -> Ternaries and arrow function
// const book = getBook(4);
// const { title, translations } = book;
// const checkForSpanish = (translations) => {
//   // return a ternary to avoid ifelse statements.
//   return translations["spanish"] ? true : false;
// };

// const hasSpanish = checkForSpanish(translations);
// hasSpanish;

// Section 6: Short-Circuiting and logical operators
// Short-Circuiting is exactly the same as Lazy operation in C++
// Take a look to a few different
// 1. Logical operation does not only return true/false, the result
// will be determind by the last operation checked.
// console.log("My" || "Some string");
// console.log(false || "Some string");

// console.log("My" && "Some string");
// console.log(false && "Some string");

// // This will be a update of Section 5:
// const book = getBook(1);
// const hasSpanish = book.translations.spanish || "NOT SUPPORT";
// hasSpanish;

// the operator ?? will return the second operation only when the
// first operation equal null.

// Section 7 Option chainning
// const Opt1 = {
//   name: "Phuc",
//   age: 15,
//   wallet: {
//     money: 1500,
//     visa: "vip",
//   },
//   status: "single",
//   home: "poor",
// };

// const Opt2 = {
//   name: "thtrem",
//   age: 15,
//   status: "poorer than phuc",
// };

// const countMoney = (Opt1, Opt2) => {
//   const validate = (opt) => opt.wallet?.money || 0;
//   return validate(Opt1) + validate(Opt2);
// };

// console.log(countMoney(Opt1, Opt2));

// Section 8 + 9: The array map, filter,  method
// example
// const x = [1, 2, 3, 4, 5].map((ele) => (ele % 2 == 0 ? ele * 2 : ele));

// const books = getBooks();

// // get all title of books:
// const titles = books.map((book) => book.title);
// titles;

// // get title with author
// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentialData;

// Section 10: The array reduce method
// const x = [...Array(10).keys()];
// x;
// const y = x.reduce((acc, element) => {
//     console.log(acc);
//     console.log(element);
//     return acc + element;
// }, 0);
// y;

/*
The work flow of reduce method follow as below:

	const callbackfn = (acc, element) => acc + element;
	Array.reduce(callbackfn, start_number)

	-- translate to C++:
	int acc = start_number;
	int sum = 0;
	for (int element : Array) {
		// do something with acc
		sum = element + acc;
		acc = sum;
	}
*/

// section 11: sort method
// const x = [5, 1, 6, 3, 8];

// // javascripts use MergeSort when comparefunction is provided
// // and use the defaut std::sort in C++ when not.
// const sorted = x.sort((a, b) => {
//     console.log(a);
//     console.log(b);
//     return a - b;
// });
// sorted;
// // This method will mutable the original array
// // to avoid it, we will use Array.slice().sort()
// // to make a copy of them

// section 12: add, delete, update
// const books = getBooks();

// const newBook = {
//     id: 6,
//     title: "The godfather",
//     author: "Mario Puzzo",
// };

// // add new book
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // delete book with id = 3
// const booksAfterDelete = books.filter((book) => book.id !== 3);
// booksAfterDelete;

// // update book with idd = 6
// const booksAfterUpdate = booksAfterAdd.map((book) =>
//     book.id === 6 ? { ...book, author: "Trấn Thành" } : book
// );
// booksAfterUpdate;

const getJson = async function () {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    ).then((data) => data.json());

    console.log(data);
};

getJson();
console.log("hihi");
