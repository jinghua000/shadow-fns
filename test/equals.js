const eq = require('./util/eq')
const f = require('../src')

describe('test equals', function () {

  it('test array', function () {
    
    eq(f.equals([1, 2, 3])([1, 2, 3]), true)
    eq(f.equals(['a', 'b', ['c']])(['a', 'b', ['c']]), true)
    eq(f.equals([])([]), true)

    eq(f.equals([2, 2, 3])([1, 2, 3]), false)
    eq(f.equals([1, 2, 3])([1, 2, '3']), false)

  })

  it('test object', function () {

    eq(f.equals({})({}), true)
    // order is not important with object
    eq(f.equals({ a: 123, b: 234 })({ b: 234, a: 123 }), true)
    eq(f.equals({ a: { b: '123' } })({ a: { b: '123' } }), true)

    eq(f.equals({ a: 123 })({ a: 234 }), false)
    eq(f.equals({ a: 123 })({ a: '123' }), false)
    eq(f.equals({ a: 123 })({ b: 123 }), false)

  })

  it('the other', function () {

    // except `[]`, `{}`, `NaN`, others all like `===` 
    eq(f.equals(null)(null), true)
    eq(f.equals(undefined)(undefined), true)
    eq(f.equals(NaN)(NaN), true)
    eq(f.equals(Symbol.for('foo'))(Symbol.for('foo')), true)

    eq(f.equals(new Map())(new Map()), false)
    eq(f.equals(new Set())(new Set()), false)
    eq(f.equals(/foo/)(/foo/), false)
    eq(f.equals(new Date('2019-01-01'))(new Date('2019-01-01')), false)

    eq(
      f.equals(
        new Date('2019-01-01').getTime()
      )(
        new Date('2019-01-01').getTime()
      ), 
      true
    )

  })

  it('not support prototype chain', function () {

    function C (demo) {
      this.demo = demo
    }

    C.prototype.aa = 123

    let c1 = new C('cc')
    let c2 = new C('cc')

    c1.aa = 123

    eq(c1.aa, 123)
    eq(c2.aa, 123)
    eq(f.equals(c1)(c2), false)

  })

  it('not support symbol key', function () {

    let s = Symbol('s')

    eq(f.equals({ [s]: 123 })({ [s]: 234 }), true)
    eq(f.equals({ [Symbol()]: 123 })({ [Symbol()]: 234 }), true)

  })

  it('can only compare the keys which are enumerable', function () {

    let obj1 = {}
    let obj2 = {}

    // enumerable default false
    Object.defineProperty(obj2, 'key', { value: 'val' })

    eq(f.equals(obj1)(obj2), true)

  })

})