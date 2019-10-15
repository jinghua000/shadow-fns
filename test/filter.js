const equals = require('./util/equals')
const f = require('../src')

describe('test filter', function () {
  
  it('filter array', function () {

    let greaterThan3 = f.filter(f.gt(3))
    let arr = [1, 2, 3, 4, 5]

    equals(greaterThan3(arr), [4, 5])
    equals(arr, [1, 2, 3, 4, 5])

  })

  it('arguments same as native method, 2nd argument bind `this`', function () {
    
    let arr1 = [true, true, true]
    let arr2 = [false, false, false]
    let filter = f.filter(function (e, index) {
      return this[index] === true
    }, arr1)

    equals(filter(arr2), [false, false, false])

  })

})