const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const bookNotRead = document.querySelector('#not-read');
const addBookButton = document.querySelector('.add-book');
const editCard = document.querySelector('.edit-card');
const rightSide = document.querySelector('.right-side');
const form = document.querySelector('.form');
const deleteBtn = document.querySelectorAll('.card > p > button:nth-child(3)');

let myLibrary = [];
let booksToDisplay = [];

// Constructor Function
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// Adding a function to our constructor through prototype object
Book.prototype.printBook = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

// This function takes user input from a form, makes an object and add that object to an array.
function addBookToLibrary(){
    let completed = false;
    if (bookTitle.value.length == 0 || bookAuthor.value.length == 0 || bookPages.value.length == 0 || bookRead.checked == false && bookNotRead.checked == false){
        alert("Input fields are empty");
        return false;
    }

    if (bookRead.checked == true && bookNotRead.checked == false){
        completed = true;
        const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Completed.')
        booksToDisplay.push(book);
        displayBook(booksToDisplay);
        form.reset();
    }
    else{
        const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Not Completed.')
        booksToDisplay.push(book);
        displayBook(booksToDisplay);
        form.reset();
    }
}

// This function takes an array of books, display them on our HTML page.
function displayBook(bookLibrary){

    for(let i = 0; i < bookLibrary.length; i++){
        siteContent = "";
        myLibrary.push(bookLibrary[i]);
        let number = myLibrary.length;

        const element = document.createElement('div');
        element.setAttribute('class' , 'card');
        element.classList.add(`book${number}`);

        if (bookLibrary[i].read == 'Completed.'){
        siteContent = `<p> Book Number: ${number}
        <p>Book Title: ${bookLibrary[i].title}</p>
        <p>Book Author: ${bookLibrary[i].author}</p>
        <p>Number of Pages: ${bookLibrary[i].pages}</p>
        <p>Book Completed : ${bookLibrary[i].read}</p>
        <p><button class="edit-card" type="button">Edit</button> <button type = "button" class = "deleteButton"> Delete </button></p>`;
        }

        else if (bookLibrary[i].read == 'Not Completed.'){
        siteContent = `<p> Book Number: ${number}
        <p>Book Title: ${bookLibrary[i].title}</p>
        <p>Book Author: ${bookLibrary[i].author}</p>
        <p>Number of Pages: ${bookLibrary[i].pages}</p>
        <p>Book Completed : ${bookLibrary[i].read}</p>
        <p><button class="edit-card" type="button">Edit</button> <button type = "button" class = "deleteButton"> Delete </button></p>`;
        }

        element.innerHTML = siteContent;

        rightSide.appendChild(element);
        booksToDisplay.shift();
    }
}

deleteBtn.addEventListener('click', () => {

})

editCard.addEventListener('click', () => {

})

completedBtn.addEventListener('click' , () => {

})