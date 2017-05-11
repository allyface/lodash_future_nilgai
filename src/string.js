export default class _String {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

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
  static lowerFirst(str) {
    return str.charAt(0).toLowerCase() + str.slice(1)
  }
  static repeat(string, num) {
    if (num > 0){
      return string.repeat(num)
    }
      else {
        return ""
      }
  }
}
