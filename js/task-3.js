const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const value = event.target.value.trim();
  outputEl.textContent = value === '' ? 'Anonymous' : value;
});
