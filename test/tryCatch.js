const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test tryCatch', function () {
  
  it('with JSON parse', function () {

    let parse = f.tryCatch(JSON.parse, f.always({}))

    equals(parse(JSON.stringify({ a: 1 })), { a: 1 })
    equals(parse({ a: 1 }), {})

  })

  it('throw errors', function () {

    let fn = f.tryCatch(
      () => { throw '123123' },
      f.identity
    )

    eq(fn(123), 123)

  })

})