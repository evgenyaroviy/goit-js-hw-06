/* Створи змінну counterValue, в якій буде
зберігатися поточне значення лічильника та ініціалізуй
її значенням 0. */

/* Додай слухачів кліків до кнопок, всередині
 яких збільшуй або зменшуй значення лічильника. */

/* Оновлюй інтерфейс новим значенням змінної counterValue. */


const counterValue = document.querySelector('#value');
counterValue.textContent = 0;


const decrementBtc = document.querySelector('[data-action="decrement"]');
const incrementBtc = document.querySelector('[data-action="increment"]');

decrementBtc.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
})

incrementBtc.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
})
