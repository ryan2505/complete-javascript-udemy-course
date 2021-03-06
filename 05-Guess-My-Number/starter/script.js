'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  function changeHtml(selectorName, message) {
    document.querySelector(selectorName).textContent = message;
  }

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    changeHtml('.message', '⛔ No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    changeHtml('.message', '🎉Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    changeHtml('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //check highscore

    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highscore').textContent = highScore;
      changeHtml('.highscore', highScore);
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    // if score gets to one the player loses, if score is too high/low
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      changeHtml(
        '.message',
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      // document.querySelector('.score').textContent = score;
      changeHtml('.score', score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      changeHtml('.message', '💥 You lost the game!');
      // document.querySelector('.score').textContent = 0;
      changeHtml('.score', 0);
    }
  }
  // //when guess is too High
  // else if (guess > secretNumber) {
  //   // if score gets to one the player loses, if score is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // if score gets to one the player loses, if score is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  //restore message to default
  document.querySelector('.message').textContent = 'Start guessing...';
  //restore score
  score = 20;
  //restore secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //restore input field to blank
  document.querySelector('.guess').value = '';
  // restore css to default
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
