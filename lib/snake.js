let Block = require('./block.js');

class Snake {
  constructor(context) {
    this.body = [];
    this.context = context;
    this.direction = 'right';
    this.head = null;
  }
  createSnake() {
    for (let x = 40; x < 140; x += 20) {
      var block = new Block(x, 40);

      this.body.push(block);
    }
    return this; 
  }
  move() {
    let tail = this.body.shift();

    this.head = this.body[this.body.length - 1];
    
    if (this.direction === 'down') {
      tail.x = this.head.x;
      tail.y = this.head.y + 20;
    } else if (this.direction === 'up') {
      tail.x = this.head.x;
      tail.y = this.head.y - 20;
    } else if (this.direction === 'right') {
      tail.x = this.head.x + 20;
      tail.y = this.head.y;
    } else if (this.direction === 'left') {
      tail.x = this.head.x - 20;
      tail.y = this.head.y;
    }
    this.body.push(tail);
    this.head = this.body[this.body.length - 1];
    return this;
  }
  grow() {
    let oldTail = this.body[0];
    let x;
    let y;

    if (this.direction === 'down') {
      x = oldTail.x;
      y = oldTail.y - 20;
    } else if (this.direction === 'up') {
      x = oldTail.x;
      y = oldTail.y + 20;
    } else if (this.direction === 'right') {
      x = oldTail.x - 20;
      y = oldTail.y;
    } else if (this.direction === 'left') {
      x = oldTail.x + 20;
      y = oldTail.y;
    }
    let newTail = new Block(x, y);
    
    this.body.unshift(newTail);
    return this;
  }
  draw() {
    this.body.forEach((block) => block.draw(this.context))
  }
}

module.exports = Snake;