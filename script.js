const myLibrary = [];
let x = 0;
let bookId = 1;

function openInput(){
    document.querySelector('dialog').showModal();
}
function closeInput(){
    document.querySelector('dialog').close();
}

function createBook() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('book-read').value;
    let id = bookId;

    function Book(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }

    myLibrary[x] = new Book(title, author, pages, read, id);
    bookId++;
    x++;
    document.getElementById('forms').reset();
    console.log(myLibrary);
}

function createBox() {
    const container = document.getElementById('main');
    const newBox = document.createElement('div');

    newBox.id = 'bookbox';
    
    container.appendChild(newBox);
}