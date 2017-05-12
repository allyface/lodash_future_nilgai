import {expect} from 'chai'
import StringClass from '../src/string.js'

describe('StringClass.capitalize', () => {
  it('Converts the first letter of a string to upper case and the remaining to lower case', function() {
    expect(StringClass.capitalize('FRED')).to.equal('Fred')
  })
})

describe('StringClass.lowerCase', () => {
  it('Converts string as space seperated words, to lower case', function() {
    expect(StringClass.lowerCase('---Foo-Bar---')).to.equal('foo bar')
  })
  it('Converts string to lowercase, words seperated by space', function() {
    expect(StringClass.lowerCase('fooBar')).to.equal('foo bar')
  })
  it('Converts string with dashes to lowercase, removes dashes', function() {
    expect(StringClass.lowerCase('__FOO_BAR__')).to.equal('foo bar')
  })
})

describe('StringClass.lowerFirst', () => {
  it('Converts the first letter of a string to lowercase', function () {
    expect(StringClass.lowerFirst('Fred')).to.equal('fred')
  })
  it('Converts the first letter of a string to lowercase', function() {
    expect(StringClass.lowerFirst('FRED')).to.equal('fRED')
  })
})

describe('StringClass.repeat', () => {
  it('repeats the given string n times', function() {
    expect(StringClass.repeat('*', 3)).to.equal('***')
  })
  it('repeats the given string x times', function() {
    expect(StringClass.repeat('abc', 2)).to.equal('abcabc')
  })
  it('repats the given string y times', function() {
    expect(StringClass.repeat('abc', 0)).to.equal('')
  })
})

describe('StringClass.replace', () => {
  it('Replaces matches for pattern in string', function() {
    expect(StringClass.replace('Hi Fred', 'Fred', 'Barney')).to.equal('Hi Barney')
  })
})

describe('StringClass.trim', () => {
  it('removes leading and trailing whitespace from string', function() {
    expect(StringClass.trim('   abc   ')).to.equal('abc')
  })
  it('Removes trailing and leading characters from a string', function() {
    expect(StringClass.trim('-_-abc-_-', '_-')).to.equal('abc')
  })
})

describe('StringClass.upperCase', () => {
  it('Converts string as space seperated words to uppercase', function() {
    expect(StringClass.upperCase('---foo-bar---')).to.equal('FOO BAR')
  })
  it('Converts string as space seperated words to uppercase', function() {
    expect(StringClass.upperCase('fooBar')).to.equal('FOO BAR')
  })
  it('Converts string as space seperated words to uppercase', function() {
    expect(StringClass.upperCase('___foo_bar___')).to.equal('FOO BAR')
  })
})

describe('StringClass.upperFirst', () => {
  it('Converts first letter of string to uppercase', function() {
    expect(StringClass.upperFirst('fred')).to.equal('Fred')
  })
  it('Coverts first letter of string to uppercase', function() {
    expect(StringClass.upperFirst('FRED')).to.equal('FRED')
  })
})
