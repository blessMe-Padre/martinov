import './style.scss';
import { initNav } from './js-module/nav';

window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  initNav();
  // DOMContentLoaded
});