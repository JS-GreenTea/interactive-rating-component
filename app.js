let numDiv = document.getElementsByClassName("num-btn");
let submitBtn = document.getElementsByClassName("submit-btn")[0];
let container = document.getElementsByClassName("container")[0];
let afterContainer = document.getElementsByClassName("after-container")[0];
let selectedInfo = document.getElementsByClassName("selected-info")[0];
let selectNum;

for (let i = 0; i < numDiv.length; i++) {
  numDiv[i].addEventListener("click", (e) => clickNumBtn(e));
}

function clickNumBtn(event) {
  removeClickd();
  event.target.classList.add("clicked");
  selectNum = event.target.innerText;
}

function removeClickd() {
  for (let i = 0; i < numDiv.length; i++) {
    numDiv[i].classList.remove("clicked");
  }
}

submitBtn.addEventListener("click", clickSubmitBtn);

function clickSubmitBtn() {
  if (selectNum === undefined) {
    alert("Please, click button");
  } else {
    clearContainer();
    showThxView();
  }
}

function clearContainer() {
  container.style.display = "none";
}

function showThxView() {
  afterContainer.style.display = "";
  selectedInfo.innerText = `You selected ${selectNum} out of 5`;
}
