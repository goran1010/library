const myLibrary = [];

const container = document.querySelector(`.container`);
const form = document.querySelector(`.add`);
let warning;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = `No`;
}

Book.prototype.changeRead = function () {
  if (this.read == `Yes`) {
    this.read = `No`;
  } else this.read = `Yes`;
};

const newTitle = document.querySelector(`.title`);
const newAuthor = document.querySelector(`.author`);
const newPages = document.querySelector(`.pages`);

const newBookButton = document.querySelector(`.button`);
newBookButton.addEventListener(`click`, (e) => {
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

  myLibrary.push(newBook);
  createBooksOnPage(container);
});

function createBooksOnPage(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  myLibrary.forEach((element, index) => {
    let showBook = document.createElement(`div`);

    showBook.textContent = `${element.title}
    ${element.author}
    ${element.pages}
    Read Book: ${element.read}`;
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
