const bodyElement = document.querySelector('[data-js="body"]');

const toggleBookmark = document.querySelector('[data-js="toggle-bookmark"]');
toggleBookmark.addEventListener("click", () => {
    toggleBookmark.classList.toggle("selected");
});