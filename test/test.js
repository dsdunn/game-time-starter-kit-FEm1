const { expect } = require('chai');
const Block = require('../lib/block.js');
const Snake = require('../lib/snake.js');
const Target = require('../lib/target.js')

describe('Block', () => {

  let block = new Block();

  it('has a height and width of 20 pixels', () => {
    expect(block.width).to.equal(20);
    expect(block.height).to.equal(20);
  })
})


// describe('Head', () => {
//   let head = new Head();

// })