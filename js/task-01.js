const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

// Вивести заголовок кожного li
//Порахувати кількість елементів в цьому li

categoriesList.forEach(category => {
    const categoriesName = category.querySelector('h2').textContent;
    const categoriesNameList = category.querySelectorAll('li').length;
    console.log(`Category: ${categoriesName}`)
    console.log(`Elements: ${categoriesNameList}`)
})

