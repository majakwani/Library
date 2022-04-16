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

}
