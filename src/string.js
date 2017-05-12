export default class _String {

  //converts the first letter of a string to uppercase
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  //converts string as space seperated words, to lowercase
  static lowerCase(str) {
    str = str.replace(/\W/g, ' ')
             .replace(/_/g, ' ')
    for(let i = 0; i < str.length; i++) {
      if ((	str.charAt(i) === str.charAt(i).toLowerCase()) &&
      (str.charAt(i + 1) === str.charAt(i + 1).toUpperCase())) {
        str = str.slice(0, i + 1) + ' ' + str.slice(i + 1)
        return str.toLowerCase()
                  .trim()
      }
    }
  }

  //converts the first letter of string to lowercase
  static lowerFirst(str) {
    return str.charAt(0).toLowerCase() + str.slice(1)
  }

//repeats the given string n times
  static repeat(string, num) {
    if (num > 0){
      return string.repeat(num)
    } else {
      return ''
    }
  }

  //replaces matches for pattern in string
  static replace(string, pattern, replacement) {
    return string.replace(pattern, replacement)
  }
}
