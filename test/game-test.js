const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Snake = require('../lib/Snake.js'); 
const Target = require('../lib/Target.js');

describe('Game', () => {
  const game = new Game();

  it('should instantiate a new game, snake, and target', () => {
    expect(game).to.be.an.instanceof(Game);
    expect(game.snake).to.be.an.instanceof(Snake);
    expect(game.target).to.be.an.instanceof(Target);
  })

  it('should have a default properties', () => {
    expect(game.running).to.equal(false);
    expect(game.gameOver).to.equal(false);
    expect(game.score).to.equal(0);
  })

  it('should detect when snake collides', () => {
    game.snake.createSnake();
    game.snake.move();
    game.detectCollision();
    expect(game.score).to.equal(0);
    game.snake.head.x = game.target.x;
    game.snake.head.y = game.target.y;
    game.detectCollision();
    expect(game.score).to.equal(100);
  })

  it('should end when the snake hits the wall or itself', () => {
    game.snake.createSnake();
    game.snake.head.x = 500;
    game.detectCollision();
    expect(game.gameOver).to.equal(true);
    game.gameOver = false;
    game.snake.head.x = game.snake.body[2].x;
    game.detectCollision();
    expect(game.gameOver).to.equal(true);
  })
})

