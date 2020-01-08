/**
 * @see nAry
 */
const _nAry = n => fn => (...args) => fn(...args.slice(0, n))

export default _nAry