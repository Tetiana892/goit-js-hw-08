import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-msg';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input', onEmailInput);

populateTexterea();

function onEmailInput(event) {
  formData[event.target.email] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTexterea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const saveEmail = localStorage.getItem('feedback-form-state');
  const parsetEmail = JSON.parse(saveEmail);
  if (savedMessage && parsetEmail) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
    console.log(parsetEmail);
    refs.email.value = saveEmail;
  }
}
console.log(localStorage);
