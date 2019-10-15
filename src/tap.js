import _curry2 from './internal/_curry2'

/**
 * Execute the given function with the supplied params, then return the params
 * 
 * Notice that this perhaps change the params passed
 * 
 * This function usual use in case like this 
 * 
 * `function foo () { let a = {}; a.a = 123; return a }`
 * 
 * To
 * 
 * `const foo = () => f.tap(obj => obj.a = 123, {})`
 * 
 * **NOTE:** Not Pure
 * 
 * @param {Function} fn 
 * @param {*} e
 * @return {*}
 * @category Tools, curried
 * @sign (a -> x) -> a -> a
 * @example
 *    
 * let fn = obj => obj.a = 123
 * 
 * f.tap(fn)({}) // => { a: 123 }
 */
const tap = _curry2((fn, e) => { fn(e); return e })

export default tap