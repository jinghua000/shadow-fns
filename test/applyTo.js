const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test applyTo', function () {
  
  it('test', function () {
    
    let fn1 = (...args) => args
    let fn2 = (...args) => f.sum(args)
    let applyTo = f.applyTo('a', 'b', 'c')

    equals(applyTo(fn1), ['a', 'b', 'c'])
    eq(applyTo(fn2), 'abc')

  })

  // of course this function not support context

})