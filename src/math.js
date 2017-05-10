export default class _Math {

  // _.add(augend, addend): Adds two numbers
  static add(augend, addend) {
    let sum = augend + addend
    return sum
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
    let quotient = dividend/divisor
    return quotient
  }

  // _.floor(number, [precision=0]): Computes number rounded down to precision.
  static floor(number, precision=0) {
    number *= (10**precision)
    let roundedDecimal = Math.floor(number)
    roundedDecimal /= (10**precision)
    return roundedDecimal
  }
}
