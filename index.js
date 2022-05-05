const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const bookNotRead = document.querySelector('#not-read');
const addBookButton = document.querySelector('.add-book');
const editCard = document.querySelector('.edit-card')

function Book(){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printBook = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
}

let myLibrary = [];

function addBookToLibrary(){
    let completed = false;
    if (bookTitle.value.length == 0 || bookAuthor.value.length == 0 || bookPages.value.length == 0 || bookRead.checked == false && bookNotRead.checked == false){
        alert("Input fields are empty");
        return false;
    }

    if (bookRead.checked == true && bookNotRead.checked == false){
        completed = true;
    }
    console.log(bookTitle.value)
    let bookObject = {Title : bookTitle.value, Author : bookAuthor.value, Pages : bookPages.value, Read : completed};
    myLibrary.push(bookObject);
}