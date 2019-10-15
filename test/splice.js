const equals = require('./util/equals')
const f = require('../src')

describe('test splice', function () {
  
  it('splice array', function () {

    let replaceTwo = f.splice(1, 2, 'two', 'two')
    let arr = ['one', 'two', 'three', 'four']

    equals(replaceTwo(arr), ['one', 'two', 'two', 'four'])
    equals(arr, ['one', 'two', 'three', 'four'])

  })

  it('shallow copy', function () {

    let deleteSecond = f.splice(1, 1)
    let arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]
    let arr2 = deleteSecond(arr)

    equals(arr2, [{ a: 1 }, { a: 3 }, { a: 4 }])
    equals(arr, [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])

    arr2[0].b = 123

    equals(arr2, [{ a: 1, b: 123 }, { a: 3 }, { a: 4 }])
    equals(arr, [{ a: 1, b: 123 }, { a: 2 }, { a: 3 }, { a: 4 }])

  })

  it('arguments same as native method', function () {
    // first: start index
    // second: replace elements number
    // third and follow: insert elements

    equals(f.splice(1)([1, 2, 3]), [1])
    equals(f.splice(100)([1, 2, 3]), [1, 2, 3])

    equals(f.splice(1, 0)([1, 2, 3]), [1, 2, 3])
    equals(f.splice(1, 1)([1, 2, 3]), [1, 3])
    equals(f.splice(1, 100)([1, 2, 3]), [1])
    equals(f.splice(1, -100)([1, 2, 3]), [1, 2, 3])

    equals(f.splice(1, 0, 1, 2, 3)([1, 2, 3]), [1, 1, 2, 3, 2, 3])

    equals(f.splice(-1)([1, 2, 3]), [1, 2])
    equals(f.splice(-2)([1, 2, 3]), [1])
    equals(f.splice(-100)([1, 2, 3]), [])

    equals(f.splice(-2, 0)([1, 2, 3]), [1, 2, 3])
    equals(f.splice(-2, 1)([1, 2, 3]), [1, 3])
    equals(f.splice(-2, 100)([1, 2, 3]), [1])
    equals(f.splice(-2, -100)([1, 2, 3]), [1, 2, 3])

    equals(f.splice(-1, 0, 1, 2, 3)([1, 2, 3]), [1, 2, 1, 2, 3, 3])

  })

})