import {expect} from 'chai'
import _Math from '../src/math.js'

describe('_Math.add', () => {
  it('Adds two numbers.', function() {
    expect(_Math.add(6, 4)).to.equal(10)
  })
})

describe('_Math.ceil', () => {
  it('Computes number rounded up to precision.', function() {
    expect(_Math.ceil(6.004, 2)).to.equal(6.01)
  })

  it('Takes 0 as the default for precision, rounding up to the nearest integer.', function() {
    expect(_Math.ceil(4.006)).to.equal(5)
  })

  it('Takes a negative integer for precision and rounds to corresponding place.', function() {
    expect(_Math.ceil(6040, -2)).to.equal(6100)
  })
})

describe('_Math.divide', () => {
  it('Divides two numbers.', function() {
    expect(_Math.divide(6, 4)).to.equal(1.5)
  })
})

describe.only('_Math.floor', () => {
  it('Computes number rounded down to precision.', function() {
    expect(_Math.floor(0.046, 2)).to.equal(0.04)
  })

  it('Takes 0 as the default for precision, rounding down to the nearest integer.', function() {
    expect(_Math.floor(4.006)).to.equal(4)
  })

  it('Takes a negative integer for precision and rounds to a corresponding place.', function() {
    expect(_Math.floor(4060, -2)).to.equal(4000)
  })
})
