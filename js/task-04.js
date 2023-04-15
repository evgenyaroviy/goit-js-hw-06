/* Створи змінну counterValue, в якій буде
зберігатися поточне значення лічильника та ініціалізуй
її значенням 0. */

/* Додай слухачів кліків до кнопок, всередині
 яких збільшуй або зменшуй значення лічильника. */

/* Оновлюй інтерфейс новим значенням змінної counterValue. */


const counterValue = document.querySelector('#value');
console.log(counterValue)

const decrementBtc = document.querySelector('[data-action="decrement"]');
console.log(decrementBtc)
decrementBtc.addEventListener('click', () => {
    console.log("Button was clicked");
})

const incrementBtc = document.querySelector('[data-action="increment"]');
console.log(incrementBtc)
incrementBtc.addEventListener('click', () => {
  console.log("Button was clicked");
})
