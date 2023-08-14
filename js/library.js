let myLibrary = [];
const form = document.getElementById("modal-form");
const cardGrid = document.getElementById("card-grid");

function Book(title, author, numberOfPages, hasRead, releaseDate) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasRead = hasRead;
    this.releaseDate = releaseDate;
}

function displayLibrary() {
    cardGrid.textContent = "";

    for (const book of myLibrary) {
        console.log(typeof(book));
        // Create elements
        const cardElement = document.createElement("div");
        const titleElement = document.createElement("h2");
        const authorElement = document.createElement("h3");
        const pageCountElement = document.createElement("h3");
        const publishDateElement = document.createElement("h3");

        // Add text
        console.log(book.title);
        titleElement.textContent = book.title;
        authorElement.textContent = book.author;
        pageCountElement.textContent = book.numberOfPages + " Pages";
        publishDateElement.textContent = "Published " + book.releaseDate;
        
        // Add card elements/classes
        cardElement.classList.add("card");
        cardElement.appendChild(titleElement);
        cardElement.appendChild(authorElement);
        cardElement.appendChild(pageCountElement);
        cardElement.appendChild(publishDateElement);

        // Add buttons
        const buttonContainer = createCardButtons(book.hasRead);
        cardElement.appendChild(buttonContainer);

        // Add card element to DOM
        cardGrid.appendChild(cardElement);
    }
}

function createCardButtons(hasRead) {
    const buttonContainer = document.createElement("div");
    const readButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    
    const readIcon = document.createElement("span");
    const deleteIcon = document.createElement("span");

    buttonContainer.classList.add("buttons");
    readIcon.classList.add("material-symbols-outlined");
    deleteIcon.classList.add("material-symbols-outlined");

    if (hasRead) {
        readIcon.textContent = "visibility";
    } else {
        readIcon.textContent = "visibility_off";
    }

    deleteIcon.textContent = "delete";

    readButton.appendChild(readIcon);
    deleteButton.appendChild(deleteIcon);

    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(deleteButton);
    
    return buttonContainer;
}

function addBookToLibrary(title, author, numberOfPages, hasRead, releaseDate) {
    myLibrary.push(new Book(title, author, numberOfPages, hasRead, releaseDate));
    displayLibrary();
}

// Form Submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("page-count").value;
    const publishDate = document.getElementById("publish-date").value;
    const read = document.getElementById("has-read").checked;

    addBookToLibrary(title, author, pageCount, read, publishDate);
});