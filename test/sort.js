const equals = require('./util/equals')
const f = require('../src')

describe('test sort', function () {
  
  it('sort array', function () {

    let sortAsc = f.sort(f.asc)
    let arr = [10, 9, 1, 3, 2]

    equals(sortAsc(arr), [1, 2, 3, 9, 10])
    equals(arr, [10, 9, 1, 3, 2])

  })

  it('shallow copy', function () {

    let sortByAge = f.sort(f.ascend(f.prop('age')))
    let arr = [{ name: 'Bob', age: 10 }, { name: 'Mark', age: 5 }]
    let arr2 = sortByAge(arr)

    equals(arr2, [{ name: 'Mark', age: 5 }, { name: 'Bob', age: 10 }])
    equals(arr, [{ name: 'Bob', age: 10 }, { name: 'Mark', age: 5 }])

    arr2[0].name = 'Maria'

    equals(arr2, [{ name: 'Maria', age: 5 }, { name: 'Bob', age: 10 }])
    equals(arr, [{ name: 'Bob', age: 10 }, { name: 'Maria', age: 5 }])

  })

})