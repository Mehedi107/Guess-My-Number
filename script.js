'use strict';

const inputNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const secretNum = document.querySelector('.number');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('.body');
const againBtn = document.querySelector('.again');
let scoreLabel = document.querySelector('.score');

const randNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;

checkBtn.addEventListener('click', () => {
  const num = +inputNum.value;
  if (score > 0) {
    if (num === randNum) {
      message.textContent = `🎉 Correct Number...`;
      body.style.backgroundColor = '#60b347';
      secretNum.textContent = randNum;
      highScore.textContent = score;
    } else {
      if (num > randNum) {
        message.textContent = '📉 Too High...';
        score--;
        scoreLabel.textContent = score;
      } else if (num < randNum) {
        message.textContent = '📈 Too Low...';
        score--;
        scoreLabel.textContent = score;
      }
    }
  } else {
    message.textContent = '🔴 You lost...';
  }
});

againBtn.addEventListener('click', function () {
  secretNum.textContent = '?';
  inputNum.value = '';
  body.style.backgroundColor = '#222';
  scoreLabel.textContent = 20;
  highScore.textContent = 0;
});
