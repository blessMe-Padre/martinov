import './style.scss';
import { initNav } from './js-module/nav';
import { initAccordions } from './js-module/acoordions';

window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  initNav();
  initAccordions();
  // DOMContentLoaded
});