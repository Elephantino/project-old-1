


let buttonFill = document.querySelector('.auto-fill__button');
let buttonFit = document.querySelector('.auto-fit__button');
let buttonFlex = document.querySelector('.adaptive-flex__button');

let autoFill = document.querySelector('.auto-fill');
let autoFit = document.querySelector('.auto-fit');
let autoFlex = document.querySelector('.adaptive-flex');

buttonFill.addEventListener('click', function () {
  autoFill.classList.toggle('gridAnimationAuto');
  console.log('123');
});

buttonFit.addEventListener('click', function () {
  autoFit.classList.toggle('gridAnimationAuto');
});
buttonFlex.addEventListener('click', function () {
  autoFlex.classList.toggle('gridAnimationAuto');
});
