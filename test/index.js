const { expect } = require('chai');
const Game = require('../lib/game.js')
const Block = require('../lib/block.js');
const Snake = require('../lib/snake.js');
const Target = require('../lib/target.js')

describe('Block', () => {

  let block = new Block(55, 65);

  it('has a height and width of 20 pixels', () => {
    expect(block.width).to.equal(20);
    expect(block.height).to.equal(20);
  })

  it('takes x and y coordinates', () => {
    expect(block.x).to.equal(55);
    expect(block.y).to.equal(65);
  })
})

describe('Target', () => {
  const target = new Target();
  const target1 = new Target();

  it('should extend Block', () => {
    expect(target).to.be.an.instanceof(Block);
  })

  it('should generate random x and y coordinates', () => {
    expect(target.x).to.not.equal(target1.x);
    expect(target.y).to.not.equal(target1.y);
  })
})

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

  it('should be able to grow', () => {
    const initialBodyLength = snake.body.length;
    snake.grow();
    expect(snake.body.length).to.equal(initialBodyLength + 1);
  })
})

describe('Game', () => {
  const game = new Game();

  it('should instantiate a new game, snake, and target', () => {
    expect(game).to.be.an.instanceof(Game);
    expect(game.snake).to.be.an.instanceof(Snake);
    expect(game.target).to.be.an.instanceof(Target);
  })

  it('should detect when snake collides', () => {
    game.snake.createSnake();
    game.snake.move();
    game.collisionDetection();
    expect(game.score).to.equal(0);
    game.snake.head.x = game.target.x;
    game.snake.head.y = game.target.y;
    game.collisionDetection();
    expect(game.score).to.equal(100);
  })

})

