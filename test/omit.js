const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test omit', function () {
  
  it('common', function () {

    let obj = { a: 1, b: 2, c: 3 }
    let keys = ['a', 'b']
    let fn = f.omit(keys)

    equals(fn(obj), { c: 3 })

  })

  it('extra arguments', function () {

    let obj = { a: 1, b: 2, c: 3 }
    let keys = ['a', 'b', 'd', 'e']
    let fn = f.omit(keys)

    equals(fn(obj), { c: 3 })

  })

  it('curry', function () {

    let obj = { a: 1, b: 2, c: 3 }
    let keys = ['a', 'b']

    equals(f.omit(keys)(obj), f.omit(keys, obj))

  })

})