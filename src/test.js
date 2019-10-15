import _curry2 from './internal/_curry2'

/**
 * Just Like `RegExp.prototype​.test`
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 * 
 * But this is a little different,
 * it is curried and `RegExp` is the first parameter
 * 
 * @param {RegExp} reg 
 * @param {String} str
 * @return {Boolean}
 * @category Native, curried
 * @sign RegExp -> String -> Boolean
 * @see match
 * @example
 * 
 * let test = f.test(/hello/)
 * 
 * test('hello world') // => true
 * test('goodbye world') // => false
 */
const test = _curry2((reg, str) => reg.test(str))

export default test