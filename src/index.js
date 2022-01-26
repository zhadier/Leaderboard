import './style.css';
import * as util from './modules/add&display';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.querySelector('#submit-button');
const refreshBtn = document.querySelector('#refresh-button');

submitBtn.addEventListener('click', () => {
  util.addToLB({ user: inputName.value, score: inputScore.value });
  inputScore.value = '';
  inputName.value = '';
});

refreshBtn.addEventListener('click', () => {
  util.displayFromLB();
});
window.addEventListener('load', () => {
  util.displayFromLB();
});
