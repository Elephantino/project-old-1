import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper();







let svgBoxOne = document.querySelector(".svgBoxOne");

svgBoxOne.addEventListener('click', function () {
  svgBoxOne.classList.toggle('svgAnimOne');
});


let svgBoxTwo = document.querySelector(".svgBoxTwo");

svgBoxTwo.addEventListener('click', function () {
  svgBoxTwo.classList.toggle('svgAnimTwo');
});


let svgBoxThree = document.querySelector(".svgBoxThree");

svgBoxThree.addEventListener('click', function () {
  svgBoxThree.classList.toggle('svgAnimThree');
});



let svgBoxFour = document.querySelector(".svgBoxFour");

svgBoxFour.addEventListener('click', function () {
  svgBoxFour.classList.toggle('svgAnimFour');
});









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
