const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test slice', function () {
  
  it('slice array', function () {

    let slice2 = f.slice(2, 4)
    let arr = [1, 2, 3, 4, 5]

    equals(slice2(arr), [3, 4])
    equals(arr, [1, 2, 3, 4, 5])

  })

  it('in many cases of array', function () {

    let arr = [1, 2, 3, 4, 5]

    equals(f.slice(-1)(arr), [5])
    equals(f.slice(-1, 1)(arr), [])
    equals(f.slice(1, -1)(arr), [2, 3, 4])
    equals(f.slice(1, 1)(arr), [])

  })

  it('slice string', function () {

    let slice2 = f.slice(2, 4)
    let str = '12345'

    eq(slice2(str), '34')
    eq(str, '12345')

  })

  it('in many cases of string', function () {

    let str = '12345'

    eq(f.slice(-1)(str), '5')
    eq(f.slice(-1, 1)(str), '')
    eq(f.slice(1, -1)(str), '234')
    eq(f.slice(1, 1)(str), '')

  })

  it('shallow copy', function () {

    let arr = [{}, {}, {}]
    let arr2 = f.slice()(arr)

    equals(arr2, [{}, {}, {}])
    equals(arr, [{}, {}, {}])

    arr2[0].a = 123

    equals(arr2, [{ a: 123 }, {}, {}])
    equals(arr, [{ a: 123 }, {}, {}])

  })

})