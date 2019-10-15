const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test difference', function () {
  
  it('test difference with number', function () {

    let arr1 = [1, 3, 4, 1]
    let arr2 = [3, 4, 5]
    let arr3 = f.difference(arr1)(arr2)

    equals(arr1, [1, 3, 4, 1])
    equals(arr2, [3, 4, 5])
    equals(arr3, [5, 1])

  })

  it('test NaN', function () {

    let arr1 = [null, NaN, undefined]
    let arr2 = [null, NaN, NaN, undefined]
    let arr3 = f.difference(arr1)(arr2)

    // [NaN] includes NaN
    eq([NaN].includes(NaN), true)
    equals(arr3, [])

  })

  it('test object', function () {

    let arr4 = [{}, {}]
    let arr5 = [{}, {}]
    let arr6 = f.difference(arr4)(arr5)

    // [{}] not includes {}
    equals(arr6, [{}, {}, {}, {}])
    
  })

  it('shallow copy', function () {
    
    let arr = [{}]
    let arr2 = f.difference([])(arr)

    equals(arr2, [{}])
    equals(arr, [{}])

    arr2[0].a = 123

    equals(arr2, [{ a: 123 }])
    equals(arr, [{ a: 123 }])

  })

})