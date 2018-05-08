let Snake = require('./Snake.js');
let Target = require('./Target.js');

class Game {
  constructor(context) {
    this.context = context;
    this.snake = new Snake(this.context);
    this.target = new Target();
    this.running = false;
    this.gameOver = false;
    this.score = 0;
  }
  initialize() {
    this.snake.createSnake().draw();
    this.context.fillStyle = 'black';
    this.context.font = '30px serif';
    this.context.fillText("press 'spacebar' to begin", 110, 200);
  }
  detectCollision() {
    if (this.snake.head.x  === this.target.x &&
      this.snake.head.y === this.target.y) {
      this.eatTarget();
      let snakeHitTarget = true;
    }
    if (this.snake.head.x + 20 > 500 || this.snake.head.x < 0 ||
      this.snake.head.y + 20 > 500 || this.snake.head.y < 0) {
      this.endGame()
      let snakeHitWall = true;
    }
    for (let i = 0; i < this.snake.body.length - 2; i++) {
      if (this.snake.head.x === this.snake.body[i].x && 
        this.snake.head.y === this.snake.body[i].y) {
        this.endGame();
        let snakeHitItself = true;
      }
    }
  }
  eatTarget() {
    this.target.x = Math.floor(Math.random() * 25) * 20;
    this.target.y = Math.floor(Math.random() * 25) * 20;
    this.snake.grow();
    this.score += 100;
  }
  endGame() {
    this.running = false;
    this.gameOver = true;
  }
}

module.exports = Game;

