class Library {
  constructor() {
    this.myLibrary = [];
    this.bookId = 0;
    this.x = 0;
    this.boxid;
  }

  openInput() {
    document.getElementById("add").showModal();
  }

  closeInput() {
    document.getElementById("add").close();
    document.getElementById("edit").close();
  }

  createBook() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("book-author").value;
    let pages = document.getElementById("book-pages").value;
    let read = document.querySelector("#book-read").checked;
    let id = this.bookId;

    class Book {
      constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
      }
    }

    this.myLibrary[this.x] = new Book(title, author, pages, read, id);
    console.log(this.myLibrary);

    const container = document.getElementById("main");
    const newBox = document.createElement("div");
    const titleDiv = document.createElement("p");
    const authorDiv = document.createElement("p");
    const pagesDiv = document.createElement("p");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    titleText.setAttribute("id", `titleDiv${this.x}`);
    authorText.setAttribute("id", `authorDiv${this.x}`);
    pagesText.setAttribute("id", `pagesDiv${this.x}`);

    buttonEdit.textContent = "Edit";
    buttonDelete.textContent = "Delete";

    buttonEdit.addEventListener("click", (e) => {
      document.getElementById("edit").showModal();
      this.boxid = e.target.parentElement.id;

      document.getElementById("book-title2").value =
        this.myLibrary[this.boxid].title;
      document.getElementById("book-author2").value =
        this.myLibrary[this.boxid].author;
      document.getElementById("book-pages2").value =
        this.myLibrary[this.boxid].pages;
      document.getElementById("book-read2").checked =
        this.myLibrary[this.boxid].read;
    });

    buttonDelete.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      delete this.myLibrary[e.target.parentElement.id];
    });

    newBox.setAttribute("id", this.x);
    newBox.classList.add("bookbox");
    if (read == true) {
      newBox.classList.add("green");
    } else {
      newBox.classList.add("red");
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

    this.bookId++;
    this.x++;

    document.getElementById("forms").reset();
  }

  editBook2() {
    let title = document.getElementById("book-title2").value;
    let author = document.getElementById("book-author2").value;
    let pages = document.getElementById("book-pages2").value;
    let read = document.querySelector("#book-read2").checked;
    const titleText = document.getElementById(`titleDiv${this.boxid}`);
    const authorText = document.getElementById(`authorDiv${this.boxid}`);
    const pagesText = document.getElementById(`pagesDiv${this.boxid}`);
    const newBox = document.getElementById(this.boxid);

    if (read == true) {
      newBox.classList.remove("red");
      newBox.classList.add("green");
    } else {
      newBox.classList.remove("red");
      newBox.classList.add("red");
    }

    titleText.textContent = title;

    authorText.textContent = author;

    pagesText.textContent = pages;

    this.myLibrary[this.boxid].title = title;
    this.myLibrary[this.boxid].author = author;
    this.myLibrary[this.boxid].pages = pages;
    this.myLibrary[this.boxid].read = read;
  }
}

const library = new Library();
