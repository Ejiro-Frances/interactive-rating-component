const rateCard = document.querySelector("#rate-card");
const thankYou = document.querySelector("#thank-you");
const submitButton = document.querySelector(".submit-btn");

const labels = document.querySelectorAll("label");
const radioButtons = document.querySelectorAll('input[type="radio"]');

// show thank you
submitButton.addEventListener("click", () => {
  rateCard.classList.add("hide");
  thankYou.classList.remove("hide");
});

// count checkbox
// function updateCheckedCount() {
//   let count = 0;

//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       count++;
//     }
//   });

// update count to the DOM
//   document.getElementById("check-count").textContent = count;
// }

// Add event listeners to checkboxes
function updateCheckedCount(num) {
  document.getElementById("check-count").innerHTML = num;
}
radioButtons.forEach((radio) => {
  radio.addEventListener("show", updateCheckedCount);
});
