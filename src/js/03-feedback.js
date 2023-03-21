import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-msg';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onEmailInput, 500));

populateTextarea();

function onEmailInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Пожалуйста заполните все поля!');
  }
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateTextarea() {
  if (formData) {
    let { email, message } = form.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
