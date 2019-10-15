const eq = require('./util/eq')
const f = require('../src')

describe('test type', function () {
  
  it('usual type', function () {

    eq(f.type(''), 'String')
    eq(f.type(123), 'Number')
    eq(f.type(NaN), 'Number')
    eq(f.type(Infinity), 'Number')
    eq(f.type(true), 'Boolean')
    eq(f.type({}), 'Object')
    eq(f.type([]), 'Array')
    eq(f.type(null), 'Null')
    eq(f.type(undefined), 'Undefined')
    eq(f.type(Symbol()), 'Symbol')
    eq(f.type(function () {}), 'Function')
    eq(f.type(() => {}), 'Function')
    eq(f.type(new Map()), 'Map')
    eq(f.type(new Set()), 'Set')
    eq(f.type(new Date()), 'Date')
    eq(f.type(/abc/), 'RegExp')
    eq(f.type(arguments), 'Arguments')
    eq(f.type(), 'Undefined')

  })

  it('custom type', function () {

    class C {}
    let c = new C()

    eq(f.type(C), 'Function')
    eq(f.type(c), 'Object')

    C.prototype[Symbol.toStringTag] = 'C'

    eq(f.type(c), 'C')

  })

})