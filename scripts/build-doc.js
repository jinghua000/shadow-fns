'use strict'

const jsdoc2md = require('jsdoc-to-markdown')
const dmd = require('dmd')
const join = require('current-path-join')
const chalk = require('chalk')
const fs = require('fs')

const f = require('../lib')
const docPath = join('../doc/README.md')
const { 
  makeSees, 
  makeSee, 
  makeCatSees, 
  viewSource, 
  backTop, 
  categoryTitle 
} = require('./shared/markdown')
const { CATEGORYS } = require('./shared/config')

/**
 * generated doc data
 * 
 * @type {Array<DocOption>}
 */
const DOC_DATA = []

/**
 * doc data option
 */
function DocOption (data) {

  /**
   * @type {Object}
   * @property {Object} opt
   * @property {String} content
   */
  return {
    opt: data[0],
    content: dmd(data),
  }
}

/**
 * write to README
 */
function write (data) {
  fs.writeFile(docPath, data, 'utf8', err => {
    if (err) throw err
  })
}

/**
 * process the template data
 */
function processData (data) {
  return data.map(datum => {

    if (!datum.category) {
      console.warn(`${datum.id} has no category`)
    } else if (!CATEGORYS.includes(datum.category.split(',')[0])) {
      console.warn(`${datum.id} has wrong category`)
    }

    if (!datum.since) {
      console.warn(`${datum.id} has not since field`)
    }

    datum.category = makeCatSees(f.or('', datum.category))
    datum.see = f.or([], datum.see).map(makeSees)
    datum.scope = undefined
    datum.kind = undefined

    return datum
  })
}

/**
 * join ervery function doc
 */
function joinDoc (arr) {
  let str = ''

  arr.forEach(elem => {
    DOC_DATA.push(elem)

    str += elem.content
    str += `  \n\n`
    str += viewSource(elem.opt.id)
    str += `&nbsp;&nbsp;&nbsp;&nbsp;`
    str += backTop
    str += `  \n\n`
  })

  return str
}

/**
 * category nav
 */
function makeNav () {
  let str = ''

  str += categoryTitle

  CATEGORYS.forEach(cat => {
    str += `### ${cat} \n\n`

    DOC_DATA
      .filter(data => (data.opt.category || '').includes(cat))
      .forEach(data => str += `- ${makeSee(data.opt.id)}  \n`)

    str += `\n\n`
  })

  return str
}

/**
 * add header and footer
 */
function enrichDoc (doc) {
  return [
    `# API documentation  \n\n`,
    `${makeNav()}  \n\n`,
    doc,
    `  \n\n`,
  ].join('')
}

/**
 * generate one function doc md
 */
function generate (filePath) {
  return new Promise(resolve => {
    jsdoc2md
      .getTemplateData({ files: filePath })
      // .then(f.trace('\n\n======template data======\n\n'))
      .then(processData)
      // .then(f.trace('\n\n======after process======\n\n'))
      .then(DocOption)
      .then(resolve)
  })
}

/**
 * generate all function doc md
 */
function generateAll () {
  return new Promise(resolve => {
    let docArr = []

    Object.keys(f).sort(f.asc).forEach((key, index) => {
      // if (!['toPairs', 'pick'].includes(key)) return

      const filePath = join(`../src/${key}.js`)

      console.log('index:', chalk.yellow(index))
      console.log('filesPath:', chalk.green(filePath))

      docArr.push(generate(filePath))
    })

    Promise.all(docArr).then(resolve)
  })
}

/**
 * build the doc
 */
const build = f.pipeAsync(
  generateAll,
  joinDoc,
  enrichDoc,
  write,
)

build()