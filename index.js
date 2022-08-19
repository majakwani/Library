const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const cardParent = document.querySelector('.right-part');

let myLibrary = []; 
let booksToPrint = [];

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;

        if(read == true){
            this.read = "Read"
        }
        else{
            this.read = "Not Read"
        }
    }

    returnBook(){
        console.log (`${this.title} by ${this.author}, ${this.pages}, ${this.read}.`);
    }
}

// This function will take user input and store it in our array as an object
function addBookToLibrary() {
    if(title.value == "" || author.value == "" || pages.value == ""){
        alert("Empty Input Fields");
        location.reload();
        return;
    }

    let book = new Book(title.value, author.value, pages.value, read.checked)
    myLibrary.push(book);
    booksToPrint.push(book);
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    printBooks(myLibrary.length);
}

function changeReadStatus(value){
    if(value.innerHTML == "Read"){
        value.removeAttribute("class");
        value.classList.add("read-button" , "red");
        value.innerHTML = "Not Read";
    }
    else if (value.innerHTML == "Not Read"){
        value.removeAttribute("class");
        value.classList.add("read-button" , "green");
        value.innerHTML = "Read";
    }
}

function deleteCard(cardIndex){
    let card = cardIndex;
    cardParent.removeChild(cardIndex)
}

function printBooks(index){
    booksToPrint.forEach(element => {
        let card = document.createElement('div');
        card.setAttribute("id", index-1);
    if(element.read == 'Read'){
        card.classList.add("card", "flex");
        card.innerHTML = `<div class="para">
        <p>Title : ${element.title}</p>
    <p>Author : ${element.author}</p>
    <p>Pages : ${element.pages}</p>
    </div>
    <div class="buttons flex">
        <button type="button" id = "${index}button" class = "read-button green" onclick = "changeReadStatus(document.getElementById('${index}button'))">${element.read}</button>
        <button type="button" class="delete-button" onclick = "deleteCard(document.getElementById('${index-1}'))">Delete</button>
    </div>`;
    }
    else{
        card.classList.add("card", "flex");
        
        card.innerHTML = `<div class="para">
        <p>Title : ${element.title}</p>
    <p>Author : ${element.author}</p>
    <p>Pages : ${element.pages}</p>
    </div>
    <div class="buttons flex">
        <button type="button" id = "${index}button" class = "read-button red" onclick = "changeReadStatus(document.getElementById('${index}button'))">${element.read}</button>
        <button type="button" class="delete-button" onclick = "deleteCard(document.getElementById('${index-1}'))">Delete</button>
    </div>`;
    }

    cardParent.append(card);
    booksToPrint.pop();
    });
}