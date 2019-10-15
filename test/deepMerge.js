const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test deepMerge', function () {
  
  it('merge', function () {

    let obj1 = { a: 1 }
    let obj2 = { b: 2 }

    equals(f.deepMerge(obj1, obj2), { a: 1, b: 2 })

  })

  it('deep merge', function () {

    let obj1 = { a: { a: 123, b: 234 } }
    let obj2 = { a: { a: 234 } }

    equals(f.deepMerge(obj1, obj2), { a: { a: 234, b: 234 } })

  })

  it('very deep merge', function () {

    let obj1 = { a: { a: 1, b: { b: 2 } } }
    let obj2 = { a: { b: { a: 1 } } }

    equals(f.deepMerge(obj1, obj2), { a: { a: 1, b: { a: 1, b: 2 } } })

  })

  it('several arguments and pure', function () {

    let obj1 = { a: { a: 1 } }
    let obj2 = { a: { b: 2 } }
    let obj3 = { a: { c: 3 } }

    equals(f.deepMerge(obj1, obj2, obj3), { a: { a: 1, b: 2, c: 3 } })
    equals(obj1, { a: { a: 1 } })
    equals(obj2, { a: { b: 2 } })
    equals(obj3, { a: { c: 3 } })

  })

  it('same key', function () {

    let obj1 = { a: { a: 1 } }
    let obj2 = { a: { a: 2 } }
    let obj3 = { a: { a: 3 } }

    equals(f.deepMerge(obj1, obj2, obj3), { a: { a: 3 } })

  })

})