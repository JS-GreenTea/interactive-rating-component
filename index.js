let rating = -1;
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you-component");
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");
const buttonStates = [
  { id: 1, isSelected: false },
  { id: 2, isSelected: false },
  { id: 3, isSelected: false },
  { id: 4, isSelected: false },
  { id: 5, isSelected: false },
];

const onClick = (e) => {
  rating = e.target.value;
  console.log(rating);
  if (!findSelectButtonById(rating).isSelected) {
    ratingButtons.forEach((ratingButton) => {
      ratingButton.classList.remove("select");
    });
    buttonStates.forEach((buttonState) => {
      buttonState.isSelected = false;
    });

    const selectedButton = document.getElementById(`button-${e.target.value}`);
    selectedButton.classList.add("select");
    findSelectButtonById(rating).isSelected = true;
  }
};

const findSelectButtonById = (value) => {
  console.log(buttonStates.filter((buttonState) => buttonState.id === +value));
  return buttonStates.filter((buttonState) => buttonState.id === +value)[0];
};

function onSubmit() {
  if (rating === -1) {
    alert("Please select number");
    return;
  }
  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block";
  const ratingResult = document.querySelector("#rating-result");
  ratingResult.innerText = `You selected out ${rating} of 5`;
}

submitButton.addEventListener("click", onSubmit);
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", onClick);
});
