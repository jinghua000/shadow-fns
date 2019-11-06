const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test forEach', function () {
  
  it('for each array and return self', function () {
    
    let arr = []
    let arr1 = [1, 2, 3]

    equals(f.forEach(el => arr.push(el + 1))(arr1), [1, 2, 3])
    equals(arr, [2, 3, 4])

  })

  it('shallow copy', function () {

    let forEach = f.forEach(f.identity)
    let arr1 = [{}, {}, {}]
    let arr2 = forEach(arr1)

    equals(arr1, [{}, {}, {}])
    equals(arr2, [{}, {}, {}])
    eq(arr1 === arr2, false)

    arr2[0].a = 123

    equals(arr1, [{ a: 123 }, {}, {}])
    equals(arr2, [{ a: 123 }, {}, {}])

  })

  // other arguments same as native method

})