const equals = require('./util/equals')
const f = require('../src')

describe('test ascend', function () {
  
  it('sort arrry asc with number', function () {

    let list = [
      { name: 'aa', val: 123}, 
      { name: 'bb', val: 345},
      { name: 'cc', val: 234}
    ]

    let fn = f.sort(f.ascend(f.prop('val')))

    equals(fn(list), [
      { name: 'aa', val: 123}, 
      { name: 'cc', val: 234},
      { name: 'bb', val: 345}
    ])

  })

  it('sort arrry asc with string', function () {

    let list = [
      { name: 'aa', val: 123}, 
      { name: 'cc', val: 234},
      { name: 'bb', val: 345},
    ]

    let fn = f.sort(f.ascend(f.prop('name')))

    equals(fn(list), [
      { name: 'aa', val: 123}, 
      { name: 'bb', val: 345},
      { name: 'cc', val: 234},
    ])

  })

})