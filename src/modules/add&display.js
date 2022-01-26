import * as api from './consumeAPI';

const addToLB = (data) => {
  const txt = document.querySelector('form > p');
  if (data.score === '' || data.name === '') {
    txt.innerHTML = 'Please fill out all the fields';
    setTimeout(() => {
      txt.innerHTML = '';
    }, 1500);
    return;
  }
  api.setData(data.user, data.score).then((recieved) => (txt.innerHTML = recieved.result));
  setTimeout(() => {
    txt.innerHTML = '';
  }, 1700);
};

const displayFromLB = () => {
  const scoreListSection = document.querySelector('.scores');
  scoreListSection.innerHTML = '';
  api.getData().then((dataList) => {
    if (!dataList) {
      return;
    }
    const arrangedList = dataList.result.sort((a, b) => b.score - a.score);
    arrangedList?.forEach((data) => {
      const div = document.createElement('div');
      div.className = 'score-wrapper';
      div.innerHTML = `<h3>${data.user}: </h3>
                    <h3>${data.score}</h3>`;
      scoreListSection.appendChild(div);
    });
  });
};

export { addToLB, displayFromLB };
