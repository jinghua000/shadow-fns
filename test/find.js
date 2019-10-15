const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test find', function () {
  
  it('find array', function () {

    let firstBiggerThan2 = f.find(f.gt(2))
    let arr = [2, 3, 4, 5]

    eq(firstBiggerThan2(arr), 3)
    equals(arr, [2, 3, 4, 5])

  })

  it('not exist', function () {

    eq(f.find(f.gt(5))([1, 2, 3]), undefined)

  })

  it('2nd argument bind `this`', function () {

    let arr1 = [1, 2, 3, 4]
    let arr2 = [3]
    let fn = f.find(function (e) {
      return e === this[0]
    }, arr2)

    eq(fn(arr1), 3)

  })

})