const { expect } = require('chai');
const Game = require('../lib/Game.js')
const Block = require('../lib/Block.js');
const Snake = require('../lib/Snake.js');
const Target = require('../lib/Target.js')



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





