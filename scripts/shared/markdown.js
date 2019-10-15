'use strict'

const f = require('../../lib')
const { replaceBlank } = require('./tools')
const { CATEGORYS } = require('./config')

/**
 * markdown link
 */
const link = (content, link) => `[${content}](${link})`

/**
 * handle string like this `foo, bar, baz`
 * @param {Function}
 * @return {Function}
 */
const handleMultiplyString = fn => f.pipe(
  replaceBlank, 
  f.split(','), 
  f.map(fn),
  f.join(', '),
)

/**
 * replace one `@see` str to link
 */
const makeSee = content => link(content, `#${content}`)

/**
 * replace avaliable `@catrgory` to link
 */
const makeCatSee = content => CATEGORYS.includes(content)
  ? link(content, `#${f.toLower(content)}`)
  : content

/**
 * backtop link
 */
const backTop = link('Back to top', '#category')

/**
 * view source
 */
const viewSource = id => link('View source', `../src/${id}.js`)

/**
 * category title
 */
const categoryTitle = `## Category  \n\n`

/** 
 * make `@see` link 
 * 
 * @param {String}
 * @return {String}
 */
const makeSees = handleMultiplyString(makeSee)

/**
 * make `@category` link
 */
const makeCatSees = handleMultiplyString(makeCatSee)

module.exports = {
  link,
  backTop,
  viewSource,
  makeSee,
  makeSees,
  makeCatSees,
  categoryTitle,
}