const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test compact', function () {
  
  it('should select values not nil and will not change the origin array', function () {

    let arr = [0, 1, null, undefined, false, [], {}]

    equals(
      f.compact(arr),
      [0, 1, false, [], {}]
    )

    equals(
      arr,
      [0, 1, null, undefined, false, [], {}]
    )

  })

  it('should select values not nil and will not change the origin object', function () {

    let obj = {
      a: 0,
      b: 1,
      c: null,
      d: undefined,
      e: false,
      f: [],
      g: {},
    }

    equals(
      f.compact(obj),
      {
        a: 0,
        b: 1,
        e: false,
        f: [],
        g: {},      
      }
    )

    equals(
      obj,
      {
        a: 0,
        b: 1,
        c: null,
        d: undefined,
        e: false,
        f: [],
        g: {},
      }
    )

  })

  it('test string', function () {

    let str = ' i have a plan '

    eq(f.compact(str), 'ihaveaplan')
    eq(str, ' i have a plan ')

  })

  it('test others', function () {

    let m = new Map([['a', '123']])
    let d = new Date()

    eq(f.compact(m), m)
    eq(f.compact(d), d)
    eq(f.compact(0), 0)
    eq(f.compact(true), true)
    eq(f.compact(null), null)

  })

})