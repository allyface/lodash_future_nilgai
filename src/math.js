export default class MathClass {

  // _.add(augend, addend): Adds two numbers
  static add(augend, addend) {
    return augend + addend
  }

  // _.ceil(number, [precision=0]): Computes number rounded up to precision.
  static ceil(number, precision=0) {
    number *= (10 ** precision)
    let roundedDecimal = Math.ceil(number)
    roundedDecimal /= (10 ** precision)
    return roundedDecimal
  }

  // _.divide(dividend, divisor): Divides two numbers.
  static divide(dividend, divisor) {
    return dividend/divisor

  }

  // _.floor(number, [precision=0]): Computes number rounded down to precision.
  static floor(number, precision=0) {
    number *= (10**precision)
    let roundedDecimal = Math.floor(number)
    roundedDecimal /= (10**precision)
    return roundedDecimal
  }

  // _.max(array): Computes the maximum value of array. If array is empty or falsey, undefined is returned.
  static max(array) {
    let maxValue = 0
    if (array == false) {
      return undefined
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
          maxValue = array[i]
        }
      }
    }
    return maxValue
  }

  // _.mean(array): Computes the mean of the values in array.
  static mean(array) {
    let sum = array.reduce(
    (a, b) => a + b,
    0)
    return sum/array.length
  }

  // _.min(array): Computes the minimum value of array. If array is empty or falsey, undefined is returned.
  static min(array) {
    let minValue = Infinity
    if (array == false) {
      return undefined
    } else {
      for (let value of array) {
        if (value < minValue) {
          minValue = value
        }
      }
    }
    return minValue
  }

  // _.multiply(multiplier, multiplicand): Multiply two numbers.
  static multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
  }

  // _.round(number, [precision=0]): Computes number rounded to precision.
  static round(number, precision=0) {
    number *= (10**precision)
    let roundedDecimal = Math.round(number)
    roundedDecimal /= (10**precision)
    return roundedDecimal
  }

  // _.subtract(minuend, subtrahend): Subtract two numbers.
  static subtract(minuend, subtrahend) {
    return minuend - subtrahend
  }

  // _.sum(array): Computes the sum of the values in an array.
  static sum(array) {
    let solution = 0
    for (let i in array) {
      solution += array[i]
    }
    return solution
  }
}
