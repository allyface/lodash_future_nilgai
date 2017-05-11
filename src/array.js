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
//_.pull(array), removes all given values from array
// static pull(array, values) {
//

  //_.join(), Converts elements in array into a string seperated by seperator
  static join(array, seperator='~') {
    let result = ''
    for (let i = 0; i < array.length - 1; i++) {
      result = result + array[i] + seperator

    }
    result = result + array[array.length - 1]
    return result
  }
}
