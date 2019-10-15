const eq = require('./util/eq')
const f = require('../src')

describe('test lastIndexOf', function () {
  
  it('test array', function () {

    let findIndex = f.lastIndexOf(1)

    eq(findIndex([3, 2, 1, 1, 2, 3]), 3)
    eq(findIndex([3, 2, '1', '1', 2, 3]), -1)

  })

  it('test string', function () {

    let findIndex = f.lastIndexOf(1)

    eq(findIndex('321123'), 3)
    eq(findIndex('320023'), -1)

  })

  it('special NaN', function () {

    let not = NaN

    eq(f.lastIndexOf(not)([not, not]), -1)
    eq(f.lastIndexOf(NaN)([NaN, NaN]), -1)
    eq(f.lastIndexOf(NaN)('NaNNaN'), 3)

  })

  it('find object', function () {

    let obj = {}

    eq(f.lastIndexOf({})([{}, {}, {}]), -1)
    eq(f.lastIndexOf(obj)([obj, obj, {}]), 1)

  })

  it('second argument for array', function () {
    // find from the index to left

    let find = f.lastIndexOf(1, 1)
    // out of range means whole array
    let find2 = f.lastIndexOf(1, 999)

    eq(find([1, 1, 1, 1]), 1)
    eq(find([1, 2, 1, 2]), 0)

    eq(find2([1, 2, 1, 2]), 2)

  })

  it('second argument for string', function () {
    // find from the index to left

    let find = f.lastIndexOf(1, 1)
    // out of range means whole string
    let find2 = f.lastIndexOf(1, 999)

    eq(find('1111'), 1)
    eq(find('1212'), 0)

    eq(find2('1212'), 2)

  })

  it('negative number for array', function () {

    let find = f.lastIndexOf(1, -2)
    // out of range means not exist
    let find2 = f.lastIndexOf(2, -999)

    eq(find([1, 1, 1, 1]), 2)
    eq(find([2, 1, 2, 1]), 1)

    eq(find2([2, 1, 2, 1]), -1)

  })

  it('negative number for string', function () {

    // means 0 for string
    let find = f.lastIndexOf(1, -2)
    let find2 = f.lastIndexOf(2, -999)

    eq(find('1111'), 0)
    eq(find('2121'), -1)

    eq(find2('2121'), 0)

  })

})