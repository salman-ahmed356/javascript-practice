const readlineSync = require('readline-sync');

class Library {
    constructor() {
        this.books = [
            new Book("book1", "hh", 3, 0),
            new Book("book2", "hh", 4, 3),
            new Book("book3", "hhh", 5, 4),
            new Book("book4", "hhhh", 2, 2)
        ];
        this.borrow = [];
    }

    addBook(title, author, tc, copy) {
        const newBook = new Book(title, author, tc, copy);
        this.books.push(newBook);
        console.log("Book added successfully!");
    }

    borrowBook(bbname) {
        const bookToBorrow = this.books.find(book => book.title.toLowerCase() === bbname.toLowerCase());
        if (bookToBorrow) {
            if (bookToBorrow.copy > 0) {
                console.log("Copies available of the book '" + bookToBorrow.title + "' are: " + bookToBorrow.copy);
                bookToBorrow.copy -= 1;
                const newBorrower = new Borrower(bookToBorrow.title, bookToBorrow.copy);
                this.borrow.push(newBorrower);
                console.log("You have successfully borrowed the book: " + bookToBorrow.title);
                this.borrow.forEach(borroww=>{
                    console.log("The borrowed books are as follows: ");
                    console.log(borroww.title);
                })
            } else {
                console.log("The book '" + bookToBorrow.title + "' is currently out of copies!");
            }
        } else {
            console.log("The book '" + bbname + "' is not found in the library.");
        }
    }
    returnBorrowedBooks(bbbname) {
        const borrowedBook = this.borrow.find(ret => ret.title.toLowerCase() === bbbname.toLowerCase());
        if (borrowedBook) {
            const libraryBook = this.books.find(book => book.title.toLowerCase() === bbbname.toLowerCase());
            if (libraryBook) {
                libraryBook.copy += 1;
                console.log(`You have successfully returned the book: ${libraryBook.title}`);
            }
            this.borrow = this.borrow.filter(ret => ret.title.toLowerCase() !== bbbname.toLowerCase());
        } else {
            console.log(bbbname +  " was not found in your borrowed books.");
        }
    }
    
    listBooks() {
        if (this.books.length === 0) {
            console.log("No books are currently present in the library...");
        } else {
            console.log("Books present in library are: \n");
            console.log("(Book Title)          (Author)          (Total Copies)    (Available Copies)");
            console.log("--------------------------------------------------------------------------");
            this.books.forEach(book => {
                    console.log("  ",book.title,"               ",book.author,"                ",book.tc,"                 ",book.copy,);
            });
            console.log("\n");
        }
    }
    
    }


class Book {
    constructor(title, author, tc, copy) {
        this.title = title;
        this.author = author;
        this.tc = tc;
        this.copy = copy;
    }
}

class Borrower {
    constructor(title, copy) {
        this.title = title;
        this.copy = copy;
    }
}

const myLibrary = new Library();
let managing = true;

async function manageLibrary() {
    while (managing) {
        const qn = readlineSync.questionInt(`
            Enter options from below:
            1: See list of books in the library
            2: Add more books to the library
            3: Borrow books
            4: Return Borrowed Books
            5: Exit

            Enter: `);
        switch (qn) {
            case 1:
                myLibrary.listBooks();
                break;
            case 2:
                const numberOfBooks = readlineSync.questionInt("How many books do you want to add? : ");
                for (let i = 1; i <= numberOfBooks; i++) {
                    const title = readlineSync.question("Enter the name of book number " + i + " : ");
                    const author = readlineSync.question("Enter the name of the author of book number " + i + " : ");
                    const tc = readlineSync.questionInt("Total copies of book number " + i + " ? : ");
                    const copy = readlineSync.questionInt("How many copies do you have of book number " + i + " ? : ");
                    myLibrary.addBook(title, author, tc, copy);
                }
                break;
            case 3:
                const bb = readlineSync.questionInt("How many books do you want to borrow? : ");
                for (let i = 1; i <= bb; i++) {
                    const bbname = readlineSync.question("Enter the name of the book number " + i + " : ");
                    myLibrary.borrowBook(bbname);
                }
                break;
            case 4:
                const bbbname = readlineSync.question("Enter the name of the book that you want to return: ");
                myLibrary.returnBorrowedBooks(bbbname);
                break;
            case 5:
                managing = false;
                break;
            default:
                console.log("Enter correct option!!");
                break;
        }
    }
}

manageLibrary();
