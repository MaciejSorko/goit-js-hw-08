import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
function saveMessage(evt) {
  evt.preventDefault();
  {
    const values = JSON.stringify({
      message: form.elements.message.value,
      email: form.elements.email.value,
    });
    localStorage.setItem('feedback-form-state', values);
  }
}

form.addEventListener('input', throttle(saveMessage, 500));

const savedText = JSON.parse(localStorage.getItem('feedback-form-state'));
form.elements.message.value = savedText.message;
form.elements.email.value = savedText.email;

function clear(evt) {
  evt.preventDefault();
  if (form.elements.message.value !== '' && form.elements.email.value !== '') {
    console.log(form.elements.email.value);
    console.log(form.elements.message.value);
    form.elements.message.value = '';
    form.elements.email.value = '';
  } else {
    alert('wszystkie pola powinny zostać wypełnione');
  }
}

form.addEventListener('submit', clear);
