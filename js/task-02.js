const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {
const ingredientsEl = document.querySelector('#ingredients');
const addElement = document.createElement("li")
addElement.textContent = ingredient;
ingredientsEl.append(addElement)
console.log(ingredientsEl) 
})