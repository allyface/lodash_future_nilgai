import {expect} from 'chai'
import MathClass from '../src/math.js'

describe('MathClass.add', () => {
  it('Adds two numbers.', function() {
    expect(MathClass.add(6, 4)).to.equal(10)
  })
})

describe('MathClass.ceil', () => {
  it('Computes number rounded up to precision.', function() {
    expect(MathClass.ceil(6.004, 2)).to.equal(6.01)
  })

  it('Takes 0 as the default for precision, rounding up to the nearest integer.', function() {
    expect(MathClass.ceil(4.006)).to.equal(5)
  })

  it('Takes a negative integer for precision and rounds to corresponding place.', function() {
    expect(MathClass.ceil(6040, -2)).to.equal(6100)
  })
})

describe('MathClass.divide', () => {
  it('Divides two numbers.', function() {
    expect(MathClass.divide(6, 4)).to.equal(1.5)
  })
})

describe('MathClass.floor', () => {
  it('Computes number rounded down to precision.', function() {
    expect(MathClass.floor(0.046, 2)).to.equal(0.04)
  })

  it('Takes 0 as the default for precision, rounding down to the nearest integer.', function() {
    expect(MathClass.floor(4.006)).to.equal(4)
  })

  it('Takes a negative integer for precision and rounds to a corresponding place.', function() {
    expect(MathClass.floor(4060, -2)).to.equal(4000)
  })
})

describe('MathClass.max', () => {
  it('Computes the maximum value of array.', function() {
    expect(MathClass.max([4, 2, 8, 6])).to.equal(8)
  })

  it('If array is empty or falsey, undefined is returned.', function() {
    expect(MathClass.max([])).to.equal(undefined)
  })
})

describe('MathClass.mean', () => {
  it('Computes the mean of the values in array.', function() {
    expect(MathClass.mean([4, 2, 8, 6])).to.equal(5)
  })
})

describe('MathClass.min', () => {
  it('Computes the minimum value of array.', function() {
    expect(MathClass.min([4, 2, 8, 6])).to.equal(2)
  })

  it('If array is empty or falsey, undefined is returned.', function() {
    expect(MathClass.min([])).to.equal(undefined)
  })
})

describe('MathClass.multiply', () => {
  it('Multiplies two numbers.', function() {
    expect(MathClass.multiply(6, 4)).to.equal(24)
  })
})

describe('MathClass.round', () => {
  it('Computes number rounded to precision.', function() {
    expect(MathClass.round(4.006, 2)).to.equal(4.01)
  })

  it('Takes 0 as the default for precision, rounding to the nearest integer.', function() {
    expect(MathClass.round(4.006)).to.equal(4)
  })

  it('Takes a negative integer for precision and rounds to a corresponding place.', function() {
    expect(MathClass.round(4060, -2)).to.equal(4100)
  })
})

describe('MathClass.subtract', () => {
  it('Subtracts two numbers', function() {
    expect(MathClass.subtract(6, 4)).to.equal(2)
  })
})

describe.only('MathClass.sum', () => {
  it('Computes the sum of the values in array', function() {
    expect(MathClass.sum([4, 2, 8, 6])).to.equal(20)
  })
})
