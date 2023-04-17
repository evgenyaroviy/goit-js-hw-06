const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = Number(inputEl.getAttribute('data-length'));
  const isInputValid = event.target.value.length === inputLength;

  if (isInputValid) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
