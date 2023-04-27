const toggleBookmark1 = document.querySelector('[data-js="toggle-bookmark-1"]');
toggleBookmark1.addEventListener("click", () => {
    toggleBookmark1.classList.toggle("selected");
});
const toggleBookmark2 = document.querySelector('[data-js="toggle-bookmark-2"]');
toggleBookmark2.addEventListener("click", () => {
    toggleBookmark2.classList.toggle("selected");
});
const toggleBookmark3 = document.querySelector('[data-js="toggle-bookmark-3"]');
toggleBookmark3.addEventListener("click", () => {
    toggleBookmark3.classList.toggle("selected");
});
const bodyElement = document.querySelector('[data-js="body"]');

function show_hide(element) {
   var myAnswer = element.nextElementSibling;
   var displaySetting = myAnswer.style.display;
   var quizButton = element;

   if(displaySetting=="inline-block"){
       myAnswer.style.display = 'none';
       quizButton.innerHTML = 'Show Answer';
   }
   else
   {
       myAnswer.style.display = 'inline-block';
       quizButton.innerHTML = 'Hide Answer';
   }
}

