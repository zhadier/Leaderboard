export default class Collection {
  constructor(scoreList = []) {
    this.scoreList = scoreList;
  }

  add(data) {
    const txt = document.querySelector('form > p');
    if (data.score === '' || data.name === '') {
      txt.innerHTML = 'Please fill out all the fields';
      setTimeout(() => {
        txt.innerHTML = '';
      }, 1500);
      return;
    }
    this.scoreList.push(data);
    this.display(data);
    this.populateStorage();

    setTimeout(() => {
      txt.innerHTML = '';
    }, 1500);
  }

  display(data) {
    const scoreListSection = document.querySelector('.scores');
    if (this) {
      const div = document.createElement('div');
      div.className = 'score-wrapper';
      div.innerHTML = `<h3>${data.name}: </h3>
                    <h3>${data.score}</h3>`;
      scoreListSection.appendChild(div);
    }
  }

  populateStorage() {
    localStorage.setItem(
      'Scores',
      JSON.stringify({
        scoreList: this.scoreList,
      }),
    );
  }
}
