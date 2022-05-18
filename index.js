const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const bookNotRead = document.querySelector('#not-read');
const addBookButton = document.querySelector('.add-book');
const editCard = document.querySelector('.edit-card');
const rightSide = document.querySelector('.right-side');
const form = document.querySelector('.form');
const deleteBtn = document.querySelectorAll('.deleteButton');

let myLibrary = [];
let explored = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printBook = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(){
    let completed = false;
    if (bookTitle.value.length == 0 || bookAuthor.value.length == 0 || bookPages.value.length == 0 || bookRead.checked == false && bookNotRead.checked == false){
        alert("Input fields are empty");
        return false;
    }

    if (bookRead.checked == true && bookNotRead.checked == false){
        completed = true;
        const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Completed.')
        myLibrary.push(book);
        displayBook(myLibrary);
        form.reset();
    }
    else{
        const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, 'Not Completed.')
        myLibrary.push(book);
        displayBook(myLibrary);
        form.reset();
    }
}

function displayBook(bookLibrary){

    for(let i = 0; i < bookLibrary.length; i++){
        explored.push(bookLibrary[i]);
        let number = explored.length;
        const element = document.createElement('div');
        element.setAttribute('class' , 'card');
        element.classList.add(`book${number}`);

    let siteContent = `<p> Book Number: ${number}
    <p>Book Title: ${bookLibrary[i].title}</p>
    <p>Book Author: ${bookLibrary[i].author}</p>
    <p>Number of Pages: ${bookLibrary[i].pages}</p>
    <p>Book Completed : ${bookLibrary[i].read}</p>
    <p><button class="edit-card" type="button">Edit</button> <button type="button">Completed</button> <button type = "button" class = "deleteButton"> Delete </button></p>`;
    element.innerHTML = siteContent;
    rightSide.appendChild(element);
    myLibrary.shift();
    }
}

deleteBtn.addEventListener('click', () => {

})