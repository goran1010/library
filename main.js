let myLibrary = [];
const container = document.querySelector(`.container`);

function Book(title, author, pages) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt(`Book title:`, `Lord of the Rings`);
  let author = prompt(`Book author:`, `JRR Tolkien`);
  let pages = prompt(`Number of Pages:`, 999);
  let read = prompt(`Did you read it? `, true);
  myLibrary.push(new Book(title, author, pages));

  let newBook = document.createElement(`div`);
  newBook.textContent = `${myLibrary[myLibrary.length - 1]}`;
  container.appendChild(newBook);
}

document.addEventListener(`keyup`, (e) => {
  if (e.key == `b`)
    myLibrary.push({
      title: `Lord of the Rings`,
      author: `JRR Tolkien`,
      pages: 999,
      read: true,
    });
});
document.addEventListener(`keyup`, (e) => {
  if (e.key == `s`) {
    myLibrary.forEach((book) => {
      console.log(book);
    });
  }
});
