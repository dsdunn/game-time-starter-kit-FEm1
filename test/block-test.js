const { expect } = require('chai');
const Block = require('../lib/block.js');

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
