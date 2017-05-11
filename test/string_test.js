import {expect} from 'chai'
import _String from '../src/string.js'

describe('_String.capitalize', () => {
  it('Converts the first letter of a string to upper case and the remaining to lower case', function() {
    expect(_String.capitalize('FRED')).to.equal('Fred')
  })
})

describe.only('_String.lowerCase', () => {
  it('Converts string as space seperated words, to lower case', function() {
    expect(_String.lowerCase('---Foo-Bar---')).to.equal('foo bar')
  })
  it('Converts string to lowercase, words seperated by space', function() {
    expect(_String.lowerCase('fooBar')).to.equal('foo bar')
  })
  it('Converts string with dashes to lowercase, removes dashes', function() {
    expect(_String.lowerCase('__FOO_BAR__')).to.equal('foo bar')
  })
})

describe('_String.lowerFirst', () => {
  it('Converts the first letter of a string to lowercase')
})
