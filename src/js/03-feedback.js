import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-msg';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onEmailInput, 500));

populateTextarea();

function onEmailInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const saveEmail = localStorage.getItem('feedback-form-state');
  const parsetEmail = JSON.parse(saveEmail);
  if (parsetEmail && saveMessage) {
    console.log(parsetEmail);
    refs.email.value = saveEmail;
    console.log(saveMessage);
    refs.textarea.value = saveMessage;
  }
}
console.log(localStorage);
