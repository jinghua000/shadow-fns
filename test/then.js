const eq = require('./util/eq')
const f = require('../src')

describe('test then', function () {
  
  it('then for pormise', function () {

    let data = Promise.resolve({ name: 'Eric' })
    let getName = f.then(f.prop('name'))
    getName(data).then(f.curry(eq)('Eric'))

  })

  it('two parameters', function () {

    let resolve = Promise.resolve(123)
    let reject = Promise.reject(123)
    let check = f.then(f.always('success'), f.always('error'))

    check(resolve).then(f.curry(eq)('success'))
    check(reject).then(f.curry(eq)('error'))

  })

})