/* eslint-disable */
// https://github.com/RobinHerbots/Inputmask
import Inputmask from 'inputmask';

const $ = window.$;

export function inputmask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask('input[data-type="tel"]');

  Inputmask({
    alias: 'email',
  }).mask('input[data-type="email"]');
}

export function validation(formId, inputName, regex) {
  const form = document.forms[formId];
  const input = form[inputName];
  const inputbox = input.parentElement;
  const message = inputbox.querySelector('.valid-message');

  const checkInput = () => {
    if (!regex.test(input.value)) {
      input.dataset.valid = false;
      input.focus();
      return false;
    }
    input.dataset.valid = true;
    return true;
  };

  const sendForm = (e) => {
    if (!checkInput(e)) {
      e.preventDefault();
      message.innerHTML = `Please enter your ${inputName}`;
    } else {
      message.innerHTML = '';
    }
  };

  input.addEventListener('input', (e) => checkInput(e));
  form.addEventListener('submit', (e) => sendForm(e));
}
/* eslint-enable */
