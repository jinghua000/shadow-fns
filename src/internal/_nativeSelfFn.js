/**
 * Return a function like native method for itself
 * 
 * @param {String} fnName 
 * @return {Function}
 * @sign String -> Function
 * @see concat, includes, slice
 */
const _nativeSelfFn = fnName => (...args) => data => data[fnName](...args)

export default _nativeSelfFn

