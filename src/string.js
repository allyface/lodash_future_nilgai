export default class _String {

  //_.capitalize([string='']): Converts the first character of string to upper case and the remaining to lower case.
  static capitalize(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  //_.lowerCase([string='']): Converts string, as space separated words, to lower case.
  static lowerCase(string = '') {
    string = string.replace(/\W/g, ' ')
             .replace(/_/g, ' ')
    for(let i = 0; i < string.length; i++) {
      if ((	string.charAt(i) === string.charAt(i).toLowerCase()) &&
      (string.charAt(i + 1) === string.charAt(i + 1).toUpperCase())) {
        string = string.slice(0, i + 1) + ' ' + string.slice(i + 1)
        return string.toLowerCase()
                  .trim()
      }
    }
  }

  //_.lowerFirst([string='']): Converts the first character of string to lower case.
  static lowerFirst(string = '') {
    return string.charAt(0).toLowerCase() + string.slice(1)
  }

//_.repeat([string=''], [n=1]): Repeats the given string n times.
  static repeat(string = '', n = 1) {
    if (n > 0){
      return string.repeat(n)
    } else {
      return ''
    }
  }

  //_.replace([string=''], pattern, replacement): Replaces matches for pattern in string with replacement.
  static replace(string = '', pattern, replacement) {
    return string.replace(pattern, replacement)
  }

  //_.trim([string=''], [chars=whitespace]): Removes leading and trailing whitespace and special characters
  static trim(string, char) {
    string = string.replace(/[^a-zA-Z ]/g, '')
    return string.trim()
  }

  //_.upperCase([string='']); Converts string as space seperated words to upperCase
  static upperCase(str) {
    str = str.replace(/\W/g, ' ')
          .replace(/_/g, ' ')
    for(let i = 0; i < str.length; i++) {
      if ((	str.charAt(i) === str.charAt(i).toLowerCase()) &&
    (str.charAt(i + 1) === str.charAt(i + 1).toUpperCase())) {
        str = str.slice(0, i + 1) + ' ' + str.slice(i + 1)
        return str.toUpperCase()
              .trim()
      }
    }
  }
}
