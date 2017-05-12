export default class _Array {

  // _.chunk(array, [size=1]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  static chunk(array, size=1) {
    let chunkedArray = []
    for (let i = 0; i < array.length; i++) {
      while (array.length >= size) {
        chunkedArray.push(array.splice(0, size))
      }
      if (array.length > 0) {
        chunkedArray.push(array.splice(0))
      }
    }
    return chunkedArray
  }

  // _.compact(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  static compact(array) {
    let compactArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        compactArray.push(array[i])
      }
    }
    return compactArray
  }

  // _.drop(array, [n=1]): Creates a slice of array with n elements dropped from the beginning.
  static drop(array, n=1) {
    array.splice(0, n)
    return array
  }

  // _.dropRight(array, [n=1]): Creates a slice of array with n elements dropped from the end.
  static dropRight(array, n=1) {
    array.splice(-n, n)
    return array
  }

  // _.head(array): Gets the first element of array.
  static head(array) {
    return array[0]
  }

  //_.join(array, [separator=',']): Converts all elements in array into a string separated by separator.
  static join(array, separator='~') {
    let result = ''
    for (let i = 0; i < array.length - 1; i++) {
      result = result + array[i] + separator
    }
    result = result + array[array.length - 1]
    return result
  }

  // _.last(array): Gets the last element of array.
  static last(array) {
    return array.pop()
  }

  // _.concat(array, [values]): Creates a new array concatenating array with any additional arrays and/or values.
  static concat(array, values) {
    values = Array.from(arguments)
    values = Array.prototype.concat(...values)
    return values
  }

  // _.flatten(array): Flattens array a single level deep.
  static flatten(array) {
    return Array.prototype.concat(...array)
  }

  // _.flattenDeep(array): Recursively flattens array.
  static flattenDeep(array) {
    return array.reduce(function(flattenedArr, nestedArr) {
      return flattenedArr.concat(
        Array.isArray(nestedArr)
          ? _Array.flattenDeep(nestedArr)
          : nestedArr
      )
    }, [])
  }

  // _.initial(array): Gets all but the last element of array.
  static initial(array) {
    array.pop()
    return array
  }

  // _.nth(array, [n=0]): Gets the element at index n of array. If n is negative, the nth element from the end is returned.
  static nth(array, n) {
    if(Math.sign(n) === -1) {
      return array[array.length + n]
    } else {
      return array[n]
    }
  }

  // _.tail(array): Gets all but the first element of array.
  static tail(array) {
    array.shift()
    return array
  }

  // _.take(array, [n=1]): Creates a slice of array with n elements taken from the beginning.
  static take(array, n = 1) {
    return array.slice(0, n)
  }
}
