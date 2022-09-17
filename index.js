let rating = -1;
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you-component");
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");

function onClick(e) {
  rating = e.target.value;
  console.log(rating);
}
