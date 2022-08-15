const input = document.getElementById('name');
const debounceValue = document.getElementById('debounce-value');

const updateDebounceValue = () => {
  debounceValue.innerHTML = input.value;
};

let debounceTimer;

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

input.addEventListener(
  'input',
  () => {
    debounce(updateDebounceValue, 500);
  },
  false
);
