import {expect} from 'chai'
import ArrayClass from '../src/array.js'

describe('ArrayClass.chunk', () => {
  it('Creates an array of elements split into groups the length of size', function() {
    expect(ArrayClass.chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
  })

  it('If array can\'t be split evenly, the final chunk will be the remaining elements.', function() {
    expect(ArrayClass.chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']])
  })
})

describe('ArrayClass.compact', () => {
  it('Creates an array with all falsey values removed.', function() {
    expect(ArrayClass.compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3])
  })
})

describe('ArrayClass.drop', () => {
  it('Creates a slice of array with n elements dropped from the beginning.', function() {
    expect(ArrayClass.drop([1, 2, 3], 2)).to.deep.equal([3])
  })

  it('Takes 1 as the default value for n', function() {
    expect(ArrayClass.drop([1, 2, 3])).to.deep.equal([2, 3])
  })

  it('Returns an empty array when n is greater than the length of array.', function() {
    expect(ArrayClass.drop([1, 2, 3], 5)).to.deep.equal([])
  })

  it('Returns the full array when n is 0.', function() {
    expect(ArrayClass.drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
  })
})

describe('ArrayClass.dropRight', () => {
  it('Creates a slice of array with n elements dropped from the end.', function() {
    expect(ArrayClass.dropRight([1, 2, 3], 2)).to.deep.equal([1])
  })

  it('Takes 1 as the default value for n.', function() {
    expect(ArrayClass.dropRight([1, 2, 3])).to.deep.equal([1, 2])
  })

  it('Returns an empty array when n is greater than the length of array.', function() {
    expect(ArrayClass.dropRight([1, 2, 3], 5)).to.deep.equal([])
  })

  it('Returns the full array when n is 0.', function() {
    expect(ArrayClass.dropRight([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
  })
})

describe('ArrayClass.head', () => {
  it('Gets the first element of array.', function() {
    expect(ArrayClass.head([1, 2, 3])).to.equal(1)
  })

  it('Returns undefined if array is empty.', function() {
    expect(ArrayClass.head([])).to.equal(undefined)
  })
})

describe('ArrayClass.join', () => {
  it('Converts all elements in array into a string seperated by seperator', function() {
    expect(ArrayClass.join(['a', 'b', 'c'], '~')).to.equal('a~b~c')
  })
})

describe('ArrayClass.last', () => {
  it('Gets the last element of an array.', function() {
    expect(ArrayClass.last([1, 2, 3])).to.deep.equal(3)
  })
})

describe('ArrayClass.concat', () => {
  it('Creates a new array concatenating array with any additional arrays and/or values.', function() {
    let array = [1]
    expect(ArrayClass.concat(array, 2, [3], [[4]])).to.deep.equal([1, 2, 3, [4]])
  })
})

describe('ArrayClass.flatten', () => {
  it('Flattens array a single level deep.', function() {
    expect(ArrayClass.flatten([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, [3, [4]], 5])
  })
})

describe('ArrayClass.flattenDeep', () => {
  it('Recursively flattens array.', function() {
    expect(ArrayClass.flattenDeep([1, [2, [3, [4]], 5]])).to.deep.equal([1, 2, 3, 4, 5])
  })
})

describe('ArrayClass.initial', () => {
  it('Gets all but the last element of array', function() {
    expect(ArrayClass.initial([1, 2, 3])).to.deep.equal([1, 2])
  })
})

describe('ArrayClass.nth', () => {
  let array = ['a', 'b', 'c', 'd']

  it('Gets the element at index n of array', function() {
    expect(ArrayClass.nth(array, 1)).to.equal('b')
  })

  it('If n is negative, the nth element from the end is returned', function() {
    expect(ArrayClass.nth(array, -2)).to.equal('c')
  })
})

describe('ArrayClass.tail', () => {
  it('Gets all but the first element of array', function() {
    expect(ArrayClass.tail([1, 2, 3])).to.deep.equal([2, 3])
  })
})

describe('ArrayClass.take', () => {
  it('Creates a slice of array with n elements taken from the beginning', function() {
    expect(ArrayClass.take([1, 2, 3], 2)).to.deep.equal([1, 2])
  })

  it('Takes 1 as the default value for n', function() {
    expect(ArrayClass.take([1, 2, 3])).to.deep.equal([1])
  })

  it('Returns the entire array when n is greater than array length', function() {
    expect(ArrayClass.take([1, 2, 3], 5)).to.deep.equal([1, 2, 3])
  })

  it('Returns an empty array when n is equal to 0', function() {
    expect(ArrayClass.take([1, 2, 3], 0)).to.deep.equal([])
  })
})

describe('ArrayClass.takeRight', () => {
  it('Creates a slice of array with n elements taken from the end', function() {
    expect(ArrayClass.takeRight([1, 2, 3], 2)).to.deep.equal([2, 3])
  })

  it('Takes 1 as the default value for n', function() {
    expect(ArrayClass.takeRight([1, 2, 3])).to.deep.equal([3])
  })

  it('Returns the entire array when n is greater than array length', function() {
    expect(ArrayClass.takeRight([1, 2, 3], 5)).to.deep.equal([1, 2, 3])
  })

  it('Returns an empty array when n is equal to 0', function() {
    expect(ArrayClass.takeRight([1, 2, 3], 0)).to.deep.equal([])
  })
})
