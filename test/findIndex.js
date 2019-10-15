const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test findIndex', function () {
  
  it('find index of array', function () {

    let firstIndexBiggerThan2 = f.findIndex(f.gt(2))
    let arr = [2, 3, 4, 5]

    eq(firstIndexBiggerThan2(arr), 1)
    equals(arr, [2, 3, 4, 5])

  })

  it('not exist', function () {

    eq(f.findIndex(f.gt(5))([1, 2, 3]), -1)

  })

  it('2nd argument bind `this`', function () {

    let arr1 = [1, 2, 3, 4]
    let arr2 = [3]
    let fn = f.findIndex(function (e) {
      return e === this[0]
    }, arr2)

    eq(fn(arr1), 2)

  })

})