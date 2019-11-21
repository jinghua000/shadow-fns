const eq = require('./util/eq')
const f = require('../src')

describe('test when', function () {

  it('when first function succeed, should call the second function', function () {

    let cannotOver3 = f.when(f.gt(3), f.always('so big'))

    eq(cannotOver3(5), 'so big')

  })

  it('when first function failed, should return the supplied argument self', function () {

    let obj = {}
    let cond = f.when(f.propEq('aa', 'aa'), f.always('good'))

    eq(cond(obj), obj)

  })

  it('when first function succeed, should pass the last argument to second function', function () {

    let obj = {}
    let cond = f.when(f.T, f.identity)

    eq(cond(obj), obj)

  })

})