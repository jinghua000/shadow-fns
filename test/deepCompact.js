const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test deepCompact', function () {
  
  it('should select values not empty and will not change the origin array', function () {

    let arr = [0, 1, null, undefined, false, [], {}, '']

    equals(
      f.deepCompact(arr),
      [0, 1, false]
    )

    equals(
      arr, 
      [0, 1, null, undefined, false, [], {}, '']
    )

  })

  it('should select values not empty and will not change the origin object', function () {

    let obj = {
      a: 0,
      b: 1,
      c: null,
      d: undefined,
      e: false,
      f: [],
      g: {},
      h: '',
    }

    equals(
      f.deepCompact(obj),
      {
        a: 0,
        b: 1,
        e: false,
      }
    )

    equals(obj, {
      a: 0,
      b: 1,
      c: null,
      d: undefined,
      e: false,
      f: [],
      g: {},
      h: '',
    })

  })

  it('test string', function () {

    let str = ' i have a plan '

    eq(f.deepCompact(str), 'ihaveaplan')
    eq(str, ' i have a plan ')

  })

  it('test others', function () {

    let m = new Map([['a', '123']])
    let d = new Date()

    eq(f.deepCompact(m), m)
    eq(f.deepCompact(d), d)
    eq(f.deepCompact(0), 0)
    eq(f.deepCompact(true), true)
    eq(f.deepCompact(null), null)

  })

})