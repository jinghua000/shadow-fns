const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test intersection', function () {
  
  it('test intersection with number', function () {

    let arr1 = [1, 3, 4, 5]
    let arr2 = [5, 4, 3, 3]
    let arr3 = f.intersection(arr1)(arr2)

    equals(arr1, [1, 3, 4, 5])
    equals(arr2, [5, 4, 3, 3])
    equals(arr3, [5, 4, 3])

  })

  it('test NaN', function () {

    let arr1 = [NaN]
    let arr2 = [NaN, NaN, NaN]
    let arr3 = f.intersection(arr1)(arr2)
    
    eq(Array.from(new Set(arr2)).length, 1)
    eq(f.equals(arr3)([NaN]), true)

  })

  it('test object', function () {

    let arr4 = [{}, {}]
    let arr5 = [{}, {}]
    let arr6 = f.intersection(arr4)(arr5)

    equals(arr6, [])
    
  })

})