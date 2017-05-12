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

describe('_Math.floor', () => {
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

describe('_Math.max', () => {
  it('Computes the maximum value of array.', function() {
    expect(_Math.max([4, 2, 8, 6])).to.equal(8)
  })

  it('If array is empty or falsey, undefined is returned.', function() {
    expect(_Math.max([])).to.equal(undefined)
  })
})

describe('_Math.mean', () => {
  it('Computes the mean of the values in array.', function() {
    expect(_Math.mean([4, 2, 8, 6])).to.equal(5)
  })
})

describe('_Math.min', () => {
  it('Computes the minimum value of array.', function() {
    expect(_Math.min([4, 2, 8, 6])).to.equal(2)
  })

  it('If array is empty or falsey, undefined is returned.', function() {
    expect(_Math.min([])).to.equal(undefined)
  })
})

describe('_Math.multiply', () => {
  it('Multiplies two numbers.', function() {
    expect(_Math.multiply(6, 4)).to.equal(24)
  })
})

describe('_Math.round', () => {
  it('Computes number rounded to precision.', function() {
    expect(_Math.round(4.006, 2)).to.equal(4.01)
  })

  it('Takes 0 as the default for precision, rounding to the nearest integer.', function() {
    expect(_Math.round(4.006)).to.equal(4)
  })

  it('Takes a negative integer for precision and rounds to a corresponding place.', function() {
    expect(_Math.round(4060, -2)).to.equal(4100)
  })
})

describe('_Math.subtract', () => {
  it('Subtracts two numbers', function() {
    expect(_Math.subtract(6, 4)).to.equal(2)
  })
})
