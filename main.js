import './style.scss';
import { initNav } from './js-module/nav';
import { initAccordions } from './js-module/acoordions';
import { initSlider } from './js-module/sliders';

window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  initNav();
  initAccordions();
  initSlider();
  // DOMContentLoaded

});