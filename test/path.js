const eq = require('./util/eq')
const f = require('../src')

describe('test path', function () {
  
  it('test object path', function () {

    let obj = { a: { a: 123, b: null } }

    // if not support path, return self
    eq(f.path([])(obj), obj)
    eq(f.path(['a', 'a'])(obj), 123)
    eq(f.path(['a', 'b'])(obj), null)
    eq(f.path(['a', 'c', 'd'])(obj), undefined)

  })

  it('others always return `undefined`', function () {

    eq(f.path(['a'])(undefined), undefined)
    eq(f.path(['a'])(null), undefined)
    eq(f.path(['a'])(''), undefined)
    eq(f.path(['a'])(123), undefined)

  })

  it('can work with array', function () {

    eq(f.path([0, 0, 0], [[[123]]]), 123)

  })

})