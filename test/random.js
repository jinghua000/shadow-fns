const eq = require('./util/eq')
const equals = require('./util/equals')
const notEq = require('./util/notEq')
const notEquals = require('./util/notEquals')
const f = require('../src')

describe('test random', function () {
  
  it('test integer', function () {

    for (let i = 0; i < 100; i++) {

      let num = f.random(1, 10)
      eq(num <= 10, true)
      eq(num >= 1, true)

    }

  })

  it('test float, float is not recommended', function () {

    for (let i = 0; i < 100; i++) {

      let num = f.random(1.99, 10.12)
      // (10.12 - 1.99 + 1) * x + 1.99 -> 1 ~ 11
      eq(num <= 11, true)
      eq(num >= 1, true)

    }

  })

  it('other is even less recommended', function () {

    let num

    num = f.random(false, true)

    eq(num <= 1 && num >= 0, true)

    num = f.random(null, undefined)

    eq(Number.isNaN(num), true)

  })


})