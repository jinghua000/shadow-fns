const equals = require('./util/equals')
const f = require('../src')

describe('test asc', function () {
  
  it('sort array asc with number', function () {

    let arr = [4,3,2,1,10,5]

    let arr2 = f.sort(f.asc)(arr)
    
    equals(arr2, [1,2,3,4,5,10])

  })

  it('sort array asc with string', function () {

    let arr = ['ab', 'aa', 'ad', 'aa', 'b', 'ac']

    let arr2 = f.sort(f.asc)(arr)
    
    equals(arr2, ['aa', 'aa','ab','ac','ad','b'])

  })

})