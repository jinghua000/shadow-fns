const eq = require('./util/eq')
const f = require('../src')

describe('test cond', function () {
  
  it('test', function () {

    let judgeMan = f.cond(
      [f.pipe(f.trace('check 90'), f.gt(90)), f.always('good man')],
      [f.pipe(f.trace('check 70'), f.gt(70)), f.always('common man')],
      [f.pipe(f.trace('check 50'), f.gt(50)), f.always('weak man')],
      [f.T, f.always('unless man')]
    )

    let man1 = { name: 'Dark', point: 80 }
    let man2 = { name: 'White', point: 30 }

    eq(judgeMan(man1.point), 'common man')
    eq(judgeMan(man2.point), 'unless man')

  })

})