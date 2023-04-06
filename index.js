const toggleBookmark = document.querySelector('[data-js="toggle-bookmark"]');
toggleBookmark.addEventListener("click", () => {
    toggleBookmark.classList.toggle("selected");
});