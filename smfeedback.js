const emojis = document.querySelectorAll(".emoji");
const feedbackTextarea = document.querySelector(".feedback-textarea");
const submitButton = document.querySelector(".submit-button");

emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    const selectedEmoji = emoji.getAttribute("data-emoji");
    feedbackTextarea.value += selectedEmoji;
  });
});

submitButton.addEventListener("click", () => {
  const feedback = feedbackTextarea.value;
  // Perform further processing or send the feedback to the server
  console.log("Feedback submitted:", feedback);
  // Clear the textarea
  feedbackTextarea.value = "";
});