const eq = require('./util/eq')
const f = require('../src')

describe('test is', function () {
  
  it('usual type', function () {

    eq(f.is(String)(''), true)
    eq(f.is(Number)(123), true)
    eq(f.is(Number)(NaN), true)
    eq(f.is(Number)(Infinity), true)
    eq(f.is(Boolean)(true), true)
    eq(f.is(Object)({}), true)
    eq(f.is(Array)([]), true)
    eq(f.is(Symbol)(Symbol()), true)
    eq(f.is(Function)(function () {}), true)
    eq(f.is(Function)(() => {}), true)
    eq(f.is(Map)(new Map()), true)
    eq(f.is(Set)(new Set()), true)
    eq(f.is(Date)(new Date()), true)
    eq(f.is(Object)(/abc/), true)
    eq(f.is(Object)(arguments), true)

    eq(f.is(Object)(null), false)
    eq(f.is(Object)(undefined), false)

  })

  it('inheritance chain', function () {

    eq(f.is(Object)([]), true)
    eq(f.is(Object)(function () {}), true)
    eq(f.is(Object)(() => {}), true)
    eq(f.is(Object)(new Map()), true)
    eq(f.is(Object)(new Set()), true)
    eq(f.is(Object)(new Date()), true)

    eq(f.is(Object)(123), false)
    eq(f.is(Object)(true), false)
    eq(f.is(Object)(''), false)
    eq(f.is(Object)(Symbol()), false)

  })

  it('custom constructor', function () {

    class C1 {}
    class C2 extends C1 {}

    function C3 () {}
    function C4 () {}
    Object.setPrototypeOf(C4.prototype, C3.prototype)

    let c1 = new C1()
    let c2 = new C2()
    let c3 = new C3()
    let c4 = new C4()

    eq(f.is(Object)(c1), true)
    eq(f.is(Object)(c2), true)
    eq(f.is(Object)(c3), true)
    eq(f.is(Object)(c4), true)

    eq(f.is(C1)(c1), true)
    eq(f.is(C2)(c1), false)
    eq(f.is(C1)(c2), true)
    eq(f.is(C2)(c2), true)

    eq(f.is(C3)(c3), true)
    eq(f.is(C4)(c3), false)
    eq(f.is(C3)(c4), true)
    eq(f.is(C4)(c4), true)

  })

})