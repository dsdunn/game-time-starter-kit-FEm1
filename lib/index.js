let Game = require('./Game.js');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let session = new Game(context);

displayHighScore();
session.initialize();

document.addEventListener('keydown', keyHandler);

function keyHandler(e) {
  e.preventDefault();  
  const direction = session.snake.direction;
  
  switch (e.keyCode) {
  case 38:
    if (direction !== 'down') {
      session.snake.direction = 'up';
    }
    break;
  case 40:
    if (direction !== 'up') {
      session.snake.direction = 'down'; 
    }
    break;
  case 39:
    if (direction !== 'left') {
      session.snake.direction = 'right';
    }
    break;
  case 37:
    if (direction !== 'right') {
      session.snake.direction = 'left';
    }
    break;
  case 32:
    if (!session.gameOver) {
      session.running = !session.running;
      gameLoop();
    } else {
      context.clearRect(0, 0, 500, 500)
      document.getElementById('score').innerText = 0;
      displayHighScore();
      session = new Game(context);
      session.initialize()
    } 
    break;
  }
}

function gameLoop () {
  if (session.running) {
    window.setTimeout(() => {     
      session.context.clearRect(0, 0, 500, 500)
      session.target.draw(context);
      session.snake.move().draw();
      session.detectCollision();
      updateScore();
      window.requestAnimationFrame(gameLoop);
    }, 80);
  }
}

function updateScore() {
  if (!session.gameOver) { 
    document.getElementById('score').innerText = session.score;
  }
}

function displayHighScore() {
  let displayList = document.querySelectorAll('.score');
  let scoreList = JSON.parse(localStorage.getItem('highScoreArray'));
  if (!scoreList) {
    scoreList = [0, 0, 0, 0, 0];
  }
  scoreList.push(session.score);
  scoreList.sort((a, b) => b - a)
  if (scoreList.length > 5) {
    scoreList.pop()
  }
  displayList.forEach((score, i) => {
    score.innerText = scoreList[i] 
  })
  let stringifiedScoreList = JSON.stringify(scoreList);
  localStorage.setItem('highScoreArray', stringifiedScoreList);
}


