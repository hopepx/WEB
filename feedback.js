// JavaScript functionality for submitting feedback/enquiry
const form = document.querySelector('.form');
const feedbackInput = document.getElementById("feedback-input");
const submitButton = document.getElementById("submit-form");
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const feedback = feedbackInput.value;
  // Send feedback to server or perform desired action here
  alert("Thank you for your message!");
  feedbackInput.value = "";
});