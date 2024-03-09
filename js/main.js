let formInputs = document.querySelectorAll(".contact-input input");
let submitBTN = document.getElementById("submitBTN");
let pageBGPopUp = document.getElementById("pageCover");
let confirmationClose = document.getElementById("confirmationClose");
let confirmationText = document.getElementById("confirmationText");

// SOUND EFFECT
const audioElement = new Audio("sound/Click.mp3");
audioElement.preload = "auto";

document
  .querySelectorAll(".contact-input input, .contact-input textarea")
  .forEach((input) => {
    input.addEventListener("mousedown", () => {
      audioElement.currentTime = 0;
      audioElement.play();
    });
  });

// FOCUS
formInputs.forEach((thisInput) =>
  thisInput.addEventListener("focus", function () {
    thisInput.classList.add("onFocus");
  })
);

// BLUR
formInputs.forEach((thisInput) =>
  thisInput.addEventListener("blur", function () {
    thisInput.classList.remove("onFocus");

    // check the value
    // if it is empty
    // add the style error
    // show the error message for the input
  })
);

// SUBMIT
submitBTN.addEventListener("click", function (e) {
  // prevent default
  e.preventDefault();

  // check and validate the form inputs
  // if the inputs are NOT empty

  if (
    formInputs[0].value.trim() !== "" &&
    formInputs[1].value.trim() !== "" &&
    formInputs[2].value.trim() !== ""
  ) {
    // personalized message
    let personalizedMessage = `Hey ${formInputs[0].value}, I have received your message and I will get back to 
    you on ${formInputs[2].value} within the next 48hrs.`;

    // inject the message into the html element
    confirmationText.innerHTML = personalizedMessage;
    // pop up a box
    pageBGPopUp.style.display = "block";
  } else {
  }
});

confirmationClose.addEventListener("click", function () {
  pageBGPopUp.style.display = "none";
});

// TASKS
// when user cicks on burger icon show burger menu

let burgerIcon = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");
let burgerClose = document.getElementById("burgerClose");

burgerIcon.addEventListener("click", function () {
  // show burger menu
  burgerMenu.style.display = "flex";
  // hide burger icon
  burgerIcon.style.display = "none";
  // show burger close icon
  burgerClose.style.display = "block";
});

// user clicks on burgerClose
// hide burger menu
// hide burgerClose
// show burgerIcon

burgerClose.addEventListener("click", function () {
  burgerMenu.classList.add(".slideDown");
  // burgerMenu.style.display = "flex";
  burgerClose.style.display = "none";
  burgerIcon.style.display = "block";
});