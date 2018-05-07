let Block = require('./block.js');
let Snake = require('./snake.js');
let Target = require('./target.js');

class Game {
  constructor(context) {
    this.gameLoop = this.gameLoop.bind(this);
    this.block = new Block(100, 100);
    this.context = context;
    this.snake = new Snake(this.context);
    this.target = new Target();
    this.gameOn = false;
    this.animation;
    this.gameOver = false;
    this.score = 0;
  }
  initialize(){
    this.snake.createSnake();
    this.context.fillStyle = 'black';
    this.context.font = '30px serif';
    this.context.fillText("press 'spacebar' to begin", 110, 200);
  }
  targetDetection() {
      if (this.snake.head.x  === this.target.x &&
          this.snake.head.y === this.target.y){
          this.eatTarget();
       }
      if (this.snake.head.x + 10 > 500 || this.snake.head.x < 0 ||
        this.snake.head.y + 10 > 500 || this.snake.head.y < 0) {
        this.endGame()
      }
      for (let i = 0; i < this.snake.body.length -2; i++) {
        if (this.snake.head.x === this.snake.body[i].x && this.snake.head.y === this.snake.body[i].y) {
          this.endGame();
        }
      }
    }
    eatTarget() {
      this.target.x = Math.floor(Math.random() * 25) * 20;
      this.target.y = Math.floor(Math.random() * 25) * 20;
      this.snake.growSnake();
      this.snake.growSnake();
      this.score += 100;
      document.getElementById('score').innerText = this.score;
    }
    gameLoop () {
      if (this.gameOn) {
        this.animation = window.setTimeout(() => {     
        this.context.clearRect(0, 0, 500, 500)
        this.target.draw(this.context);
        this.snake.moveSnake();
        this.targetDetection();
        window.requestAnimationFrame(this.gameLoop);
      }, 80);
    }
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

