class Block {
  constructor(x, y, color = 'green', width = 20, height = 20) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
}

module.exports = Block;