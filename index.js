let rating = -1;
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you-component");
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");

function onClick(e) {
  rating = e.target.value;
  console.log(rating);
}

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
