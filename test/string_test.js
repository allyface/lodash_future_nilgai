import {expect} from 'chai'
import _String from '../src/string.js'

describe('_String.capitalize', () => {
  it('Converts the first letter of a string to upper case and the remaining to lower case', function() {
    expect(_String.capitalize('FRED')).to.equal('Fred')
  })
})

describe('_String.lowerCase', () => {
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
  it('Converts the first letter of a string to lowercase', function () {
    expect(_String.lowerFirst('Fred')).to.equal('fred')
  })
  it('Converts the first letter of a string to lowercase', function() {
    expect(_String.lowerFirst('FRED')).to.equal('fRED')
  })
})

describe('_String.repeat', () => {
  it('repeats the given string n times', function() {
    expect(_String.repeat('*', 3)).to.equal('***')
  })
  it('repeats the given string x times', function() {
    expect(_String.repeat('abc', 2)).to.equal('abcabc')
  })
  it('repats the given string y times', function() {
    expect(_String.repeat('abc', 0)).to.equal('')
  })
})

describe('_String.replace', () => {
  it('Replaces matches for pattern in string', function() {
    expect(_String.replace('Hi Fred', 'Fred', 'Barney')).to.equal('Hi Barney')
  })
})
