const equals = require('./util/equals')
const f = require('../src')

describe('test reverse', function () {
  
  it('reverse the array', function () {

    let arr = [1, 2, 3]
    equals(f.reverse(arr), [3, 2, 1])
    equals(arr, [1, 2, 3])

  })

  it('shallow copy', function () {

    let arr = [{}, {}]
    let arr2 = f.reverse(arr)
    
    arr2[0].a = 123

    equals(arr, [{}, { a: 123 }])
    equals(arr2, [{ a: 123 }, {}])

  })

})