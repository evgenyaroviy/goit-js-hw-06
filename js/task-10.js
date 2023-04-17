function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userNumber = document.querySelector('input');
const divForDivs = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const createDiv = createBtn.addEventListener('click', createBoxes)
const removeDiv = destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < userNumber.value; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'new-div')
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divForDivs.append(newDiv);
    size += 10;
  }
}

function destroyBoxes() {
  const allNewDiv = boxes.querySelectorAll('div');
  for (let i = 0; i < allNewDiv.length; i++) {
    allNewDiv[i].remove();
  }
}


