import _throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTexterea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-msg');
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem('feedback-msg', message);
}
function populateTexterea() {
  const savedMessage = localStorage.getItem('feedback-msg');
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
console.log(localStorage);
