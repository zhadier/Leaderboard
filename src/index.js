import './style.css';
import * as util from './modules/add&display';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.querySelector('#submit-button');
const refreshBtn = document.querySelector('#refresh-button');
const logo = document.querySelector('header a');
const getMessage = document.querySelector('.add-score__heading');
const body = document.querySelector('body');
let i = 0;

submitBtn.addEventListener('click', () => {
  util.addToLB({ user: inputName.value, score: inputScore.value });
  inputScore.value = '';
  inputName.value = '';
  inputName.focus();
});

refreshBtn.addEventListener('click', () => {
  util.displayFromLB();
});
window.addEventListener('load', () => {
  util.displayFromLB();
});

logo.addEventListener('click', () => {
  body.classList.toggle(`b${i}`);
  i += 1;
  if (i > 5) {
    i = 0;
  }
  body.classList.toggle(`b${i}`);
});

getMessage.addEventListener('click', () => {
  util.popUp();
});
