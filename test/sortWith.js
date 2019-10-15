const equals = require('./util/equals')
const f = require('../src')

describe('test sortWith', function () {

  let list = [
    { name: 'aa', val: 123}, 
    { name: 'cc', val: 345},
    { name: 'bb', val: 234},
    { name: 'aa', val: 234},
  ]

  it('test one condition', function () {

    // sort by val asc
    let fn = f.sortWith(f.ascend(f.prop('val')))

    equals(fn(list), [
      { name: 'aa', val: 123}, 
      { name: 'bb', val: 234},
      { name: 'aa', val: 234},
      { name: 'cc', val: 345},
    ])

  })
  
  it('test several conditions', function () {

    // sort by age asc then sort by name asc
    let sortMethod = f.sortWith(f.ascend(f.prop('age')), f.ascend(f.prop('name')))

    let users = [
      { name: 'Elika', age: 10 },
      { name: 'Alice', age: 10 },
      { name: 'Mike', age: 5 },
    ]

    let users2 = sortMethod(users)

    equals(users2, [
      { name: 'Mike', age: 5 },
      { name: 'Alice', age: 10 },
      { name: 'Elika', age: 10 },
    ])

    equals(users, [
      { name: 'Elika', age: 10 },
      { name: 'Alice', age: 10 },
      { name: 'Mike', age: 5 },
    ])

  })

  it('no condition', function () {

    let list = [1, 2, 3, 4, 10]

    // not like sort, no condition means compare function always return undefined
    // will not change the array
    equals(f.sortWith()(list), [1, 2, 3, 4, 10])
    equals([].concat(list).sort(), [1, 10, 2, 3, 4])

  })

  // okay, test for shallow copy can see test/sort.js

})