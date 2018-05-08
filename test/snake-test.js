const { expect } = require('chai');
const Snake = require('../lib/Snake.js');
const Target = require('../lib/Target.js');
const Game = require('../lib/Game.js');

describe('Snake', () => {
  const game = new Game();
  const snake = game.snake;

  it('should instantiate Snake', () => {
    expect(snake).to.be.an.instanceof(Snake);
  })

  it('should have a body', () => {
    expect(snake.body).to.deep.equal([]);
  })

  it('should have a default direction of "right"', () => {
    expect(snake.direction).to.equal('right');
  })

  it('should fill its body with segments', () => {
    snake.createSnake();
    expect(game.snake.body.length).to.equal(5);
  })

  it('should be able to move', () => {
    const initialHeadPosition = snake.body[4];
    snake.move();
    expect(snake.body[4].x).to.equal(initialHeadPosition.x + 20);
  })

  it('should be able to change direction', () => {
    const initialHeadPosition = snake.body[4];
    snake.direction = 'up';
    snake.move();
    expect(snake.body[4].y).to.equal(initialHeadPosition.y - 20);
  })

  it('should grow when it eats target', () => {
    const initialBodyLength = snake.body.length;
    game.eatTarget();
    expect(snake.body.length).to.equal(initialBodyLength + 1);
  })
})