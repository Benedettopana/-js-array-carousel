const itemsWrapper = document.querySelector('.items-wrapper');
// Creo le chevron
const topArrow = document.querySelector('.top');
const botArrow = document.querySelector('.bot');

topArrow.classList.add('hide');

const images = [
  './assets/img/01.webp',
  './assets/img/02.webp',
  './assets/img/03.webp',
  './assets/img/04.webp',
  './assets/img/05.webp',
];
// CONTATORE IMG
let counterImg = 0;

for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`;
  console.log(img);
}

// Prendo tutti gli elementi con la classe img
const itemsCollecion = document.getElementsByClassName('img');
itemsCollecion[counterImg].classList.remove('hide');

topArrow.addEventListener('click',function(){
  botArrow.classList.remove('hide');

  itemsCollecion[counterImg].classList.add('hide');
  // itemsCollecion[counterImg--].classList.add('hide');
  counterImg--;
  itemsCollecion[counterImg].classList.remove('hide');
  if(counterImg === 0){
    topArrow.classList.add('hide');
  }
});

botArrow.addEventListener('click',function(){
  topArrow.classList.remove('hide');

  itemsCollecion[counterImg++].classList.add('hide');

  itemsCollecion[counterImg].classList.remove('hide');

  if(counterImg === images.length-1){
    botArrow.classList.add('hide');
  }
});