const categoriesList = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesList.length}`);
console.log('');

// Вивести заголовок кожного li
//Порахувати кількість елементів в цьому li

const titleQuantity = categoriesList.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.querySelector('ul').children.length)
    console.log('');
})

