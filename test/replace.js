const eq = require('./util/eq')
const f = require('../src')

describe('test replace', function () {
  
  it('string replace string, only first one will change', function () {

    let fn = f.replace('yes', 'no')
    let str = 'yes yes i will yes'

    eq(fn(str), 'no yes i will yes')
    eq(str, 'yes yes i will yes')

  })

  it('regexp replace string, can change global', function () {

    let fn = f.replace(/yes/g, 'no')
    let str = 'yes yes i will yes'

    eq(fn(str), 'no no i will no')
    eq(str, 'yes yes i will yes')

  })

  it('with function', function () {

    let fn = f.replace(/\{(.*?)\}/g, (match, p1) => p1)
    let str = '{aa}-{bb}-{cc}'
    
    eq(fn(str), 'aa-bb-cc')
    eq(str, '{aa}-{bb}-{cc}')

  })

  it('above case can also do with string', function () {

    let fn = f.replace(/\{(.*?)\}/g, '$1')
    let str = '{aa}-{bb}-{cc}'
    
    eq(fn(str), 'aa-bb-cc')
    eq(str, '{aa}-{bb}-{cc}')

  })

})