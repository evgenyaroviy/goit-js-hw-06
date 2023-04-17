/* Напиши скрипт, який під час набору тексту в інпуті 
input#name - input(подія input), підставляє його поточне значення 
в span#name - output.Якщо інпут порожній, у спані повинен 
відображатися рядок "Anonymous". */


const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

const changeOutput = inputValue.addEventListener('input', () => {
    if (inputValue.value === '') {
        outputValue.textContent = 'Anonymous';
    } else {
        outputValue.textContent = inputValue.value;
    }
})
