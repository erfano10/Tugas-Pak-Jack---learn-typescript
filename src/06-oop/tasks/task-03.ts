/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class book {
    private status: string = "available"
    constructor(

        public ISBN: string,
        public title: string,
        public author: string,
        public totalPage: number
    ) { }
    public isAvailable(): boolean {
        return this.status === "available"
    }

    public borrow(): void {
        if (this.isAvailable()) {
            this.status = "borrowed"
            console.log(`Buku "${this.title}" berhasil dipinjam `)
        } else {
            console.log(`Gagal buku ${this.title} sedang tidak tersedia`)
        }
    }
    public returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available"
            console.log(`buku ${this.title} telah dikembalikan`)
        } else {
            console.log(`Buku ${this.title} saat ini tidak dipinjam `)
        }
    }
    public showInfo() : void {
        console.log(this.ISBN)
        console.log(this.title)
        console.log(this.author)
        console.log(this.totalPage)
        console.log(this.status)
    }
}

const book1 = new book("978-12345", "TypeScript Mastery", "Andi Prasetyo", 250)
const book2 = new book("978-67890", "Belajar OOP Mudah", "Budi Santoso", 180)


console.log(`--- Uji coba buku 1---`)
book1.showInfo()

console.log(`\n--- Uji coba buku 2 ---`)
book2.showInfo()

console.log(`\n--- Uji coba meminjam buku`)
book1.borrow()
book2.borrow()

console.log(`\n--- Uji coba mengembalikan buku ---`)
book1.returnBook()
book2.returnBook()

console.log(`\n--- Status Buku ---`)
console.log(`Apakah buku 1 tersedia ? ${book1.isAvailable()}`)
console.log(`Apakah buku 2 tersedia ? ${book2.isAvailable()}`)