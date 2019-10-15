const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test match', function () {
  
  it('match global', function () {

    let matchAll = f.match(/\{.*?\}/g)
    let str = '{aa}-{bb}-{cc}'

    equals(matchAll(str), ['{aa}', '{bb}', '{cc}'])
    eq(str, '{aa}-{bb}-{cc}')
    eq(matchAll('aa-bb-cc'), null)

  })

  it('match one', function () {

    let match = f.match(/\{.*?\}/)
    let res = match('{aa}-{bb}-{cc}')
    equals(res[0], '{aa}')
    equals(res.groups, undefined)
    equals(res.index, 0)
    equals(res.input, '{aa}-{bb}-{cc}')

  })

})