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

describe('_String.trim', () => {
  it('removes leading and trailing whitespace from string', function() {
    expect(_String.trim('   abc   ')).to.equal('abc')
  })
  it('Removes trailing and leading characters from a string', function() {
    expect(_String.trim('-_-abc-_-', '_-')).to.equal('abc')
  })
})

describe('_String.upperCase', () => {
  it('Converts string as space seperated words to uppercase', function() {
    expect(_String.upperCase('---foo-bar---')).to.equal('FOO BAR')
  })
  it('Converts string as space seperated words to uppercase', function() {
    expect(_String.upperCase('fooBar')).to.equal('FOO BAR')
  })
  it('Converts string as space seperated words to uppercase', function() {
    expect(_String.upperCase('___foo_bar___')).to.equal('FOO BAR')
  })
})

describe('_String.upperFirst', () => {
  it('Converts first letter of string to uppercase', function() {
    expect(_String.upperFirst('fred')).to.equal('Fred')
  })
  it('Coverts first letter of string to uppercase', function() {
    expect(_String.upperFirst('FRED')).to.equal('FRED')
  })
})

describe('_String.toUpper', () => {
  it('Converts string as a whole to uppercase', function() {
    expect(_String.toUpper('---foo-bar-')).to.equal('---FOO-BAR---')
  })
  it('Convets string as a whole to uppercase', function() {
    expect(_String.toUpper('fooBar')).to.equal('FOOBAR')
  })
  it('Coverts a string a whole to uppercase', function() {
    expect(_String.toUpper('___foo_bar___')).to.equal('___FOO_BAR___')
  })
})
