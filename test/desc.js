const equals = require('./util/equals')
const f = require('../src')

describe('test desc', function () {
  
  it('sort array desc with number', function () {

    let arr = [4,3,2,1,10,5]

    let arr2 = f.sort(f.desc)(arr)
    
    equals(arr2, [10,5,4,3,2,1])

  })

  it('sort array desc with string', function () {

    let arr = ['ab', 'aa', 'ad', 'aa', 'b', 'ac']

    let arr2 = f.sort(f.desc)(arr)
    
    equals(arr2, ['b','ad','ac','ab','aa', 'aa'])

  })

})