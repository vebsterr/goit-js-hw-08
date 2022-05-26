import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

onPageDownload();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.log('hello');
  const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...currentData, ...formData }));
}

function onPageDownload() {
  Object.keys(formData).forEach(item => (formEl.elements[item].value = formData[item]));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.message || !formData.email) {
    return alert('Необходимо заполнить все поля!');
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  console.log('Отправка формы');

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
