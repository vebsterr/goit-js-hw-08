import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

onPageDownload();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...currentData, ...formData }));
}

function onPageDownload() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(storageData);
  // console.log(parsedData);
  // console.log(formEl.elements.email);

  if (parsedData?.email) {
    formEl.elements.email.value = parsedData.email;
  }
  if (parsedData?.message) {
    formEl.elements.message.value = parsedData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  console.log('Отправка формы');

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
