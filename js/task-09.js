function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

button.addEventListener('click', () => {
  textColor.textContent = getRandomHexColor()
  bodyEl.style.backgroundColor = `${textColor.textContent}`
})