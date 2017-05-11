import {expect} from 'chai'
import _Array from '../src/array.js'

describe('_Array.chunk', () => {
  it('Creates an array of elements split into groups the length of size', function() {
    expect(_Array.chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
  })

  it('If array can\'t be split evenly, the final chunk will be the remaining elements.', function() {
    expect(_Array.chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']])
  })
})

describe('_Array.compact', () => {
  it('Creates an array with all falsey values removed.', function() {
    expect(_Array.compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
  })
})

describe('_Array.drop', () => {
  it('Creates a slice of array with n elements dropped from the beginning.', function() {
    expect(_Array.drop([1, 2, 3], 2)).to.deep.equal([3])
  })

  it('Takes 1 as the default value for n', function() {
    expect(_Array.drop([1, 2, 3])).to.deep.equal([2, 3])
  })

  it('Returns an empty array when n is greater than the length of array.', function() {
    expect(_Array.drop([1, 2, 3], 5)).to.deep.equal([])
  })

  it('Returns the full array when n is 0.', function() {
    expect(_Array.drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
  })
})

describe('_Array.dropRight', () => {
  it('Creates a slice of array with n elements dropped from the end.', function() {
    expect(_Array.dropRight([1, 2, 3], 2)).to.deep.equal([1])
  })

  it('Takes 1 as the default value for n.', function() {
    expect(_Array.dropRight([1, 2, 3])).to.deep.equal([1, 2])
  })

  it('Returns an empty array when n is greater than the length of array.', function() {
    expect(_Array.dropRight([1, 2, 3], 5)).to.deep.equal([])
  })

  it('Returns the full array when n is 0.', function() {
    expect(_Array.dropRight([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
  })
})

describe('_Array.head', () => {
  it('Gets the first element of array.', function() {
    expect(_Array.head([1, 2, 3])).to.equal(1)
  })

  it('Returns undefined if array is empty.', function() {
    expect(_Array.head([])).to.equal(undefined)
  })
})
