let Game = require('./Game.js');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(context);

game.initialize();

document.addEventListener('keydown', keyHandler);

function keyHandler(e) {
  e.preventDefault();  
  const direction = game.snake.direction;

  switch (e.keyCode) {
  case 38:
    if (direction !== 'down') {
      game.snake.direction = 'up';
    }
    break;
  case 40:
    if (direction !== 'up') {
      game.snake.direction = 'down'; 
    }
    break;
  case 39:
    if (direction !== 'left') {
      game.snake.direction = 'right';
    }
    break;
  case 37:
    if (direction !== 'right') {
      game.snake.direction = 'left';
    }
    break;
  case 32:
    if (!game.gameOver) {
      game.gameOn = !game.gameOn;
      gameLoop();
    } else {
      context.clearRect(0, 0, 500, 500)
      document.getElementById('score').innerText = 0;
      game = new Game(context);
      game.initialize()
    } 
    break;
  }
}

function gameLoop () {
  if (game.gameOn) {
    window.setTimeout(() => {     
      game.context.clearRect(0, 0, 500, 500)
      game.target.draw(context);
      game.snake.move().draw();
      game.collisionDetection();
      updateScore();
      window.requestAnimationFrame(gameLoop);
    }, 80);
  }
}

function updateScore() {
  if (!game.gameOver) { 
    document.getElementById('score').innerText = game.score;
  }
}
