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

const book2: library = {
    ISBNnumber: "978-623-01-9999",
    title: "Harry Potter and The phisioner of Azkaban",
    AuthorName: "JK Rowling",
    TotalPage: 448,
    BookCategory: "Fantasy",
    Isavailable: false

}
const book3: library = {
    ISBNnumber: "978-979-11-1002",
    title: "Laskar Pelangi",
    AuthorName: "Andrea Hirata",
    TotalPage: 534,
    BookCategory: "Drama",
    Isavailable: true
}
const booklist: library[] = [book1, book2, book3]

console.log("=== Task 04 ===")
booklist.forEach((library, index) => {
    console.log(`\nbook ke ${index + 1}`)
    console.log("ISBNnumber :", library.ISBNnumber)
    console.log("Title book :", library.title)
    console.log("Author name :", library.AuthorName)
    console.log("Total Page :", library.TotalPage)
    console.log("Book Category :", library.BookCategory)
    console.log("Book currently avalaible for borrowing :", library.Isavailable ? "Book Is Available for Borrowing" : "Book is not avalaible for borrowing")
})









