const form = document.querySelector('[data-js="form"');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const yourQuestion = document.createElement("li");
    const yourQuestionName = form.target.question.value;

    yourQuestion.classList.add("card");
    yourQuestion.innerHTML = `
      <h2 class="card__title">New Card</h2>
      <p>${yourQuestionName}</p>
    `;
    form.append()
    cardContainer.append(yourQuestion);
});