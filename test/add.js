const eq = require('./util/eq')
const f = require('../src')

describe('test add', function () {
  
  it('add number', function () {

    let res
    res = f.add(1)(2)
    eq(res, 3)
    
  })

  it('add string, second add the first', function () {

    let res
    res = f.add('a')('b')
    eq(res, 'ba')

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