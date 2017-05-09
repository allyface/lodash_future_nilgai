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
}
