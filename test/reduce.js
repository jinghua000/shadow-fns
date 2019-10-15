const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test reduce', function () {
  
  it('reduce array', function () {
    
    let sum = f.reduce((acc, cur) => acc += cur)
    let arr = [1, 2, 3]

    eq(sum(arr), 6)
    equals(arr, [1, 2, 3])

  })

  it('arguments same as native method', function () {

    let nums = []
    let elems = []

    let sum = f.reduce(
      (acc, cur, index, array) => {
        nums.push(index)
        elems.push(array[index])
        return acc += cur
      },
      'abc'
    )

    eq(sum(['a', 'b', 'c']), 'abcabc')
    equals(nums, [0, 1, 2])
    equals(elems, ['a', 'b', 'c'])

  })

})