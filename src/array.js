export default class LodashArray {

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
}
