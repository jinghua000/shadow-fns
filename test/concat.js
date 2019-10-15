const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test concat', function () {
  
  it('test string', function () {

    let str = 'i have'
    let str2 = f.concat(' a', ' plan')(str)

    eq(str, 'i have')
    eq(str2, 'i have a plan')

  })

  it('test array', function () {

    let arr = [1, 2, 3]
    let arr2 = f.concat(4, [5])(arr)

    equals(arr, [1, 2, 3])
    equals(arr2, [1, 2, 3, 4, 5])

  })

  it('test others', function () {

    try {
      f.concat([1, 2, 3])({})
    } catch (err) {
      eq(err instanceof TypeError, true)
    }

    try {
      f.concat([1, 2, 3])(null)
    } catch (err) {
      eq(err instanceof TypeError, true)
    }

    try {
      f.concat([1, 2, 3])(123)
    } catch (err) {
      eq(err instanceof TypeError, true)
    }

  })

})