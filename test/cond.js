const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test cond', function () {
  
  it('if condition return true, exit', function () {

    let arr = []

    let fn = f.cond(
      [() => arr.push(1) && false, () => 123],
      [() => arr.push(2) && true, () => 234],
      [() => arr.push(3) && false, () => 345],
    )

    eq(fn(), 234)
    equals(arr, [1, 2])
    
  })

  it('f.cond pass arguments to conditions', () => {

    let arr = []

    let fn = f.cond(
      [el => arr.push(el) && true, f.identity]
    )

    eq(fn(123), 123)
    equals(arr, [123])

  })

})