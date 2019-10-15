const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test descend', function () {
  
  it('sort array desc with number', function () {

    let list = [
      { name: 'aa', val: 123},
      { name: 'cc', val: 345},
      { name: 'bb', val: 234}
    ]

    let fn = f.sort(f.descend(f.prop('val')))

    equals(fn(list), [
      { name: 'cc', val: 345},
      { name: 'bb', val: 234},
      { name: 'aa', val: 123} 
    ])

  })

  it('sort arrry desc with string', function () {

    let list = [
      { name: 'aa', val: 123}, 
      { name: 'cc', val: 234},
      { name: 'bb', val: 345},
    ]

    let fn = f.sort(f.descend(f.prop('name')))

    equals(fn(list), [
      { name: 'cc', val: 234},
      { name: 'bb', val: 345},
      { name: 'aa', val: 123}, 
    ])

  })

})