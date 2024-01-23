const myLibrary = [];
let x = 0;
let bookId = 0;
let boxid;

function openInput(){
    document.getElementById('add').showModal();
}
function closeInput(){
    document.getElementById('add').close();
    document.getElementById('edit').close();
}

function createBook() {

    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.querySelector('#book-read').checked;
    let id = bookId;

    function Book(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }

    myLibrary[x] = new Book(title, author, pages, read, id);
    console.log(myLibrary);

    const container = document.getElementById('main');
    const newBox = document.createElement('div');
    const titleDiv = document.createElement('p');
    const authorDiv = document.createElement('p');
    const pagesDiv = document.createElement('p');
    const titleText = document.createElement('p');
    const authorText = document.createElement('p');
    const pagesText = document.createElement('p');
    const buttonEdit = document.createElement('button');
    const buttonDelete = document.createElement('button');

    titleText.setAttribute('id',`titleDiv${x}`);
    authorText.setAttribute('id',`authorDiv${x}`);
    pagesText.setAttribute('id',`pagesDiv${x}`);

    buttonEdit.textContent = "Edit";
    buttonDelete.textContent = "Delete";

    buttonEdit.addEventListener('click', function editBook(e) {
        document.getElementById('edit').showModal();
        boxid = e.target.parentElement.id;

        document.getElementById('book-title2').value = myLibrary[boxid].title;
        document.getElementById('book-author2').value = myLibrary[boxid].author;
        document.getElementById('book-pages2').value = myLibrary[boxid].pages;
        document.getElementById('book-read2').checked = myLibrary[boxid].read;
    });

    buttonDelete.addEventListener('click', function deleteBook(e) {
        e.target.parentElement.remove();
        delete myLibrary[e.target.parentElement.id];
    });

    newBox.setAttribute('id', x);
    newBox.classList.add('bookbox');
    if(read == true) {
        newBox.classList.add('green');
    } else {
        newBox.classList.add('red');
    }

    container.appendChild(newBox);

    titleDiv.textContent = "Title";
    newBox.appendChild(titleDiv);
    titleText.textContent = title;
    titleDiv.appendChild(titleText);

    authorDiv.textContent = "Author";
    newBox.appendChild(authorDiv);
    authorText.textContent = author;
    authorDiv.appendChild(authorText);

    pagesDiv.textContent = "Pages";
    newBox.appendChild(pagesDiv);
    pagesText.textContent = pages;
    pagesDiv.appendChild(pagesText);

    newBox.appendChild(buttonEdit);
    newBox.appendChild(buttonDelete);

    bookId++;
    x++;

    document.getElementById('forms').reset();
}

function editBook2(){
    let title = document.getElementById('book-title2').value;
    let author = document.getElementById('book-author2').value;
    let pages = document.getElementById('book-pages2').value;
    let read = document.querySelector('#book-read2').checked;
    const titleText =  document.getElementById(`titleDiv${boxid}`);
    const authorText = document.getElementById(`authorDiv${boxid}`)
    const pagesText = document.getElementById(`pagesDiv${boxid}`)
    const newBox = document.getElementById(boxid);

    if(read == true) {
        newBox.classList.remove('red');
        newBox.classList.add('green');
    } else {
        newBox.classList.remove('red');
        newBox.classList.add('red');
    }


    titleText.textContent = title;

    authorText.textContent = author;

    pagesText.textContent = pages;

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    myLibrary[boxid] = {...myLibrary[boxid], title, author, pages, read};

    console.log(myLibrary[boxid]);

}