const modal = document.getElementById("formModal");
const openButton = document.getElementById("openModal");

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

openButton.addEventListener("click", () => {
    modal.style.display = "block";
});

form.addEventListener("submit", () => {
    modal.style.display = "none";
})