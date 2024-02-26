const itemsWrapper = document.querySelector('.items-wrapper');

const images = [
  './assets/img/01.webp',
  './assets/img/02.webp',
  './assets/img/03.webp',
  './assets/img/04.webp',
  './assets/img/05.webp',
];

for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`;
  console.log(img);
}