import {expect} from 'chai'
import _Math from '../src/math.js'

describe.only('_Math.add', () => {
  it('Adds two numbers.', function() {
    expect(_Math.add(6, 4)).to.equal(10)
  })
})
