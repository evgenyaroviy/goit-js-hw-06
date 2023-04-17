const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const newList = [];

ingredients.forEach(ingredient => {
const addElement = document.createElement("li")
  addElement.textContent = ingredient;
  addElement.style.listStyle = 'none';
  addElement.style.fontSize = '25px'
newList.push(addElement) 
})

ingredientsEl.append(...newList)
