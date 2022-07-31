const myLibrary = [];

const container = document.querySelector(`.container`);
const form = document.querySelector(`.add`);
let warning;

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = `No`;
  }
  changeRead() {
    if (this.read === `Yes`) {
      this.read = `No`;
    } else this.read = `Yes`;
  }
}

function createNewBook(e) {
  let title = newTitle.value;
  let author = newAuthor.value;
  let pages = newPages.value;

  if (!title || !author || !pages) {
    if (warning) return;
    warning = document.createElement(`div`);
    warning.classList.add(`warning`);
    warning.textContent = `You need to fill out all the fields`;
    form.appendChild(warning);
    return;
  }
  if (warning) {
    form.removeChild(warning);
    warning = undefined;
  }
  let newBook = new Book(title, author, pages);
  console.log(newBook);
  myLibrary.push(newBook);
  createBooksOnPage(container);
}

const newTitle = document.querySelector(`.title`);
const newAuthor = document.querySelector(`.author`);
const newPages = document.querySelector(`.pages`);

const newBookButton = document.querySelector(`.button`);
newBookButton.addEventListener(`click`, createNewBook);

window.addEventListener(`keyup`, (e) => {
  if (e.key === `Enter`) {
    createNewBook();
  }
});

function createBooksOnPage(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  myLibrary.forEach((element, index) => {
    let showBook = document.createElement(`div`);

    let bookTitle = document.createElement(`div`);
    let bookAuthor = document.createElement(`div`);
    let bookPages = document.createElement(`div`);
    let bookRead = document.createElement(`div`);

    bookTitle.textContent = `${element.title}`;
    bookAuthor.textContent = `Written by ${element.author}`;
    bookPages.textContent = `Has ${element.pages} pages`;
    bookRead.textContent = `Have I read it?
    - ${element.read}`;

    showBook.appendChild(bookTitle);
    showBook.appendChild(bookAuthor);
    showBook.appendChild(bookPages);
    showBook.appendChild(bookRead);
    container.appendChild(showBook);

    let deleteButton = document.createElement(`div`);
    deleteButton.textContent = `X`;
    deleteButton.classList.add(`${index}`);
    deleteButton.classList.add(`bookDiv`);
    deleteButton.addEventListener(`click`, (e) => {
      myLibrary.splice(index, 1);
      createBooksOnPage(container);
    });
    showBook.appendChild(deleteButton);

    let readButton = document.createElement(`div`);
    readButton.classList.add(`read`);
    readButton.textContent = `Change Read`;
    readButton.addEventListener(`click`, () => {
      element.changeRead();
      createBooksOnPage(container);
    });
    showBook.appendChild(readButton);
  });
}
