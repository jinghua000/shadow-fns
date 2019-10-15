const equals = require('./util/equals')
const f = require('../src')

describe('test flatten', function () {
  
  it('flatten the array', function () {

    let arr = [1, [2], [[3, [4]], 5]]

    equals(f.flatten(arr), [1, 2, 3, 4, 5])

  })

  it('shallow copy', function () {

    let arr = [[{}]]
    let arr2 = f.flatten(arr)

    arr2[0].a = 123

    equals(arr, [[{ a: 123 }]])
    equals(arr2, [{ a: 123 }])

  })

})