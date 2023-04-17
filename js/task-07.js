const controlSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlSize.setAttribute('value', '16')
controlSize.addEventListener('input', () => {
    textEl.style.fontSize = `${controlSize.value}px`
});