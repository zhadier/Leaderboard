import './style.css';
import Collection from './modules/collection.js';
import User from './modules/user.js';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.querySelector('#submit-button');

const coll = new Collection();
if (localStorage.getItem('Scores')) {
  const localBooks = JSON.parse(localStorage.getItem('Scores'));
  localBooks.scoreList.forEach((element) => {
    coll.add(new User(element.name, element.score));
  });
}

submitBtn.addEventListener('click', () => {
  coll.add(new User(inputName.value, inputScore.value));
  inputScore.value = '';
  inputName.value = '';
});
