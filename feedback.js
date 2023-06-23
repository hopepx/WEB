const container = document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('textarea');
const btn = document.querySelector('.btn');

emoji.addEventListener('click', (e) => {
  if (e.target.className.includes('emoji')) return;
  textarea.classList.add('textarea--active');
  btn.classList.add('btn--active');
});

container.addEventListener('mouseleave', () => {
  textarea.classList.remove('textarea--active');
  btn.classList.remove('btn--active');
});

// Get the feedback form and response message elements
const form = document.querySelector('form');
const responseMessage = document.querySelector('#response-message');

// Add the form submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission behavior
  
  // Get the value of the feedback textarea
  const feedbackText = document.querySelector('.textarea').value;
  
  // Check if feedback text is empty
  if (!feedbackText) {
    alert("Please enter your feedback or inquiry.");
    return false;
  }
  
  // Simulate receiving a response from the station manager
  const responseText = "Thank you for your feedback. We will be addressing your concerns shortly.";
  
  // Set the response message content to the text from the station manager
  responseMessage.textContent = responseText;
});