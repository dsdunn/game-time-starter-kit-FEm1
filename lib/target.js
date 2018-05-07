let Block = require('./Block.js');

class Target extends Block {
  constructor(x, y, color, width, height) {
    super(width, height);
    this.x = Math.floor(Math.random() * 25) * 20;
    this.y = Math.floor(Math.random() * 25) * 20;
    this.color = 'red';
  }
}

module.exports = Target;