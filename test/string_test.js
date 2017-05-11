import {expect} from 'chai'
import _String from '../src/string.js'

describe.only('_String.capitalize', () => {
  it('Converts the first letter of a string to upper case and the remaining to lower case', function() {
    expect(_String.capitalize('FRED')).to.equal('Fred')
  })
})
