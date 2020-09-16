const fs = require('fs-extra')
const join = require('current-path-join')
const chalk = require('chalk')

const f = require('../lib')
const filePath = join('../types/index.d.ts')

;(async () => {

  await fs.ensureFile(filePath)

  const outputArray = []
  outputArray.push(`export declare const VERSION: string;`)

  Object.keys(f).sort(f.asc).forEach(k => {
    if (k === 'VERSION') return 
    outputArray.push(`// https://github.com/jinghua000/shadow-fns/blob/master/doc/README.md#${k}`)
    outputArray.push(`export declare const ${k}: (...args: any[]) => any;`)
  })

  await fs.writeFile(filePath, outputArray.join(`\n`), 'utf8')

})()

console.log(chalk.cyan('Build declare file successfully!'))
console.log(chalk.green(filePath))