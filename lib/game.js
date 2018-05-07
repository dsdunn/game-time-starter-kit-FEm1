let Snake = require('./snake.js');
let Target = require('./target.js');

class Game {
  constructor(context) {
    this.context = context;
    this.snake = new Snake(this.context);
    this.target = new Target();
    this.gameOn = false;
    this.gameOver = false;
    this.score = 0;
  }
  initialize() {
    this.snake.createSnake().draw();
    this.context.fillStyle = 'black';
    this.context.font = '30px serif';
    this.context.fillText("press 'spacebar' to begin", 110, 200);
  }
  collisionDetection() {
    if (this.snake.head.x  === this.target.x &&
      this.snake.head.y === this.target.y) {
      this.eatTarget();
    }
    if (this.snake.head.x + 20 > 500 || this.snake.head.x < 0 ||
      this.snake.head.y + 20 > 500 || this.snake.head.y < 0) {
      this.endGame()
    }
    for (let i = 0; i < this.snake.body.length - 2; i++) {
      if (this.snake.head.x === this.snake.body[i].x && 
        this.snake.head.y === this.snake.body[i].y) {
        this.endGame();
      }
    }
  }
  eatTarget() {
    this.target.x = Math.floor(Math.random() * 25) * 20;
    this.target.y = Math.floor(Math.random() * 25) * 20;
    this.snake.grow();
    this.snake.grow();
    this.score += 100;
    // document.getElementById('score').innerText = this.score;
  }
    
  endGame() {
    this.gameOn = false;
    this.gameOver = true;
    this.score = 0;
    this.context.clearRect(100, 60, 300, 100)
    this.context.fillStyle = 'black';
    this.context.font = '45px serif'
    this.context.fillText('Game Over', 140, 100);
    this.context.font = '30px serif';
    this.context.fillText("press 'spacebar' to reset", 110, 150);
  }
}

module.exports = Game;

