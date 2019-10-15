const equals = require('./util/equals')
const f = require('../src')

describe('test toArray', function () {
  
  it('test not array', function () {

    equals(f.toArray('fff'), ['fff'])
    equals(f.toArray(null), [null])

  })

  it('test array', function () {

    equals(f.toArray([1, 2, 3]), [1, 2, 3])
    equals(f.toArray([1, 2, [3]]), [1, 2, [3]])

  })

  it('shallow copy', function () {

    let arr = [{}]
    let arr2 = f.toArray(arr)

    arr2[0].a = 123

    equals(arr, [{ a: 123 }])
    equals(arr2, [{ a: 123 }])

  })

})