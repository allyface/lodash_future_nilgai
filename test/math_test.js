import {expect} from 'chai'
import _Math from '../src/math.js'

describe('_Math.add', () => {
  it('Adds two numbers.', function() {
    expect(_Math.add(6, 4)).to.equal(10)
  })
})

describe.only('_Math.ceil', () => {
  it('Computes number rounded up to precision.', function() {
    expect(_Math.ceil(6.004, 2)).to.equal(6.01)
  })

  it('Takes 0 as the default for precision, rounding up to the nearest integer.', function() {
    expect(_Math.ceil(4.006)).to.equal(5)
  })

  it('Takes a negative integer and rounds to corresponding place.', function() {
    expect(_Math.ceil(6040, -2)).to.equal(6100)
  })
})
