const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test catch', function () {
  
  it('catch promise error', function () {

    let ret
    let fn = f.pipe(
      Promise.reject.bind(Promise),
      f.then(() => ret = 1),
      f.catch(() => ret = 0),
    )

    fn().then(() => eq(ret, 0))

  })

  it('other error', function () {

    let ret
    let fn = f.catch(() => ret = 0)
    let p = Promise.resolve().then(() => {
      throw '123'
    })

    fn(p).then(() => eq(ret, 0))

  })

})