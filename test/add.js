const eq = require('./util/eq')
const f = require('../src')

describe('test add', function () {
  
  it('add number', function () {

    eq(f.add(1)(2), 3)
    eq(f.add(1, -2), -1)
    eq(f.add(-1, -2), -3)
    
  })

  it('add string, second add the first', function () {

    eq(f.add('a')('b'), 'ba')

  })

  it('add others', function () {

    let res

    res = f.add(null)(undefined)
    eq(Number.isNaN(res), true)

    res = f.add(null)(null)
    eq(res, 0)

    res = f.add(false)(true)
    eq(res, 1)

  })

})