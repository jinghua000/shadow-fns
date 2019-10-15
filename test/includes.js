const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test includes', function () {
  
  it('test array', function () {

    let includes = f.includes('yes')
    let arr = ['i', 'say', 'yes', '!']

    eq(includes(arr), true)
    eq(includes(arr.slice(-1)), false)
    eq(includes(arr.slice(-2)), true)
    equals(arr, ['i', 'say', 'yes', '!'])

  })

  it('test string', function () {

    let includes = f.includes('yes')
    let str = 'i say yes'  
    let str2 = 'i say no'  

    eq(includes(str), true)
    eq(includes(str2), false)
    eq(f.includes(1)('123'), true)

  })

  it('difficult cases for array', function () {

    eq(f.includes(1, 0)([1, 2, 3]), true)
    eq(f.includes(1, 1)([1, 2, 3]), false)
    eq(f.includes(1, 100)([1, 2, 3]), false)
    eq(f.includes(2, -1)([1, 2, 3]), false)
    eq(f.includes(2, -2)([1, 2, 3]), true)
    eq(f.includes(2, -999)([1, 2, 3]), true)

  })

  it('difficult cases for string', function () {

    // case sensitivity
    eq(f.includes('abc')('ABC'), false)

    eq(f.includes(1, 0)('123'), true)
    eq(f.includes(1, 1)('123'), false)
    eq(f.includes(1, 100)('123'), false)
    // negative number for 2nd argument means 0
    eq(f.includes(2, -1)('123'), true)
    eq(f.includes(2, -2)('123'), true)
    eq(f.includes(2, -999)('123'), true)

  })

  it('special NaN', function () {

    eq(f.includes(NaN)([NaN]), true)
    eq(f.includes(NaN)('NaN'), true)

  })

})