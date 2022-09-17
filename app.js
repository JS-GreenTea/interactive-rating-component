let numDiv = document.getElementsByClassName("num-btn");
let selectNum;
for (let i = 0; i < numDiv.length; i++) {
  numDiv[i].addEventListener("click", (e) => clickNumBtn(e));
  console.log(numDiv[i]);
}

function clickNumBtn(event) {
  removeClickd();
  event.target.classList.add("clicked");
  selectNum = event.target.innerText;
  console.log(selectNum);
}

function removeClickd() {
  for (let i = 0; i < numDiv.length; i++) {
    numDiv[i].classList.remove("clicked");
  }
}
