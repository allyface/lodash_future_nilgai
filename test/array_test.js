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
