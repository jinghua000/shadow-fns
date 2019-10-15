const eq = require('./util/eq')
const f = require('../src')

describe('test trace', function () {
  
  it('with pipe', function () {

    let add3 = f.pipe(
      f.trace('hello!'), 
      f.add(1), 
      f.trace('who am i?'), 
      f.add(1), 
      f.trace('where am i?'), 
      f.add(1),
      f.trace('good bye!')
    )

    eq(add3(3), 6)
    // logs: hello! 3
    // logs: who am i? 4
    // logs: where am i? 5
    // logs: good bye! 6

  })

})