// Get elements
const newBookButton = document.getElementById("newBookButton");
const formContainer = document.getElementById("formContainer");
const addBookButton = document.getElementById("addBookButton");
const bookContainer = document.getElementById("bookContainer");

// Toggle the form visibility
newBookButton.addEventListener("click", () => {
    formContainer.style.display = "block";
});

// Add a new book box
addBookButton.addEventListener("click", () => {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const pages = document.getElementById("pages").value;

    // Validate inputs
    if (bookName && authorName && pages) {
        // Create a new book box
        const bookBox = document.createElement("div");
        bookBox.classList.add("box");

        bookBox.innerHTML = `
            <div class="details">
                <div class="book-name">${bookName}</div>
                <div class="author-name">${authorName}</div>
                <div class="pages">${pages} Pages</div>
            </div>
            <div class="buttons">
                <button class="read">Read</button>
                <button class="delete">Delete</button>
            </div>
        `;

        // Add the box to the container
        bookContainer.appendChild(bookBox);

        // Clear the form inputs
        document.getElementById("bookName").value = "";
        document.getElementById("authorName").value = "";
        document.getElementById("pages").value = "";

        // Hide the form
        formContainer.style.display = "none";
    } else {
        alert("Please fill in all the details.");
    }
});

// Optional: Add functionality to delete book boxes
bookContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.closest(".box").remove();
    }
});
