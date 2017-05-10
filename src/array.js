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
}
