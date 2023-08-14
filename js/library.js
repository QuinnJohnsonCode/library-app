let myLibrary = [];
const form = document.getElementById("modal-form");

function Book(title, author, numberOfPages, hasRead, releaseDate) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasRead = hasRead;
    this.releaseDate = releaseDate;
}

function displayLibrary() {

}

function addBookToLibrary(title, author, numberOfPages, hasRead, releaseDate) {
    myLibrary.push(new Book(title, author, numberOfPages, hasRead, releaseDate));
}

// Form Submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("page-count").value;
    const publishDate = document.getElementById("publish-date").value;
    const read = document.getElementById("has-read").value;
});