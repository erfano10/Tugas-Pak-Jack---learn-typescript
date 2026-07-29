/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
//npm run example src/01-data-types/tasks/task-04.ts

interface library {
    ISBNnumber: string
    title: string
    AuthorName: string
    TotalPage: number
    BookCategory: string
    Isavailable: boolean

}


const book1: library = {
    ISBNnumber: "098-765-4321",
    title: "Petualangan Antargalaksi",
    AuthorName: "Budi Santoso",
    TotalPage: 350,
    BookCategory: "SCI - Fiction",
    Isavailable: true

}
console.log("ISBNnumber :", book1.ISBNnumber)
console.log("Title book :", book1.title)
console.log("Author name :", book1.AuthorName)
console.log("Total Page :", book1.TotalPage)
console.log("Book Category :", book1.BookCategory)

if (book1.Isavailable) {
    console.log("Status : Book is Available");
} else {
    console.log("Status : Book is not Available");
}

const book2: library = {
    ISBNnumber: "978-623-01-9999",
    title: "Harry Potter and The phisioner of Azkaban",
    AuthorName: "JK Rowling",
    TotalPage: 448,
    BookCategory: "Fantasy",
    Isavailable: false

}
console.log("ISBNnumber :", book2.ISBNnumber)
console.log("Title book :", book2.title)
console.log("Author name :", book2.AuthorName)
console.log("Total Page :", book2.TotalPage)
console.log("Book Category :", book2.BookCategory)
if (book2.Isavailable) {
    console.log("Status : Book is Available");
} else {
    console.log("Status : Book is not Available");
}
const book3: library = {
    ISBNnumber: "978-979-11-1002",
    title: "Laskar Pelangi",
    AuthorName: "Andrea Hirata",
    TotalPage: 534,
    BookCategory: "Drama",
    Isavailable: true
}
console.log("ISBNnumber :", book3.ISBNnumber)
console.log("Title book :", book3.title)
console.log("Author name :", book3.AuthorName)
console.log("Total Page :", book3.TotalPage)
console.log("Book Category :", book3.BookCategory)
if (book3.Isavailable) {
    console.log("Status : Book is Available");
} else {
    console.log("Status : Book is not Available");
}








