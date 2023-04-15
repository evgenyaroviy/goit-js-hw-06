const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


images.forEach(img => {
const galleryEl = document.querySelector('.gallery');
const galleryListEl = document.createElement("li");

galleryEl.style.display = "flex";
galleryEl.style.gap = "10px";

galleryListEl.insertAdjacentHTML('afterbegin', `<img src= "${img.url}" alt="${img.alt}" width = "320", height = "300">`)
galleryListEl.style.listStyle = "none";
galleryEl.append(galleryListEl)
console.log(galleryEl) 
})