/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const borrowingAndi = borrowings.filter((item) => item.student === "Andi")
const transactionWithBookInfo = borrowings.map((b) =>{
const bookInfo = books.find((book) => book.id === b.bookId)
return {
    student: b.student,
    bookTitle: bookInfo ? bookInfo.title : "Unknown",
    category : bookInfo ? bookInfo.category : "Unknown",
    days : b.days
}
})

const ProggamingBorrowers = borrowings.filter((b) => {
    const book = books.find((book) => book.id === b.bookId)
    return book ? book.category === "Proggaming" : false
}).map((b)=> b.student)

const totalTransaction = borrowings.length
const totalDays = borrowings.reduce((sum , b) => sum + b.days,0)
const averageDuration = totalDays/borrowings.length

const longTermBorrowers = borrowings.filter((b) => b.days > 7)
.map((b) => b.student)

console.log(borrowingAndi)
console.log(transactionWithBookInfo)
console.log(ProggamingBorrowers)
console.log(totalTransaction)
console.log(averageDuration)
console.log(longTermBorrowers)