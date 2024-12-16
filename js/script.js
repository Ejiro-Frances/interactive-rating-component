const rateCard = document.querySelector("#rate-card");
const thankYou = document.querySelector("#thank-you");
const submitButton = document.querySelector(".submit-btn");
const radioButtons = document.querySelectorAll('input[type="radio"]');

// show thank you message
submitButton.addEventListener("click", () => {
  rateCard.classList.add("hide");
  thankYou.classList.remove("hide");
});

// Add event listeners to checkboxes
function updateCheckedCount(num) {
  document.getElementById("check-count").innerHTML = num;
}
radioButtons.forEach((radio) => {
  radio.addEventListener("show", updateCheckedCount);
});
