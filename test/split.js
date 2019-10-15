const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test split', function () {
  
  it('split with string', function () {

    let str = 'i have a plan'
    let splitWithBlank = f.split(' ')

    equals(splitWithBlank(str), ['i', 'have', 'a', 'plan'])
    eq(str, 'i have a plan')

  })

  it('split with regexp', function () {

    let str = 'aa-123-bb-234-cc-345-dd'
    let reg = /-.*?-/
    
    equals(f.split(reg)(str), ['aa', 'bb', 'cc', 'dd'])

  })

  it('arguments same as native method', function () {

    let str = 'i have a plan'

    equals(f.split(' ', 0)(str), [])
    equals(f.split(' ', 1)(str), ['i'])
    equals(f.split(' ', 2)(str), ['i', 'have'])
    equals(f.split(' ', 999)(str), ['i', 'have', 'a', 'plan'])
    equals(f.split(' ', -999)(str), ['i', 'have', 'a', 'plan'])

  })

})