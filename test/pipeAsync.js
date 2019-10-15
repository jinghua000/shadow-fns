const eq = require('./util/eq')
const f = require('../src')

describe('test async', function () {
  
  it('test function composition', function () {

    let fn 

    fn = f.pipeAsync(
      f.add('a'), 
      f.sleep(500), 
      f.add('b'), 
      f.add('c')
    )

    fn('').then(res => eq(res, 'abc'))

    // sync function can be composed with `pipe`
    // async function can be composed with `pipeAsync`

    fn = f.pipeAsync(
      f.pipeAsync(
        f.always('a'), 
        f.pipeAsync(
          f.sleep(500), 
          f.pipe(
            f.add('b'),
            f.sleep(0),
            f.then(f.add('c')),
          ),
        )
      )
    )

    fn().then(res => eq(res, 'abc'))

    let asyncAddb = arg => new Promise(res => setTimeout(res, 500, arg + 'b'))

    fn = f.pipeAsync(
      f.always('a'), 
      asyncAddb,
      f.add('c'),
    )

    fn().then(res => eq(res, 'abc'))
    
  })

  // not support context see test/pipe.js

})