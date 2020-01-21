const eq = require('./util/eq')
const join = require('current-path-join')
const fs = require('fs')
const { exec } = require('child_process')

const testFilePath = join('../demo/packing-test.umd.js')

describe('test other things', function () {

  it('pack should with no redundant code', function (done) {

    exec('yarn test:pack', err => {
      if (err) {
        throw err
      }
      
      const buffer = fs.readFileSync(testFilePath)

      eq(buffer.length, 2064)

      done()
    })

  })

})
