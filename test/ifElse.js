const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test when', function () {
  
  it('test', function () {

    let check3 = f.ifElse(f.gt(3), f.always('so big'), f.always('so small'))

    eq(check3(5), 'so big')
    eq(check3(1), 'so small')

  })

  it('severl arguments', function () {

    let cond = (a, b) => a < b
    let fn1 = (a, b) => [a, b, 1]
    let fn2 = (a, b) => [a, b, 2]

    let fn = f.ifElse(cond, fn1, fn2)

    equals(fn(1, 2), [1, 2, 1])
    equals(fn(2, 1), [2, 1, 2])

  })

})