import './style.scss';
import { initNav } from './js-module/nav';
import { initAccordions } from './js-module/acoordions';
import { initSlider } from './js-module/sliders';
import { initButtonAnimation } from './js-module/button-animation';
import { initCurrentYear } from './js-module/current-year';

window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  initNav();
  initAccordions();
  initSlider();
  initButtonAnimation();
  initCurrentYear();
  // DOMContentLoaded

});