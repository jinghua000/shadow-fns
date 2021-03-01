(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.f = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Always return `false`
   * 
   * @param {*} _ 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic
   * @sign x -> Boolean
   * @see T
   * @example
   * 
   * f.F() // => fasle
   * f.F(10) // => fasle
   * f.F(null) // => fasle
   */
  const F = _ => false;

  /**
   * Always return `true`
   * 
   * @param {*} _ 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic
   * @sign x -> Boolean
   * @see F
   * @example
   * 
   * f.T() // => true
   * f.T(10) // => true
   * f.T(null) // => true
   */
  const T = _ => true;

  /**
   * Similar to `f.curryN`
   * 
   * @see curryN
   */
  const _curryN = n => fn => {
    const curried = (...args) => 
      args.length < n
        ? (...args2) => curried(...args, ...args2)
        : fn(...args);
    return curried
  };

  /**
   * @see _curryN
   */
  const _curry2 = _curryN(2);

  /**
   * Like `>`
   * 
   * Check the second parameter is greater than the first
   * 
   * @param {*} x 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Boolean
   * @see lt, gte
   * @example
   * 
   * const greaterThan5 = f.gt(5)
   * 
   * greaterThan5(6) // => true
   * greaterThan5(5) // => false
   * greaterThan5(4) // => false
   */
  const gt = _curry2((x, e) => e > x);

  /**
   * Like `>=`
   * 
   * Check the second parameter is bigger than or equal with the first
   * 
   * @param {*} x 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Boolean
   * @see lte, gt
   * @example
   * 
   * const greaterOrEuqal5 = f.gte(5)
   * 
   * greaterOrEuqal5(6) // => true
   * greaterOrEuqal5(5) // => true
   * greaterOrEuqal5(4) // => false
   */
  const gte = _curry2((x, e) => e >= x);

  /**
   * Like `<`
   * 
   * Check the second parameter is less than the first
   * 
   * @param {*} x 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Boolean
   * @see gt, lte
   * @example
   * 
   * const lessThan5 = f.lt(5)
   * 
   * lessThan5(6) // => false
   * lessThan5(5) // => false
   * lessThan5(4) // => true
   */
  const lt = _curry2((x, e) => e < x);

  /**
   * Like `<=`
   * 
   * Check the second parameter is less than or equal with the first
   * 
   * @param {*} x 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Boolean
   * @see gte, lt
   * @example
   * 
   * const lessOrEqual5 = f.lte(5)
   * 
   * lessOrEqual5(6) // => false
   * lessOrEqual5(5) // => true
   * lessOrEqual5(4) // => true
   */
  const lte = _curry2((x, e) => e <= x);

  /**
   * Like `+`
   * 
   * The second parameter add the first 
   * 
   * @param {*} x 
   * @param {*} e
   * @return {Number|String}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> a
   * @see subtract
   * @example
   * 
   * f.add(1)(2) // => 3
   * f.add('a')('b') // => 'ba'
   * f.add(undefined)(undefined) // => NaN
   */
  const add = _curry2((x, e) => e + x);

  /**
   * Like `-`
   * 
   * The second parameter subtract the first 
   * 
   * @param {Number} x 
   * @param {Number} e
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign Number -> Number -> Number
   * @see add
   * @example
   * 
   * f.subtract(3)(1) // => -2
   * f.subtract(3)('a') // => NaN
   */
  const subtract = _curry2((x, e) => e - x);

  /**
   * Like `*`
   * 
   * The second parameter multiply the first 
   * 
   * @param {Number} x 
   * @param {Number} e 
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign Number -> Number -> Number
   * @see divide
   * @example 
   * 
   * const multiply3 = f.multiply(3)
   * 
   * multiply3(2) // => 6
   * multiply3(3) // => 9
   */
  const multiply = _curry2((x, e) => e * x);

  /**
   * Like `/`
   * 
   * The second parameter divide the first 
   * 
   * @param {Number} x 
   * @param {Number} e 
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign Number -> Number -> Number
   * @see multiply
   * @example 
   * 
   * const divide3 = f.divide(3)
   * 
   * divide3(9) // => 3
   * divide3(12) // => 4
   */
  const divide = _curry2((x, e) => e / x);

  /**
   * Always return the first parameter
   * 
   * @param {*} e 
   * @param {*} _
   * @return {*}
   * @since 0.1.0
   * @category Tools
   * @sign a -> x -> a
   * @see identity
   * @example
   *    
   * const obj = {}
   * 
   * f.always(10)(123) // => 10
   * f.always(10)(null) // => 10
   * f.always(obj)() === obj // => true
   */
  const always = e => _ => e;

  /**
   * Return the parameter passed and do nothing
   * 
   * It will be useful in some special case
   * 
   * @param {*} x 
   * @return {*}
   * @since 0.1.0
   * @category Tools
   * @sign a -> a
   * @see always
   * @example
   * 
   * const obj = {}
   * 
   * f.identity(10) // => 10
   * f.identity(obj) === obj // => true
   */
  const identity = x => x;

  /**
   * Like `&&`
   * 
   * Return the second if the second parameter is not true
   * 
   * Return the first if the second parameter is true
   * 
   * @param {*} x
   * @param {*} e
   * @return {*}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> b -> b | a
   * @see or
   * @example
   * 
   * f.and(true)(false) // => false
   * f.and(10)(20) // => 10
   * f.and('aaa')(0) // => 0
   */
  const and = _curry2(
    (x, e) => e && x
  );

  /**
   * Like `||`
   * 
   * Return the second if the second parameter is true
   * 
   * Return the first if the second parameter is not true
   * 
   * @param {*} x
   * @param {*} e
   * @return {*}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> b -> b | a
   * @see and
   * @example
   * 
   * f.or(true)(false) // => true
   * f.or(10)(20) // => 20
   * f.or('aaa')(0) // => 'aaa'
   */
  const or = _curry2(
    (x, e) => e || x
  );

  /**
   * Compare the two parameters and return the bigger one 
   * 
   * @param {Number|String} a 
   * @param {Number|String} b 
   * @return {Number|String}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign (a, a) -> a
   * @see min
   * @example
   * 
   * const arr = [1, 3, 10, 4, 9]
   * 
   * arr.reduce(f.max) // => 10
   */
  const max = _curry2((a, b) => a > b ? a : b );

  /**
   * Compare the two parameters and return the smaller one 
   * 
   * @param {Number|String} a 
   * @param {Number|String} b 
   * @return {Number|String}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign (a, a) -> a
   * @see max
   * @example
   * 
   * const arr = [1, 3, 10, 4, 9]
   * 
   * arr.reduce(f.min) // => 1
   */
  const min = _curry2((a, b) => a < b ? a : b );

  /**
   * Return the nth element of the data
   * 
   * Support negative number
   * 
   * @param {Number} index 
   * @param {String|Array} list
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign Number -> String -> String
   * @sign Number -> [a] -> a
   * @see first, last
   * @example
   * 
   * const str = 'abcdefg'
   * f.nth(3)(str) // => d
   * f.nth(-2)(str) // => f
   * 
   * const arr = [1, 2, 3, 4, 5]
   * f.nth(5)(arr) // => undefined
   * f.nth(-1)(arr) // => 5
   */
  const nth = _curry2((index, list) => list[index < 0 ? list.length + index : index]);

  /**
   * Return the first element of the data
   * 
   * @param {String|Array} list
   * @return {*}
   * @since 0.1.0
   * @category Tools
   * @sign String -> String 
   * @sign [a] -> a
   * @see last, nth
   * @example
   * 
   * const str = 'abcdefg'
   * f.first(str) // => a
   * 
   * const arr = [1, 2, 3, 4, 5]
   * f.first(arr) // => 1
   */
  const first = list => list[0];

  /**
   * Return the last element of the data
   * 
   * @param {String|Array} list
   * @return {*}
   * @since 0.1.0
   * @category Tools
   * @sign String -> String
   * @sign [a] -> a
   * @see first, nth
   * @example
   * 
   * const str = 'abcdefg'
   * f.last(str) // => g
   * 
   * const arr = [1, 2, 3, 4, 5]
   * f.last(arr) // => 5
   */
  const last = list => list[list.length - 1];

  /**
   * If the first parameter smaller than the second one, return -1,
   * if bigger, return 1,
   * else 0 
   * 
   * Used for sort array in ascending
   * 
   * @param {*} a 
   * @param {*} b 
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Number
   * @see desc, ascend
   * @example
   * 
   * const arr = [3,2,1,4,5]
   * 
   * f.sort(f.asc)(arr) // => [1,2,3,4,5]
   */
  const asc = _curry2((a, b) => a < b ? -1 : a > b ? 1 : 0);

  /**
   * @see _curryN
   */
  const _curry3 = _curryN(3);

  /**
   * Pass a function and sort by the returns in ascending
   * 
   * @param {Function} fn
   * @param {*} a 
   * @param {*} b 
   * @return {Number}
   * @since 0.1.0
   * @category Tools, curry3
   * @sign (a -> x) -> a -> a -> Number
   * @see asc, descend
   * @example
   * 
   * const users = [
   *   { name: 'human', age: 12 },
   *   { name: 'cat', age: 7 },
   *   { name: 'dog', age: 5 },
   * ]
   * 
   * const sortByAge = f.sort(f.ascend(f.prop('age')))
   * 
   * sortByAge(users)
   * // =>
   * // [
   * //   { name: 'dog', age: 5 },
   * //   { name: 'cat', age: 7 },
   * //   { name: 'human', age: 12 },
   * // ]
   */
  const ascend = _curry3((fn, a, b) => asc(fn(a), fn(b)));

  /**
   * If the first parameter smaller than the second one, return 1,
   * if bigger, return -1,
   * else 0 
   * 
   * Used for sort array in descending
   * 
   * @param {*} a 
   * @param {*} b 
   * @return {Number}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> a -> Number
   * @see asc, descend
   * @example
   * 
   * const arr = [3,2,1,4,5]
   * 
   * f.sort(f.desc)(arr) // => [5,4,3,2,1]
   */
  const desc = _curry2((a, b) => a < b ? 1 : a > b ? -1 : 0);

  /**
   * Pass a function and sort by the returns in descending
   * 
   * @param {Function} fn 
   * @param {*} a 
   * @param {*} b 
   * @return {Number}
   * @since 0.1.0
   * @category Tools, curry3
   * @sign (a -> x) -> a -> a -> Number
   * @see desc, ascend
   * @example
   * 
   * const users = [
   *   { name: 'dog', age: 5 },
   *   { name: 'cat', age: 7 },
   *   { name: 'human', age: 12 },
   * ]
   * 
   * const sortByAgeDesc = f.sort(f.descend(f.prop('age')))
   * 
   * sortByAgeDesc(users)
   * // =>
   * // [
   * //   { name: 'human', age: 12 },
   * //   { name: 'cat', age: 7 },
   * //   { name: 'dog', age: 5 },
   * // ]
   */
  const descend = _curry3((fn, a, b) => desc(fn(a), fn(b)));

  /**
   * Execute the given function with the supplied params, then return the params
   * 
   * Notice that this perhaps change the params passed
   * 
   * This function usual use in case like this 
   * 
   * `function foo () { const a = {}; a.a = 123; return a }`
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
   * @since 0.1.0
   * @category Tools, curry2
   * @sign (a -> x) -> a -> a
   * @example
   *    
   * const fn = obj => obj.a = 123
   * 
   * f.tap(fn)({}) // => { a: 123 }
   */
  const tap = _curry2((fn, e) => { fn(e); return e });

  /**
   * Use `Object.assign` to merge the objects passed and return a new object
   * 
   * **NOTE:** Not support prototype chain
   * 
   * **NOTE:** Shallow copy
   * 
   * @param  {...Object} args 
   * @return {Object}
   * @since 0.1.0
   * @category Object
   * @sign ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }
   * @see deepMerge
   * @example
   * 
   * const obj1 = { a: 123 }
   * const obj2 = { b: 234 }
   * 
   * f.merge(obj1, obj2) // => { a: 123, b: 234 }
   */
  const merge = (...args) => Object.assign({}, ...args);

  /**
   * Return a new object (shallow copy) which associate the key and value 
   * 
   * @param {*} key 
   * @param {*} val 
   * @param {Object} obj 
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry3
   * @sign x -> x -> Object -> Object
   * @see dissoc
   * @example
   * 
   * const obj = { a: 123 }
   * 
   * f.assoc('b', 234)(obj) // => { a: 123, b: 234 }
   */
  const assoc = _curry3(
    (key, val, obj) => tap(_obj => _obj[key] = val, merge(obj))
  );

  /**
   * Return a new object (shallow copy) which delete the key
   * 
   * @param {*} key 
   * @param {Object} obj 
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry2
   * @sign x -> Object -> Object
   * @see dissoc
   * @example
   * 
   * const obj = { a: 123, b: 234 }
   * 
   * f.dissoc('b')(obj) // => { a: 123 }
   */
  const dissoc = _curry2(
    (key, obj) => tap(_obj => delete _obj[key], merge(obj))
  );

  /**
   * Check two element strict equal by `===`
   * 
   * @param {*} x 
   * @param {*} e
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @see equals
   * @example 
   * 
   * f.eq(1)(1) // => true
   * f.eq(NaN)(NaN) // => false
   * f.eq({})({}) // => false
   */
  const eq = _curry2(
    (x, e) => e === x
  );

  /**
   * Check the tpye of element
   * 
   * Use `Object.prototype.toString`
   * 
   * @param {*} e 
   * @return {String}
   * @since 0.1.0
   * @category Tools
   * @sign x -> String
   * @see is
   * @example
   * 
   * f.type([]) // => Array
   * f.type({}) // => Object
   * f.type('') // => String
   */
  const type = e => Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/, '$1');

  /**
   * Equal with `Object.keys`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   * 
   * @param {Object} obj 
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign Object -> Array
   * @see values
   * @example
   * 
   * const obj = { a: 1, b: 2, c: 3 }
   * 
   * keys(obj) // => ['a', 'b', 'c']
   */
  const keys = Object.keys;

  /**
   * Check every element strict equal by `===`
   * 
   * Support `[]` and `{}`
   * 
   * Also `NaN` considered the same
   * 
   * **NOTE:** Not support prototype chain
   * 
   * @param {*} x 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic, curry2
   * @sign a -> b -> Boolean
   * @see eq
   * @example 
   *    
   * f.equals([1, 2, 3])([1, 2, 3]) // => true
   * f.equals([1, 2, 3])([1, 2, '3']) // => false
   * f.equals({ a: 123 })({ a: 123 }) // => true
   */
  const equals = _curry2((x, e) => {
    if (e === x) return true

    const t1 = type(e);
    const t2 = type(x);

    if (t1 === 'Array' && t2 === 'Array') {
      const length = e.length;

      if (length !== x.length) return false

      for (let i = 0; i < length; i++) {
        if (!equals(x[i], e[i])) return false
      }

      return true
    }

    if (t1 === 'Object' && t2 === 'Object') {
      const _keys = keys(e);
      const length = _keys.length;

      if (length !== keys(x).length) return false

      for (let i = 0; i < length; i++) {
        const key = _keys[i];
        if (!equals(x[key], e[key])) return false
      }

      return true
    }

    return e !== e && x !== x
  });

  /**
   * Read the key of the object
   * 
   * Like `obj[key]`
   * 
   * @param {*} key
   * @param {Object} obj
   * @return {*}
   * @since 0.1.0
   * @category Object, curry2
   * @sign x -> Object -> x
   * @see props, propOr, propEq
   * @example
   * 
   * const a = { a: 1, b: 0 }
   * const b = { a: 2 }
   * const getA = f.prop('a')
   * const getB = f.prop('b')
   * 
   * getA(a) // => 1
   * getA(b) // => 2
   * getB(b) // => undefined
   */
  const prop = _curry2((key, obj) => obj[key]);

  /**
   * Select the values by the supplied keys 
   * 
   * Return an array
   * 
   * @param {Array} keys 
   * @param {Object} obj
   * @return {Array}
   * @since 0.1.0
   * @category Object, curry2
   * @sign Array -> Object -> Array
   * @see prop
   * @example
   * 
   * const obj = { a: 1, b: 2, c: 3 }
   * 
   * f.props(['a', 'b', 'c', 'd'])(obj)
   * // => [1, 2, 3, undefined]
   */
  const props = _curry2((keys, obj) => keys.map(key => obj[key]));

  /**
   * Supply the key and default value
   * 
   * Read the key of the object
   * 
   * If true return the corresponding value
   * 
   * Else return the default value
   * 
   * Like `obj[key] || def`
   * 
   * @param {*} key 
   * @param {*} def 
   * @param {Object} obj
   * @return {*}
   * @since 0.1.0
   * @category Object, curry3
   * @sign (a, b) -> Object -> a | b
   * @see prop, propEq
   * @example
   * 
   * const readA = f.propOr('a', false)
   * 
   * readA({ a: 123 }) // => 123
   * readA({}) // => false
   */
  const propOr = _curry3((key, def, obj) => obj[key] || def);

  /**
   * Read the key of object
   * 
   * Check the corresponding value is equal with supplied val
   * 
   * Use `===`
   * 
   * @param {*} key 
   * @param {*} val 
   * @param {Object} obj
   * @return {*}
   * @since 0.1.0
   * @category Object, curry3
   * @sign (a, b) -> Object -> Boolean
   * @see prop, propOr
   * @example
   * 
   * const checkEq = f.propEq('a', 123)
   * const obj1 = { a: 123 }
   * const obj2 = { a: 234 }
   * 
   * checkEq(obj1) // => true
   * checkEq(obj2) // => false
   */
  const propEq = _curry3((key, val, obj) => obj[key] === val);

  /**
   * Check the element is `undefined` or `null`
   * 
   * @param {*} e
   * @return {Boolean} 
   * @since 0.1.0
   * @category Tools
   * @sign x -> Boolean
   * @see isExist, isEmpty
   * @example
   * 
   * f.isNil(null) // => true
   * f.isNil(undefined) // => true
   * f.isNil('undefined') // => false
   */
  const isNil = e => e == null;

  /**
   * Okay, this method just like `Object.prototype.hasOwnProperty.call`
   * 
   * @param {*} args 
   * @return {Boolean}
   * @sign x -> Boolean
   * @see has
   */
  const _has = (...args) => Object.prototype.hasOwnProperty.call(...args);

  /**
   * Check Object has the supplied key
   * 
   * Use `Object.prototype.hasOwnProperty`
   * 
   * @param {*} key 
   * @param {Object} obj 
   * @return {Boolean}
   * @since 0.1.0
   * @category Object, curry2
   * @sign x -> Object -> Boolean
   * @see hasPath
   * @example
   * 
   * const hasA = f.has('a')
   * 
   * hasA({ a: 123 }) // => true
   * hasA({ b: 123 }) // => fasle
   */
  const has = _curry2((key, obj) => !isNil(obj) && _has(obj, key));

  /**
   * Check the object has the path
   * 
   * Check every element with `f.has`
   * 
   * @param {Array} arr 
   * @param {Object} obj 
   * @return {Boolean}
   * @since 0.1.0
   * @category Object, curry2
   * @sign Array -> Object -> Boolean
   * @see has
   * @example
   * 
   * const hasPath = f.hasPath(['a', 'a'])
   * 
   * hasPath({ a: { a: 123 } }) // => true
   * hasPath({ b: 123 }) // => false
   */
  const hasPath = _curry2((arr, obj) => {
    let val = obj;

    for (let i = 0; i < arr.length; i++) {
      const k = arr[i];
      if (!has(k, val)) return false
      val = val[k];
    }

    return true
  });

  /**
   * Read the path of the object
   * 
   * If key not exist will return `undefined`
   * 
   * If not pass path will return object self
   * 
   * Can also handle array.
   * 
   * @param {Array} arr 
   * @param {Object} obj
   * @return {*} 
   * @since 0.1.0
   * @category Object, curry2
   * @sign Array -> Object -> x
   * @see pathOr, pathEq
   * @example
   * 
   * const readPath = f.path(['a', 'a'])
   * const obj1 = { a: { a: 123 } }
   * const obj2 = { a: { b: 123 } }
   * 
   * readPath(obj1) // => 123
   * readPath(obj2) // => undefined
   */
  const path = _curry2((arr, obj) => {
    let val = obj;

    for (let i = 0; i < arr.length; i++) {
      if (isNil(val)) return
      val = val[arr[i]];
    }

    return val
  });

  /**
   * Read the path of object by `f.path`
   * 
   * If not true return default value
   * 
   * @param {Array} arr 
   * @param {*} def 
   * @param {Object} obj
   * @return {*}
   * @since 0.1.0
   * @category Object, curry3
   * @sign (Array, a) -> Object -> x | a
   * @see path, pathEq
   * @example
   * 
   * const readPathOr = f.pathOr(['a', 'a'], 'no!')
   * 
   * readPathOr({ a: 123 }) // => no!
   * readPathOr({ a: { a: 'yes' } }) // => yes!
   */
  const pathOr = _curry3((arr, def, obj) => path(arr)(obj) || def);

  /**
   * Read the path of the object
   * 
   * Check the returns is equal with the supplied value
   * 
   * @param {Array} arr 
   * @param {*} val 
   * @param {Object} obj
   * @return {Boolean}
   * @since 0.1.0
   * @category Object, curry3
   * @sign (Array, x) -> Object -> Boolean
   * @see path, pathOr
   * @example
   * 
   * const checkPath = f.pathEq(['a', 'a'], 123)
   * 
   * checkPath({ b: 999 }) // => false
   * checkPath({ a: { a: 123 } }) // => true
   */
  const pathEq = _curry3((arr, val, obj) => path(arr, obj) === val);

  /**
   * Check the element is the instance of supplied constructor
   * 
   * Support prototype chain 
   * 
   * @param {Function} constructor 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign Function -> x -> Boolean
   * @see type
   * @example
   * 
   * class C {}
   * const c = new C()
   * 
   * f.is(C)(c) // => true  
   * f.is(Object)(c) // => true  
   * f.is(Object)([]) // => true
   * f.is(Number)(10) // => true
   * f.is(String)(10) // => false
   */
  const is = _curry2((constructor, e) => !isNil(e) && e.constructor === constructor ||  e instanceof constructor);

  /**
   * Deep copy the object and return a new object
   * 
   * Support `[]` and `{}`, others will return themself
   * 
   * **NOTE:** Not support prototype chain
   * 
   * @param {*} data 
   * @return {*}
   * @since 0.1.0
   * @category Tools
   * @sign a -> a
   * @example
   * 
   * const arr = [{}, {}, {}]
   * const arr2 = f.clone(arr) // => [{}, {}, {}]
   * arr[0] === arr2[0] // => false
   */
  const clone = data => 
    type(data) === 'Array'
      ? tap(
        arr => data.forEach(v => arr.push(clone(v))), 
        []
      )
      : type(data) === 'Object'
        ? tap(
          obj => keys(data).forEach(k => obj[k] = clone(data[k])), 
          {}
        )
        : data;

  /**
   * Return a function like native method for itself
   * 
   * @param {String} fnName 
   * @return {Function}
   * @sign String -> Function
   * @see concat, includes, slice
   */
  const _nativeSelfFn = fnName => (...args) => data => data[fnName](...args);

  /**
   * Just like `Array.prototype.every`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   * 
   * @param {Function} fn 
   * @param {Array} [thisArg] 
   * @param {Array} data
   * @return {Boolean}
   * @since 0.1.0
   * @category Native
   * @sign (a -> Boolean) -> [a] -> Boolean
   * @see some, none
   * @example
   * 
   * const everyGreaterThan3 = f.every(f.gt(3))
   * 
   * everyGreaterThan3([2, 3, 4]) // => false
   * everyGreaterThan3([4, 5, 6]) // => true
   */
  const every = _nativeSelfFn('every');

  /**
   * Just like `Array.prototype.some`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   * 
   * @param {Function} fn 
   * @param {Array} [thisArg] 
   * @param {Array} data
   * @return {Boolean}
   * @since 0.1.0
   * @category Native
   * @sign (a -> Boolean) -> [a] -> Boolean
   * @see every, none
   * @example
   * 
   * const someGreaterThan3 = f.some(f.gt(3))
   * 
   * someGreaterThan3([2, 3, 4]) // => true
   * someGreaterThan3([1, 2, 3]) // => false
   */
  const some = _nativeSelfFn('some');

  /**
   * Return a function and the returns of that is opposite to the function passed
   * 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign (...x -> result) -> (...x -> !result)
   * @example
   * 
   * const gt3 = f.gt(3)
   * const arr = [1, 2, 3, 4, 5]
   * 
   * arr.filter(gt3) // => [4, 5]
   * arr.filter(f.opposite(gt3)) // => [1, 2, 3]
   */
  const opposite = fn => (...args) => !fn(...args);

  /**
   * Opposite to `Array.prototype.every`
   * 
   * Only support first parameter(Function)
   * 
   * @param {Function} fn
   * @param {Array} arr
   * @return {Boolean}
   * @since 0.1.0
   * @category Array, curry2
   * @sign (a -> Boolean) -> [a] -> Boolean
   * @see every, some
   * @example
   * 
   * const noneGreaterThan3 = f.none(f.gt(3))
   * 
   * noneGreaterThan3([1, 2, 3]) // => true
   * noneGreaterThan3([2, 3, 4]) // => false
   */
  const none = _curry2((fn, arr) => arr.every(opposite(fn)));

  /**
   * Equal with `Object.values`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   * 
   * @param {Object} obj 
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign Object -> Array
   * @see keys
   * @example
   * 
   * const obj = { a: 1, b: 2, c: 3 }
   * 
   * f.values(obj) // => [1, 2, 3]
   */
  const values = Object.values;

  /**
   * Sum the array
   * 
   * Use `Array.prototype.reduce`
   * 
   * @param {Array} arr 
   * @return {*}
   * @since 0.1.0
   * @category Array
   * @sign [a] -> a
   * @example
   * 
   * f.sum([1, 2, 3, 4]) // => 10
   * f.sum(['a', 'b', 'c', 'd']) // => abcd
   */
  const sum = arr => arr.reduce((acc, cur) => acc += cur);

  /**
   * Just like `Array.prototype.join`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join  
   * 
   * @param {String} [separator]
   * @param {Array} data
   * @return {String} 
   * @since 0.1.0
   * @category Native
   * @sign String -> Array -> String
   * @see split
   * @example
   * 
   * const arr = ['i', 'have', 'a', 'plan']
   * 
   * f.join(' ')(arr) // => 'i have a plan'
   */
  const join = _nativeSelfFn('join');

  /**
   * Just Like `Array.prototype.map`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
   * 
   * @param {Function} fn
   * @param {Array} [thisArg]
   * @param {Array} arr
   * @since 0.1.0
   * @category Native
   * @return {Array}
   * @sign (a -> b) -> [a] -> [b]
   * @example
   * 
   * const mapDouble = f.map(f.multiply(2))
   * 
   * mapSquare([1, 2, 3]) // => [2, 4, 6]
   */
  const map = _nativeSelfFn('map');

  /**
   * Like `Array.prototype.map` for `{}`
   * 
   * Supplied a function and object
   * 
   * Return a new object, 
   * pass every object value to function
   * and set them as the returns of function
   * 
   * @param {Function} fn
   * @param {Object} obj
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry2
   * @sign (a -> b) -> { k: a } -> { k: b }
   * @example 
   * 
   * const obj = { a: 1, b: 2, c: 3 }
   * const everyAdd1 = f.mapObj(f.add(1))
   * 
   * everyAdd1(obj) // => { a: 2, b: 3, c: 4 }
   */
  const mapObj = _curry2((fn, obj) => tap(
    _obj => Object.keys(obj).forEach(
      k => _obj[k] = fn(obj[k])
    ), {}
  ));

  /**
   * Just Like `Array.prototype.reduce`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   * 
   * @param {Function} fn
   * @param {*} [def]
   * @param {Array} data
   * @return {*}
   * @since 0.1.0
   * @category Native
   * @sign (x -> a) -> Array -> a
   * @example
   * 
   * const sum = f.reduce((acc, cur) => acc += cur)
   * 
   * sum([1, 2, 3]) // => 6
   */
  const reduce = _nativeSelfFn('reduce');

  /**
   * Similar to `Array.prototype.splice`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   * 
   * But this function will not change the supplied array
   * 
   * Return changed array
   * 
   * **NOTE:** Shallow Copy
   * 
   * @param {Number} arg1
   * @param {Number} [arg2]
   * @param {...*} [arg3]
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign (Number, Number, *, ...) -> Array -> Array
   * @example
   * 
   * const replaceTwo = f.splice(1, 2, 'two', 'two')
   * const arr = ['one', 'two', 'three', 'four']
   * 
   * replaceTwo(arr) // => ['one', 'two', 'two', 'four']
   */
  const splice = (...args) => arr => tap(_arr => _arr.splice(...args), [].concat(arr));

  /**
   * Similar to `Array.prototype.forEach`
   * 
   * But return the shallow copy of supplied array
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {Function} fn
   * @param {Array} [thisArg]
   * @param {Array} data
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign (a -> x) -> [a] -> [a]
   * @example
   * 
   * const logElems = f.forEach(f.unary(console.log))
   * 
   * logElems([1, 2, 3]) // => [1, 2, 3]
   * // logs: 1
   * // logs: 2
   * // logs: 3
   */
  const forEach = (...args) => arr => tap(_arr => _arr.forEach(...args), [].concat(arr));

  /**
   * Like `Array.prototype.sort`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   * 
   * But it will not change the supplied array
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {Function} [fn] 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign ((a, a) -> Number) -> [a] -> [a]
   * @see sortWith
   * @example
   * 
   * const sortAsc = f.sort(f.asc)
   * 
   * sortAsc([10, 9, 1, 3, 2]) // => [1, 2, 3, 9, 10]
   */
  const sort = (...args) => arr => [].concat(arr).sort(...args);

  /**
   * Sort the array with some comparator functions
   * 
   * When one function return 0, call the next one
   * 
   * And return a new array
   * 
   * Use `Array.prototype.sort`
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {...Function} fns 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array
   * @sign ((a, a) -> Number, ...) -> [a] -> [a]
   * @see sort
   * @example
   *    
   * // sort by age asc, then sort by name asc
   * const sortMethod = f.sortWith(
   *   f.ascend(f.prop('age')), 
   *   f.ascend(f.prop('name'))
   * )
   * 
   * const users = [
   *   { name: 'Elika', age: 10 },
   *   { name: 'Alice', age: 10 },
   *   { name: 'Mike', age: 5 },
   * ]
   * 
   * sortMethod(users)
   * // =>
   * // [
   * //   { name: 'Mike', age: 5 },
   * //   { name: 'Alice', age: 10 },
   * //   { name: 'Elika', age: 10 },
   * // ]
   * 
   */
  const sortWith = (...fns) => arr => [].concat(arr).sort(
    (a, b) => {
      let res;

      for (let i = 0; i < fns.length; i++) {
        res = fns[i](a, b);
        if (res !== 0) break
      }

      return res
    }
  );

  /**
   * Just like `Array.prototype.filter`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   * 
   * @param {Function} fn
   * @param {Array} [thisArg]
   * @param {Array} data
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign (a -> Boolean) -> [a] -> [a]
   * @see reject
   * @example
   *    
   * const greaterThan3 = f.filter(f.gt(3))
   * const arr = [1, 2, 3, 4, 5]
   * 
   * greaterThan3(arr) // => [4, 5]
   */
  const filter = _nativeSelfFn('filter');

  /**
   * Opposite to `Array.prototype.filter`
   * 
   * Only support first parameter
   * 
   * @param {Function} fn 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array, curry2
   * @sign (a -> Boolean) -> [a] -> [a]
   * @see filter
   * @example
   * 
   * const notGreaterThan3 = f.reject(f.gt(3))
   * const arr = [1, 2, 3, 4, 5]
   * 
   * notGreaterThan3(arr) // => [1, 2, 3]
   */
  const reject = _curry2((fn, arr) => arr.filter(opposite(fn)));

  /**
   * Just like `Array.prototype.find`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   * 
   * @param {Function} fn
   * @param {Array} [thisArg]
   * @param {Array} data
   * @return {*}
   * @since 0.1.0
   * @category Native
   * @sign (a -> Boolean) -> [a] -> a
   * @see findIndex
   * @example
   * 
   * const firstBiggerThan2 = f.find(f.gt(2))
   * const arr = [2, 3, 4, 5]
   * 
   * firstBiggerThan2(arr) // => 3
   */
  const find = _nativeSelfFn('find');

  /**
   * Just like `Array.prototype.findIndex`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   * 
   * @param {Function} fn
   * @param {Array} [thisArg]
   * @param {Array} data
   * @return {Number}
   * @since 0.1.0
   * @category Native
   * @sign (a -> Boolean) -> [a] -> Number
   * @see find
   * @example
   * 
   * const firstIndexBiggerThan2 = f.findIndex(f.gt(2))
   * const arr = [2, 3, 4, 5]
   * 
   * firstIndexBiggerThan2(arr) // => 1
   */
  const findIndex = _nativeSelfFn('findIndex');

  /**
   * Like `indexOf` method of `Array.prototype` and `String.prototype`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf  
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf  
   * 
   * @param {*} args
   * @param {Number} [fromIndex]
   * @param {Array|String} data
   * @return {Number}
   * @since 0.1.0
   * @category Native
   * @sign x -> a -> Number
   * @see lastIndexOf
   * @example
   * 
   * const findIndexA = f.indexOf('a')
   * 
   * findIndexA('abcabc') // => 0
   * findIndexA(['b', 'c', 'a']) // => 2
   * findIndexA(['b', 'c', 'd']) // => -1
   */
  const indexOf = _nativeSelfFn('indexOf');

  /**
   * Like `lastIndexOf` method of `Array.prototype` and `String.prototype`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf  
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf  
   * 
   * @param {*} args
   * @param {Number} [fromIndex]
   * @param {Array|String} data
   * @return {Number}
   * @since 0.1.0
   * @category Native
   * @sign x -> a -> Number
   * @see indexOf
   * @example
   * 
   * const findIndexA = f.lastIndexOf('a')
   * 
   * findIndexA('abcabc') // => 3
   * findIndexA(['b', 'c', 'a', 'a']) // => 3
   * findIndexA(['b', 'c', 'd']) // => -1
   */
  const lastIndexOf = _nativeSelfFn('lastIndexOf');

  /**
   * Generate a left-to-right function pipe
   * 
   * One's returns considered as next's parameter
   * 
   * Except the first function, others should be unary
   * 
   * @param {...Function} fns 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign (...a -> b, b -> c, ..., y -> z) -> (...a -> z)
   * @see pipeAsync
   * @example
   *    
   * // add 1 then multiply 2
   * const calc = f.pipe(f.add(1), f.multiply(2))
   * 
   * calc(1) // => 4
   * calc(3) // => 8
   */
  const pipe = (...fns) => fns.reduce(
    (acc, cur) => (...args) => cur(acc(...args))
  );

  /**
   * Generate a left-to-right async function pipe
   * 
   * Every functions need return a `Promise`
   * 
   * **NOTE:** Every function should be unary
   * 
   * @param {...Function} fns 
   * @param {*} arg
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign (a -> PromiseA, ..., z -> PromiseZ) -> (a -> PromiseZ)
   * @see pipe
   * @example
   * 
   * const addA = arg => new Promise(res => setTimeout(res, 100, arg + 'a'))
   * const addB = arg => new Promise(res => setTimeout(res, 100, arg + 'b'))
   * const addC = arg => new Promise(res => setTimeout(res, 100, arg + 'c'))
   * const addABC = f.pipeAsync(addA, addB, addC)
   * 
   * addABC('').then(console.log) // => after 300 ms logs: 'abc'
   */
  const pipeAsync = (...fns) => arg => fns.reduce(
    (acc, cur) => acc.then(cur),
    Promise.resolve(arg)
  );

  /**
   * Wait for some time and return a `Promise` instance
   * 
   * @param {Number} ms 
   * @param {*} arg 
   * @return {Promise}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign Number -> x -> Promise
   * @example
   * 
   * const fn = res => 'result is' + res
   * const sleepOneSec = sleep(1000)
   * 
   * sleepOneSec('hello').then(fn) 
   * // => after 1 sceond: 'result is hello'
   */
  const sleep = _curry2((ms, arg) => new Promise(res => setTimeout(res, ms, arg)));

  /**
   * Just like `Promise.prototype.then`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
   * 
   * @param {Function} fn1
   * @param {Function} [fn2]
   * @param {Promise} data 
   * @return {Promise}
   * @since 0.1.0
   * @category Native
   * @sign (Function, Function?) -> Promise -> Promise
   * @example
   *    
   * const fetchData = () => Promise.resolve({ name: 'Eric' })
   * const getName = f.then(f.prop('name'))
   * 
   * getName(fetchData()).then(console.log) // => logs: Eric
   */
  const then = _nativeSelfFn('then');

  /**
   * Return opposite boolean of the parameter supplied
   * 
   * @param {*} e 
   * @return {Boolean}
   * @since 0.1.0
   * @category Logic
   * @sign x -> Boolean
   * @see opposite
   * @example
   * 
   * f.not(true) // => false
   * f.not(null) // => true
   */
  const not = e => !e;

  /**
   * Check the element is not `undefined` or `null`
   * 
   * @param {*} e
   * @return {Boolean} 
   * @since 0.1.0
   * @category Tools
   * @sign x -> Boolean
   * @see isNil, isEmpty
   * @example
   * 
   * f.isExist(null) // => false
   * f.isExist(undefined) // => false
   * f.isExist('') // => true
   * f.isExist({}) // => true
   */
  const isExist = e => e != null;

  /**
   * Check the element is equal with one of below
   * `undefined`, `null`, `''`, `[]`, `{}`
   * 
   * @param {*} e
   * @return {Boolean} 
   * @since 0.1.0
   * @category Tools
   * @sign x -> Boolean
   * @see isNil
   * @example
   * 
   * f.isEmpty({}) // => true
   * f.isEmpty('') // => true
   * f.isEmpty([undefined]) // => false
   */
  const isEmpty = e => [
    undefined, null, '', [], {}
  ].some(equals(e));

  /**
   * Read the `length` property of supplied parameter
   * 
   * @param {*} e 
   * @return {Number}
   * @since 0.1.0
   * @category Tools
   * @sign x -> Number
   * @example
   * 
   * f.length([1, 2, 3]) // => 3
   * f.length('abc') // => 3
   */
  const length = e => e.length;

  /**
   * Return a new array with the reverse of the array supplied
   * 
   * And this not like `Array.prototype.reverse`, will not change the origin array
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {*} arr 
   * @return {Array} 
   * @since 0.1.0
   * @category Native
   * @sign [a, b, ..., z] -> [z, ..., b, a]
   * @example
   * 
   * const arr = [1, 2, 3]
   * 
   * f.reverse(arr) // [3, 2, 1]
   */
  const reverse = arr => [].concat(arr).reverse();

  /**
   * Deep flatten the array
   * 
   * Return a new array
   * 
   * **NOTE:** Shallow Copy
   * 
   * @param {Array} arr 
   * @return {Array}
   * @since 0.1.0
   * @category Array
   * @sign Array -> Array
   * @example
   * 
   * const arr = [1, [2], [[3, 4], 5]]
   * 
   * f.flatten(arr) // => [1, 2, 3, 4, 5]
   */
  const flatten = arr => arr.reduce(
    (acc, cur) => acc.concat(
      Array.isArray(cur) ? flatten(cur) : cur
    ), []
  );

  /**
   * Return a new array
   * 
   * Select unique elements in the array with `Set`
   * 
   * @param {Array} arr 
   * @return {Array}
   * @category Array
   * @since 0.1.0
   * @sign Array -> Array
   * @see difference, intersection, union
   * @example
   * 
   * const arr = [1, 2, 2, NaN, NaN]
   * 
   * f.uniq(arr) // => [1, 2, NaN]
   */
  const uniq = arr => Array.from(new Set(arr));

  /**
   * Return a new uniq array
   * 
   * Select unique elements either exist in one array or another
   * 
   * Order from second to first
   * 
   * **NOTE:** Shallow Copy
   * 
   * @param {Array} arrx 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array, curry2
   * @sign Array -> Array -> Array
   * @see difference, intersection, uniq
   * @example
   * 
   * const arr1 = [1, 2, 3]
   * const arr2 = [2, 2, 3, 4]
   * 
   * f.union(arr1)(arr2) // => [2, 3, 4, 1]
   */
  const union = _curry2((arrx, arr) => uniq([].concat(arr, arrx)));

  /**
   * Return a new uniq array
   * 
   * Select unique elements exist in one array and not in another 
   * 
   * Order from second to first
   * 
   * Use `Array.prototype.includes`
   * 
   * **NOTE:** Shallow Copy
   * 
   * @param {Array} arrx 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array, curry2
   * @sign Array -> Array -> Array
   * @see intersection, union, uniq
   * @example
   * 
   * const arr1 = [1, 3, 5]
   * const arr2 = [3, 5, 7]
   * 
   * f.difference(arr1)(arr2) // => [7, 1]
   */
  const difference = _curry2((arrx, arr) => uniq([].concat(arr, arrx)).filter(
    e => !arr.includes(e) || !arrx.includes(e)
  ));

  /**
   * Return a new uniq array
   * 
   * Select unique elements both exist in one array and another
   * 
   * Order from second to first
   * 
   * Use `Array.prototype.includes`
   * 
   * **NOTE:** Shallow Copy
   *  
   * @param {Array} arrx 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array, curry2
   * @sign Array -> Array -> Array
   * @see difference, union, uniq
   * @example
   * 
   * const arr1 = [1, 3, 5]
   * const arr2 = [7, 5, 3]
   * 
   * f.intersection(arr1)(arr2) // => [5, 3]
   */
  const intersection = _curry2((arrx, arr) => uniq([].concat(arr)).filter(
    e => arrx.includes(e)
  ));

  /**
   * Group the array by the supplied function
   * 
   * Return a object, function's returns as key, 
   * satisfied elements as array values
   * 
   * @param {Function} fn 
   * @param {Array} arr
   * @return {Object}
   * @since 0.1.0
   * @category Array, curry2
   * @sign (a -> b) -> [a] -> { b: [a] }
   * @example
   * 
   * const arr = [1, 2, 3, 4, 5]
   * const group = f.groupBy(e => e < 3 ? 'small' : 'big')
   * 
   * group(arr)
   * // => { small: [1, 2], big: [3, 4, 5] }
   */
  const groupBy = _curry2((fn, arr) => tap(
    obj => arr.forEach(
      elem => tap(
        ret => (obj[ret] = obj[ret] || []).push(elem), 
        fn(elem)
      )
    ), {}
  ));

  /**
   * Return a new string
   * 
   * Just like `String.prototype.toLowerCase`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   * 
   * @param {String} str
   * @return {String}
   * @since 0.1.0
   * @category Native
   * @sign String -> String
   * @see toUpper
   * @example
   * 
   * const str = 'ABC'
   * 
   * f.toLower(str) // => 'abc'
   */
  const toLower = str => str.toLowerCase();

  /**
   * Return a new String
   * 
   * Just like `String.prototype.toUpperCase`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   * 
   * @param {String} str
   * @return {String}
   * @since 0.1.0
   * @category Native
   * @sign String -> String
   * @see toLower
   * @example
   * 
   * const str = 'abc'
   * 
   * f.toUpper(str) // => 'ABC'
   */
  const toUpper = str => str.toUpperCase();

  /**
   * If the parameter is array return self,
   * else, return a array with it.
   * 
   * @param {*} data 
   * @return {Array}
   * @since 0.1.0
   * @category Tools
   * @sign a -> [a]
   * @sign [a] -> [a]
   * @example
   * 
   * f.toArray('hello') // => ['hello']
   * f.toArray(['hello']) // => ['hello']
   */
  const toArray = data => Array.isArray(data) ? data : [data];

  /**
   * Just like the `concat` method of `Array.prototype` and `String.prototype`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat  
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat  
   * 
   * @param {...(Array|String)} args
   * @param {Array|String} data
   * @return {Array|String}
   * @since 0.1.0
   * @category Native
   * @sign ...a -> a -> a
   * @example
   * 
   * const str = 'i have'
   * f.concat(' a', ' plan')(str) // => 'i have a plan'
   * 
   * const arr = [1, 2, 3]
   * f.concat(4, [5])(arr) // => [1, 2, 3, 4, 5]
   */
  const concat = _nativeSelfFn('concat');

  /**
   * Just like `includes` of `Array.prototype` and `String.prototype`  
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes  
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes  
   * 
   * @param {*} args
   * @param {Number} [position]
   * @param {Array|String} data
   * @return {Boolean}
   * @since 0.1.0
   * @category Native
   * @sign x -> [a] -> Boolean
   * @sign x -> a -> Boolean
   * @example
   * 
   * const includes = f.includes('yes')
   * 
   * includes(['i', 'say', 'yes', '!']) // => true
   * includes('i say yes!') // => true
   * includes('i say no!') // => false
   */
  const includes = _nativeSelfFn('includes');

  /**
   * Like `slice` method of `Array.prototype` and `String.prototype`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice  
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  
   * 
   * @param {Number} [begin]
   * @param {Number} [end]
   * @param {Array|String} data
   * @return {Array|String}
   * @since 0.1.0
   * @category Native
   * @sign (Number, Number) -> a -> a
   * @example
   *    
   * const slice2 = f.slice(2, 4)
   * 
   * slice2([1, 2, 3, 4, 5]) // => [3, 4]
   * slice2('abced') // => 'ce'
   */
  const slice = _nativeSelfFn('slice');

  /**
   * Just like `String.prototype.trim`
   * 
   * Return a new string
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
   * 
   * @param {String} str 
   * @return {String}
   * @since 0.1.0
   * @category Native
   * @sign String -> String
   * @example
   * 
   * const str = ' i have a plan '
   * 
   * f.trim(str) // => 'i have a plan'
   */
  const trim = str => str.trim();

  /**
   * Just like `String.prototype.split`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split  
   * 
   * @param {String|RegExp} [separator]
   * @param {Number} [limit]
   * @param {String} str
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign (String | RegExp) -> String -> Array
   * @see join
   * @example
   * 
   * const str = 'i have a plan'
   * const splitWithBlank = f.split(' ')
   * 
   * splitWithBlank(str) // => ['i', 'have', 'a', 'plan']
   */
  const split = _nativeSelfFn('split');

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
   * @since 0.1.0
   * @category Native, curry2
   * @sign RegExp -> String -> Boolean
   * @see match
   * @example
   * 
   * const test = f.test(/hello/)
   * 
   * test('hello world') // => true
   * test('goodbye world') // => false
   */
  const test = _curry2((reg, str) => reg.test(str));

  /**
   * Just like `String.prototype.match`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match  
   * 
   * @param {RegExp} args
   * @param {String} str
   * @return {Array}
   * @since 0.1.0
   * @category Native
   * @sign RegExp -> String -> Array
   * @see test
   * @example
   * 
   * const matchAll = f.match(/\{.*?\}/g)
   * 
   * matchAll('{aa}-{bb}-{cc}')
   * // => ['{aa}', '{bb}', '{cc}']
   */
  const match = _nativeSelfFn('match');

  /**
   * Just like `String​.prototype​.replace`
   * 
   * Will not change supplied string
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   * 
   * @param {String|RegExp} arg1
   * @param {String|Function} arg2
   * @param {String} str
   * @return {String}
   * @since 0.1.0
   * @category Native
   * @sing (String | RegExp, String | Function) -> String ->String
   * @example
   * 
   * const replace = f.replace(/yes/, 'no')
   * 
   * replace('yes yes i will yes')
   * // => no no i will no
   */
  const replace = _nativeSelfFn('replace');

  /**
   * Just Like `String.prototype.startsWith`
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
   * 
   * @param {String} str
   * @param {Number} [length]
   * @param {String} data
   * @return {Boolean}
   * @since 0.1.0
   * @category Native
   * @sign (String) -> String -> Boolean
   * @see endsWith
   * @example
   * 
   * const str = 'i have a plan'
   * 
   * f.startsWith('i have')(str) // => true
   */
  const startsWith = _nativeSelfFn('startsWith');

  /**
   * Just Like `String.prototype.endsWith`  
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
   * 
   * @param {String} str
   * @param {Number} [length]
   * @param {String} data
   * @return {Boolean}
   * @since 0.1.0
   * @category Native
   * @sign String -> String -> Boolean
   * @see startsWith
   * @example
   * 
   * const str = 'i have a plan'
   * 
   * f.endsWith('plan')(str) // => true
   */
  const endsWith = _nativeSelfFn('endsWith');

  /**
   * Deep merge some objects from `left-to-right`
   * and return a new object
   * 
   * Supplied object will not change
   * 
   * **NOTE:** Only support `{}`
   * 
   * @param {...Object} args 
   * @return {Object}
   * @since 0.1.0
   * @category Object
   * @sign ({ k: a }, { k: b }, ..., { k: n }) -> { k: n }
   * @see merge
   * @example
   * 
   * const obj1 = { a: { a: 123, b: 234 } }
   * const obj2 = { a: { a: 234 } }
   * 
   * f.deepMerge(obj1, obj2) // => { a: { a: 234, b: 234 } }
   */
  const deepMerge = (...args) => {
    const length = args.length;

    if (length < 2) return args[0]
    
    const obj1 = Object.assign({}, args[0]);
    const obj2 = Object.assign({}, args[1]);

    Object.keys(obj2).forEach(
      k => obj1[k] = type(obj1[k]) === 'Object' && type(obj2[k]) === 'Object'
        ? deepMerge(obj1[k], obj2[k])
        : obj2[k]
    );

    return deepMerge(obj1, ...args.slice(2))
  };

  /**
   * Select the keys of the supplied object
   * which not exists in supplied array
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {Array} keys 
   * @param {Object} obj
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry2
   * @sign [k] -> { k: v } -> { k: v }
   * @see pick
   * @example
   * 
   * const omit = f.omit(['a', 'b'])
   * const obj = { a: 1, b: 2, c: 3 }
   * 
   * omit(obj) // => { c: 3 }
   */
  const omit = _curry2(
    (keys, obj) => tap(
      _obj => Object.keys(obj).forEach(
        key => keys.includes(key) || (_obj[key] = obj[key])
      ), {}
    )
  );

  /**
   * Pick some keys of object
   * 
   * Return a new object with the corresponding key and value 
   * 
   * **NOTE:** Shallow copy
   * 
   * @param {Array} keys 
   * @param {Object} obj
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry2
   * @sign [k] -> { k: v } -> { k: v }
   * @see pickBy, omit
   * @example
   * 
   * const pickAB = f.pick(['a', 'b'])
   * const obj = { a: 123, b: 234, c: 345 }
   * 
   * pickAB(obj) // => { a: 123, b: 234 }
   */
  const pick = _curry2((keys, obj) => merge(
    ...keys.map(key => ({ [key]: obj[key] }))
  ));

  /**
   * Pass every `value` and `key` of the object to the supplied function,  
   * if return true, select corresponding key and value.  
   * 
   * Return a new object.
   * 
   * **NOTE:** Shallow copy  
   * **NOTE:** Not support prototype chain  
   * 
   * @param {Function} fn 
   * @param {Object} obj
   * @return {Object}
   * @since 0.1.0
   * @category Object, curry2
   * @sign ((v, k) -> Boolean) -> { k: v } -> { k: v }
   * @see pick
   * @example
   * 
   * const obj = { a: 1, b: 2, c: 3}
   * const pickBy = f.pickBy(f.gte(2))
   * 
   * pickBy(obj) // => { b: 2, c: 3 }
   */
  const pickBy = _curry2((fn, obj) => tap(
    _obj => keys(obj).forEach(
      key => {
        const val = obj[key];
        fn(val, key) && (_obj[key] = val);
      }
    ), {}
  ));

  /**
   * If is Array select the elements which are not `nil`
   * 
   * If is Object pick the keys which them values are not `nil`
   * 
   * If is String remove all the space
   * 
   * All of above return a new datum
   * 
   * Others return them self
   * 
   * And `nil` means `null` or `undefined`
   * 
   * @param {Array|Object|String} data 
   * @return {Array|Object|String}
   * @since 0.1.0
   * @category Tools
   * @sign a -> a
   * @see isNil, deepCompact
   * @example
   * 
   * f.compact([0, 1, 2, null, undefined]) // => [0, 1, 2]
   * f.compact({ name: 'dog', age: null }) // => { name: 'dog' }
   * f.compact(' i have a plan ') // => ihaveaplan
   */
  const compact = data => 
    type(data) === 'Array'
      ? data.filter(opposite(isNil))
      : type(data) === 'Object'
        ? pickBy(opposite(isNil), data)
        : type(data) === 'String'
          ? data.replace(/\s/g, '')
          : data;

  /**
   * If is Array select the elements which are not `empty`
   * 
   * If is Object pick the keys which them values are not `empty`
   * 
   * If is String remove all the space
   * 
   * All of above return a new datum
   * 
   * Others return them self
   * 
   * And `empty` means `null` or `undefined` or `[]` or `{}` or `''`
   * 
   * @param {Array|Object|String} data 
   * @return {Array|Object|String}
   * @since 0.1.8
   * @category Tools
   * @sign a -> a
   * @see isEmpty, compact
   * @example
   * 
   * f.deepCompact([0, false, [], {}, '', null, undefined]) // => [0, false]
   * f.deepCompact({ name: 'dog', age: '', children: [] }) // => { name: 'dog' }
   * f.deepCompact(' i have a plan ') // => ihaveaplan
   */
  const deepCompact = data => 
    type(data) === 'Array'
      ? data.filter(opposite(isEmpty))
      : type(data) === 'Object'
        ? pickBy(opposite(isEmpty), data)
        : type(data) === 'String'
          ? data.replace(/\s/g, '')
          : data;

  /**
   * Move the element of supplied array from `from` to `to`.
   * 
   * Support negative index, 
   * and if supplied index is out of range will return the origin array.
   * 
   * **NOTE:** Shallow Copy
   * 
   * @param {Number} from
   * @param {Number} to
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.4
   * @category Array, curry3
   * @sign Number -> Number -> [a] -> [a]
   * @example
   * 
   * const arr = [1, 2, 3, 4]
   * 
   * f.move(1, 2, arr) // => [1, 3, 2, 4]
   * f.move(-1, 0, arr) // => [4, 1, 2, 3]
   * f.move(-100, 100, arr) // => [1, 2, 3, 4]
   */
  const move = _curry3((from, to, arr) => {
    const length = arr.length;
    const fromIndex = from < 0 ? length + from : from;
    const toIndex = to < 0 ? length + to : to;

    if (fromIndex >= length || toIndex >= length || fromIndex < 0 || toIndex < 0) {
      return arr
    } else {
      const result = [].concat(arr);
      result.splice(
        toIndex, 
        0, 
        result.splice(fromIndex, 1)[0]
      );

      return result
    }
  });

  /**
   * This is a function for debug
   * 
   * Use with function like `f.pipe`
   * 
   * To test what parameters passed in 
   * 
   * @param {String} tag 
   * @param {*} x 
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign String -> a -> a
   * @example
   * 
   * const add3 = f.pipe(
   *   f.add(1), 
   *   f.trace('what i am?')
   *   f.add(1), 
   *   f.trace('what i am?')
   *   f.add(1), 
   * )
   * 
   * add3(3) 
   * // logs: what i am?, 4
   * // logs: what i am?, 5
   * // => 6
   */
  const trace = _curry2((tag, x) => { console.log(tag, x); return x });

  /**
   * Return a curried equivalent function  
   * 
   * **NOTE:** Not support rest parameters  
   * **NOTE:** Not support default parameters  
   * 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result
   * @see curryN, partial
   * @example
   * 
   * const add = (a, b, c, d) => a + b + c + d
   * fn = f.curry(add)
   * 
   * fn(1, 2, 3, 4) // => 10
   * fn(1, 2)(3, 4) // => 10
   * fn(1, 2, 3)(4) // => 10
   * fn(1)(2, 3, 4) // => 10
   * fn(1)(2)(3)(4) // => 10
   */
  const curry = fn => _curryN(fn.length)(fn);

  /**
   * Return a equivalent function with `n` curried parameters
   * 
   * Usual used in rest parameters
   * 
   * @param {Number} n 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign Number -> ((a, b, ..., z) -> result) -> a -> b -> ... -> z -> result
   * @see curry, partial
   * @example
   * 
   * const join = (...args) => args.join('')
   * join(1, 2, 3, 4) // => '1234'
   * join(1, 2, 3) // => '123'
   * 
   * const join3 = f.curryN(3)(join)
   * join3(1, 2, 3) // => '123'
   * join3(1, 2)(3) // => '123'
   * join3(1)(2, 3) // => '123'
   * join3(1)(2)(3) // => '123'
   */
  const curryN = _curry2((n, fn) => {
    const curried = (...args) => 
      args.length < n
        ? (...args2) => curried(...args, ...args2)
        : fn(...args);
    return curried
  });

  /**
   * Change a curried function to an uncurry equivalent function
   * with `n` arugments
   * 
   * @param {Number} n
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign Number -> (a -> b -> ... -> n -> result) -> (a, b, ..., n) -> result
   * @see uncurry, curry
   * @example
   * 
   * const add = a => b => c => a + b + c
   * const fn = f.uncurryN(2)(add)
   * 
   * fn('a', 'b')('c') // => 'abc'
   */
  const uncurryN = _curry2((n, fn) => (...args) => {
    let ret = fn;

    for (let i = 0; i < n; i++) {
      ret = ret(args[i]);
    }

    return ret
  });

  /**
   * Change a curried function to an uncurry equivalent function
   * 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign (a -> b -> ... -> z -> result) -> (a, b, ..., z) -> result
   * @see uncurryN, curry
   * @example
   * 
   * const add = a => b => c => a + b + c
   * const fn = f.uncurry(add)
   * 
   * fn('a', 'b', 'c') // => 'abc'
   */
  const uncurry = fn => (...args) => uncurryN(args.length, fn)(...args);

  /**
   * Call a part of function and return a new function
   * 
   * Similar to `f.curry`
   * 
   * @param {Function} fn 
   * @param {...*} args
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> res) -> (a, b, ..., n) -> (o, p, ..., z) -> res
   * @see curry, partialRight
   * @example
   * 
   * const sum = (a, b, c) => a + b + c
   * const sumAB = f.partial(sum)('a', 'b')
   * 
   * sumAB('c') // => 'abc'
   * sumAB('d') // => 'abd'
   */
  const partial = fn => (...args) => (...args2) => fn(...args, ...args2);

  /**
   * Call a part of function and return a new function like `f.partial`
   * 
   * But arguments start at right (arguments order still left-to-right)
   * 
   * @param {Function} fn 
   * @param {...*} args
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> res) -> (o, p, ..., z) -> (a, b, ..., n) -> res
   * @see partial
   * @example
   * 
   * const sum = (a, b, c) => a + b + c
   * const sumBeforeAB = f.partial(sum)('a', 'b')
   * 
   * sumAB('c') // => 'cab'
   * sumAB('d') // => 'dab'
   */
  const partialRight = fn => (...args) => (...args2) => fn(...args2, ...args);

  /**
   * Pass the arguments and return a new equivalent function
   * which will delay to invoked until it needs
   * 
   * It is the special case of `f.partial`
   * 
   * @param {Function} fn 
   * @param {*} args
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> res) -> (a, b, ..., z) -> () -> res
   * @see partial, partialRight
   * @example
   * 
   * const sum = (a, b, c) => a + b + c
   * const waitSum = f.thunkify(sum)('a', 'b', 'c')
   * 
   * waitSum() // => 'abc'
   */
  const thunkify = fn => (...args) => () => fn(...args);

  /**
   * Return a equivalent function and arguments is flipped!
   * 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> x) -> ((z, ..., b, a) -> x)
   * @example
   * 
   * const print = (...args) => args
   * const flipPrint = f.flip(print)
   * 
   * print(1, 2, 3) // => [1, 2, 3]
   * flipPrint(1, 2, 3) // => [3, 2, 1]
   */
  const flip = fn => (...args) => fn(...[].concat(args).reverse());

  /**
   * Pass the first `n` parameters to supplied function and ignore others
   * 
   * @param {Number} n 
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @see unary, binary
   * @sign Number -> ((a, b, ..., z) -> result) -> ((a, b, ..., n) -> result)
   * @example
   * 
   * const printThree = (a, b, c) => [a, b, c]
   * printThree(1, 2, 3) // => [1, 2, 3]
   * 
   * const printTwo = f.nAry(2)(printThree)
   * printTwo(1, 2, 3) // => [1, 2, undefined]
   */
  const nAry = _curry2((n, fn) => (...args) => fn(...args.slice(0, n)));

  /**
   * @see nAry
   */
  const _nAry = n => fn => (...args) => fn(...args.slice(0, n));

  /**
   * Pass the first parameters to supplied function and ignore others
   * 
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> result) -> (a -> result)
   * @see binary, nAry
   * @example
   * 
   * const arr = [1, 2, 3]
   * 
   * arr.map(parseInt) // => [1, NaN, NaN]
   * arr.map(f.unary(parseInt)) // => [1, 2, 3]
   */
  const unary = _nAry(1);

  /**
   * Pass the first two parameters to supplied function and ignore others
   * 
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign ((a, b, ..., z) -> result) -> ((a, b) -> result)
   * @see unary, nAry
   * @example
   * 
   * const printThree = (a, b, c) => [a, b, c]
   * printThree(1, 2, 3) // => [1, 2, 3]
   * 
   * const printTwo = f.binary(printThree)
   * printTwo(1, 2, 3) // => [1, 2, undefined]
   */
  const binary = _nAry(2);

  /**
   * Return a equivalent function of the supplied function
   * 
   * But only called once
   * 
   * The next time called will return the same result
   * 
   * @param {Function} fn 
   * @return {Function}
   * @since 0.1.0
   * @category Function
   * @sign (...x -> a) -> (...x -> a)
   * @example
   * 
   * const add1 = f.add(1)
   * const addOnce = f.once(add1)
   * 
   * addOnce(10) // => 11
   * addOnce(20) // => 11
   * addOnce(30) // => 11
   */
  const once = fn => {
    let called = false;
    let result;

    return (...args) => {
      if (called) return result

      called = true;
      result = fn(...args);

      return result
    }
  };

  /**
   * Call the first function 
   * 
   * If throw an error, call the next
   * 
   * @param {Function} tryer 
   * @param {Function} catcher 
   * @return {Function}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign (...a -> b, ...a -> c) -> (...a -> b | c)
   * @example
   * 
   * const parse = f.tryCatch(JSON.parse, f.always({}))
   * 
   * parse(JSON.stringify({ a: 1 })) // => { a: 1 }
   * parse({ a: 1 }) // => {}
   */
  const tryCatch = _curry2((tryer, catcher) => (...args) => {
    let result; 

    try {
      result = tryer(...args);
    } catch (err) {
      result = catcher(...args);
    } finally {
      return result
    }
  });

  /**
   * Pass parameter to the first supplied function,
   * if true invoke the second one,
   * else return self
   * 
   * @param {Function} tryer 
   * @param {Function} handler 
   * @param {*} x
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry3
   * @sign (a -> b, a -> c, a) -> a | c
   * @see unless, ifElse, cond
   * @example
   * 
   * const cannotOver3 = f.when(f.gt(3), f.always('so big'))
   * 
   * cannotOver3(5) // => 'so big'
   * cannotOver3(1) // => 1
   */
  const when = _curry3((tryer, handler, x) => tryer(x) ? handler(x) : x);

  /**
   * Pass parameter to the first supplied function,
   * if not true invoke the second one,
   * else return self
   * 
   * @param {Function} tryer 
   * @param {Function} handler 
   * @param {*} x
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry3
   * @sign (a -> b, a -> c, a) -> a | c
   * @see when, ifElse, cond
   * @example
   * 
   * const cannotBelow3 = f.unless(f.gt(3), f.always('so small'))
   * 
   * cannotBelow3(5) // => 5
   * cannotBelow3(1) // => 'so small'
   */
  const unless = _curry3((tryer, handler, x) => tryer(x) ? x : handler(x) );

  /**
   * Pass parameters to the first supplied function,
   * if true invoke the second one,
   * else invoke the third one
   * 
   * @param {Function} tryer 
   * @param {Function} reslover 
   * @param {Function} rejecter 
   * @return {Function}
   * @since 0.1.0
   * @category Tools, curry3
   * @sign (...a -> b, ...a -> c, ...a -> d) -> (...a -> c | d)
   * @see when, unless, cond
   * @example
   * 
   * const check3 = f.ifElse(f.gt(3), f.always('so big'), f.always('so small'))
   * check3(5) // => 'so big'
   * check3(1) // => 'so small'
   */
  const ifElse = _curry3((tryer, reslover, rejecter) => 
    (...args) => tryer(...args) 
      ? reslover(...args) 
      : rejecter(...args)
  );

  /**
   * Pass some array made of two functions,
   * first `tryer`, second `handler` like `f.when`
   * 
   * If `tryer` true, call the corresponding `handler` and return,
   * else next
   * 
   * @param {...Array<Function>} conditions 
   * @return {Function}
   * @since 0.1.0
   * @category Tools
   * @sign ([...a -> b, ...a -> c], [...a -> d, ...a -> e], ...) -> (...a -> c | e | x)
   * @see when, unless, ifElse
   * @example
   * 
   * const judgeMan = f.cond(
   *   [f.gt(90), f.always('good man')],
   *   [f.gt(70), f.always('common man')],
   *   [f.gt(50), f.always('weak man')],
   *   [f.T, f.always('unless man')]
   * )
   * 
   * const man1 = { name: 'Dark', point: 80 }
   * const man2 = { name: 'White', point: 30 }
   * 
   * judgeMan(man1.point) // => 'common man'
   * judgeMan(man2.point) // => 'unless man'
   */
  const cond = (...conditions) => (...args) => {
    for (let i = 0; i < conditions.length; i++) {
      const condition = conditions[i];
      if (condition[0](...args)) return condition[1](...args)
    }
  };

  /**
   * Pass the array to the function 
   * and function will called by the rest arguments of array
   * 
   * Similar to `Function.prototype.apply`, but without context
   *  
   * @param {Function} fn 
   * @param {Array} args
   * @return {*}
   * @since 0.1.0
   * @category Function, curry2
   * @sign (...x -> a) -> [x] -> a
   * @see call
   * @example 
   * 
   * const print = (...args) => args
   * const fn = f.apply(print)
   * 
   * fn([1, 2, 3]) // => [1, 2, 3]
   */
  const apply = _curry2((fn, args) => fn(...args));

  /**
   * Pass the supplied arguments to the supplied function.
   * 
   * Similar to `Function.prototype.call`, but without context.
   * 
   * Notice that this function is not curried, 
   * but if supplied function is curried the result can also be curried.
   * 
   * @param {Function} fn 
   * @param {...*} args
   * @return {*}
   * @since 0.1.4
   * @category Function
   * @sign ((...x -> a), ...x) -> a
   * @see apply
   * @example 
   * 
   * f.call(f.add, 1, 2) // => 3
   * f.call(f.add)(1, 2) // => 3
   * f.call(Number, '1') // => 1
   * f.call(Number)('1') // => ERROR!
   */
  const call = (fn, ...args) => fn(...args);

  /**
   * Apply the arguments to the supplied function
   * 
   * @param {...*} args 
   * @param {Function} fn
   * @return {*}
   * @since 0.1.0
   * @category Function
   * @sign ...x -> (...x -> a) -> a
   * @example
   * 
   * const fn1 = (...args) => args
   * const fn2 = (...args) => f.sum(args)
   * const applyTo = f.applyTo('a', 'b', 'c')
   *    
   * applyTo(fn1) // => ['a', 'b', 'c']
   * applyTo(fn2) // => 'abc'
   */
  const applyTo = (...args) => fn => fn(...args);

  /**
   * This function is used to generate the instance of supplied constructor
   * 
   * Like `new MyClass()`
   * 
   * @param {Function} constructor 
   * @param {...*} args
   * @return {Object}
   * @since 0.1.0
   * @category Function
   * @sign (...x -> a) -> (...x) -> a
   * @example
   * 
   * class Animal {}
   * const makeAnimal = f.construct(Animal)
   * 
   * makeAnimal('Rabbit') // => new Animal('Rabbit')
   */
  const construct = constructor => (...args) => new constructor(...args);

  /**
   * Check the supplied parameters is satisfied both of the two function
   * 
   * First sceond, then first, like `fn2 && fn1`
   * 
   * @param {Function} fn1 
   * @param {Function} fn2 
   * @param {...*} args
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign (...x -> a) -> (...x -> b) -> (...x -> a | b)
   * @see either, everyPass
   * @example
   * 
   * const isBetween = f.both(f.gt(5), f.lt(10))
   * isBetween(8) // => true
   * isBetween(11) // => false
   */
  const both = _curry2((fn1, fn2) => (...args) => fn2(...args) && fn1(...args));

  /**
   * Check the supplied parameters is satisfied either of the two function
   * 
   * First sceond, then first, like `fn2 || fn1`
   * 
   * @param {Function} fn1 
   * @param {Function} fn2 
   * @param {...*} args
   * @return {*}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign (...x -> a) -> (...x -> b) -> (...x -> a | b)
   * @see both, somePass
   * @example
   * 
   * const isSatisfied = f.either(f.gt(15), f.lt(10))
   * 
   * isSatisfied(8) // => true
   * isSatisfied(11) // => false
   * isSatisfied(20) // => true
   */
  const either = _curry2((fn1, fn2) => (...args) => fn2(...args) || fn1(...args));

  /**
   * Check the supplied parameters is satisfied of every function
   * 
   * From left-to-right
   * 
   * @param {...Function} fns
   * @param {...*} args
   * @return {Boolean}
   * @since 0.1.0
   * @category Tools
   * @sign (...a -> b, ...a -> c, ...) -> (...a -> Boolean)
   * @see somePass, both
   * @example
   * 
   * const everyPass = f.everyPass(f.gt(5), f.gt(10), f.gt(15))
   * 
   * everyPass(12) // => false
   * everyPass(20) // => true
   */
  const everyPass = (...fns) => (...args) => {
    for (let i = 0; i < fns.length; i++) {
      if (!fns[i](...args)) return false
    }
    
    return true
  };

  /**
   * Check the supplied parameters is satisfied of some function
   * 
   * From left-to-right
   * 
   * Default `false`
   * 
   * @param {...Function} fns
   * @param {...*} args
   * @return {Boolean}
   * @since 0.1.0
   * @category Tools
   * @sign (...a -> b, ...a -> c, ...) -> (...a -> Boolean)
   * @see everyPass, either
   * @example
   * 
   * const somePass = f.somePass(f.gt(5), f.gt(10), f.gt(15))
   * 
   * somePass(12) // => true
   * somePass(3) // => false
   */
  const somePass = (...fns) => (...args) => {
    for (let i = 0; i < fns.length; i++) {
      if (fns[i](...args)) return true
    }
    
    return false
  };

  /**
   * Merge a function to the supplied function and return a new function
   * 
   * When call the new function,
   * first call the `fnx` then call the `fn`
   * with the same arguments
   * 
   * New function's returns same as the origin function
   * 
   * @param {Function} fnx - Before function
   * @param {Function} fn - Origin function
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
   * @see after
   * @example
   * 
   * const fn1 = () => console.log('i am fn1')
   * const fn2 = () => console.log('i am fn2')
   * 
   * fn = f.before(fn1)(fn2)
   * 
   * fn()
   * // logs: i am fn1
   * // logs: i am fn2
   */
  const before = _curry2((fnx, fn) => (...args) => { 
    fnx(...args);

    return fn(...args) 
  });

  /**
   * Merge a function to the supplied function and return a new function
   * 
   * When call the new function,
   * first call the `fn` then call the `fnx`
   * with the same arguments
   * 
   * New function's returns same as the origin function
   * 
   * @param {Function} fnx - After function
   * @param {Function} fn - Origin function
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign (...x -> a) -> (...x -> b) -> (...x -> b)
   * @see before
   * @example
   * 
   * const fn1 = () => console.log('i am fn1')
   * const fn2 = () => console.log('i am fn2')
   * 
   * const fn = f.after(fn1)(fn2)
   * 
   * fn()
   * // logs: i am fn2
   * // logs: i am fn1
   */
  const after = _curry2((fnx, fn) => (...args) => { 
    const result = fn(...args);
    fnx(...args);

    return result
  });

  /**
   * Pass the `cacheFn` and `fn` to make a new function
   * 
   * When call the new function, 
   * invoke the `cacheFn` with the passed arguments and record the return as the key,
   * record the `fn` return as the value
   * 
   * If the key is already exists, 
   * return the corresponding value without invoke `fn`
   * 
   * @param {Function} cacheFn - Cache with function
   * @param {Function} fn - Origin function
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign (...x -> a) -> (...x -> a) -> (...x -> a)
   * @example
   * 
   * let num = 0
   * const add = f.cacheWith(f.identity)(() => num += 1)
   * 
   * add(1) // => 1
   * add(1) // => 1
   * add(1) // => 1
   * add(2) // => 3
   */
  const cacheWith = _curry2((cacheFn, fn) => {
    const cache = {};

    return (...args) => {
      const key = cacheFn(...args);

      if (!_has(cache, key)) {
        cache[key] = fn(...args);
      }
      
      return cache[key]
    }
  });

  /**
   * Pass the `ms` and `fn` to create a new function
   * 
   * When invoke the new function, 
   * delays invoke `fn` until after wait `ms` milliseconds 
   * from the last time the new function called
   * 
   * @param {Number} ms 
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign Number -> (...x -> a) -> (...x -> undefined)
   * @see throttle
   * @example
   * 
   * let num = 0
   * const fn = f.debounce(100)(() => num += 1) 
   * 
   * fn()
   * fn()
   * fn()
   * 
   * console.log(num) // logs 0
   * setTimeout(() => console.log(num), 120) // logs 1 after 120 ms
   */
  const debounce = _curry2((ms, fn) => {
    let timer = null;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(fn, ms, ...args);
    }
  });

  /**
   * Pass the `ms` and `fn` to create a new function
   * 
   * When invoke the new function, 
   * `fn` will be invoked,
   * and at most invoke once in `ms` milliseconds
   * 
   * @param {Number} ms 
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Function, curry2
   * @sign Number -> (...x -> a) -> (...x -> a)
   * @see debounce
   * @example
   * 
   * let num = 0
   * const fn = f.throttle(100)(() => num += 1) 
   * 
   * fn()
   * fn()
   * fn()
   * setTimeout(fn, 120)
   * 
   * console.log(num) // logs 1
   * console.log(num) // logs 1
   * console.log(num) // logs 1
   * setTimeout(() => console.log(num), 150) // logs 2 after 150 ms
   */
  const throttle = _curry2((ms, fn) => {
    let timer = null;
    let result;

    return (...args) => {
      if (timer !== null) return result

      timer = setTimeout(() => timer = null, ms);
      result = fn(...args);

      return result
    }
  });

  /**
   * Get a random integer between the min and the max number supplied
   * 
   * Contains the min and the max
   * 
   * **NOTE:** Support Integer Only
   * 
   * @param {Number} min
   * @param {Number} max
   * @return {Number}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign Number -> Number -> Number
   * @example
   * 
   * f.random(1, 10) // => 1
   * f.random(1, 10) // => 9
   * f.random(1, 10) // => 8
   * f.random(1, 10) // => 10
   */
  const random = _curry2((min, max) => Math.floor(
    min + Math.random() * (max - min + 1)
  ));

  /**
   * Shuffle the array and return a new array
   * 
   * Shallow Copy
   * 
   * @param {Array} arr
   * @return {Array}
   * @since 0.1.0
   * @category Array
   * @sign [a] -> [a]
   * @example
   * 
   * const arr = [1, 2, 3]
   * 
   * f.shuffle(arr) // => [2, 3, 1]
   */
  const shuffle = arr => {
    const _arr = [].concat(arr);
    const length = _arr.length;
    const maxIndex = length - 1;
    
    let i = 0;
    while (i < length) {
      const rand = random(i, maxIndex);
      const val = _arr[rand];

      _arr[rand] = _arr[i];
      _arr[i] = val;

      i++;
    }

    return _arr
  };

  /**
   * Call the supplied function for `n` times
   * and push the returns to an array
   * 
   * @param {Number} n
   * @param {Function} fn
   * @return {Function}
   * @since 0.1.0
   * @category Tools, curry2
   * @sign Number -> (a -> b) -> (a -> b)
   * @example
   * 
   * const id3 = f.times(3, f.identity)
   * 
   * id3(1) // => [1, 1, 1]
   */
  const times = _curry2((n, fn) => (...args) => {
    let i = 0;
    const arr = Array(n);

    while (i < n) {
      arr[i++] = fn(...args);
    }

    return arr
  });

  /**
   * Convert the Object to Array like `[[key, value], ...]`.
   * 
   * Only support own property,
   * and not support Symbol keys.
   * 
   * @param {Object} obj 
   * @return {Array}
   * @since 0.1.4
   * @category Object
   * @sign ({ k: v, ... }) -> [[k, v], ...]
   * @see fromPairs
   * @example
   * 
   * f.toPairs({ a: 1, b: 2 }) // => [['a', 1], ['b', 2]]
   */
  const toPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

  /**
   * Convert the Array which seems like `[[key, value], ...]` to Object.
   * 
   * If has multiple same keys, use the rightmost one.
   * 
   * @param {Array} arr 
   * @return {Object}
   * @since 0.1.4
   * @category Array
   * @sign [[k, v], ...] -> { k: v, ... }
   * @see toPairs
   * @example
   * 
   * f.fromPairs([['a', 1], ['b', 2], ['c', 3]]) // => { a: 1, b: 2, c: 3 }
   * f.fromPairs([['a', 1], ['b', 2], ['a', 3]]) // => { a: 3, b: 2 }
   */
  const fromPairs = arr => merge(...arr.map(
    elem => ({ [elem[0]]: elem[1] })
  ));

  /**
   * Create a new array from the supplied arrays,  
   * every index corresponding value of them will compose to a new item.  
   * 
   * And the new array's length will same as the first supplied array.  
   * 
   * @param {...Array} arr 
   * @return {Array}
   * @since 0.1.7
   * @category Array
   * @sign ([a], [b], [c], ...) -> [[a, b, c, ...], ...]
   * @example
   * 
   * const weathers = ['windy', 'sunny', 'cloudy']
   * const marks = [0, 1, 2]
   * 
   * f.zip(weathers, marks) // => [['windy', 0], ['sunny', 1], ['cloudy', 2]]
   */
  const zip = (...arr) => {
    const first = arr[0] || [];
    const length = first.length;
    const result = [];

    let i = 0;
    while (i < length) {
      result[i] = arr.map(elem => elem[i]);

      i++;
    }

    return result
  };

  /**
   * Library's version
   * 
   * @type {String}
   * @since 0.1.4
   * @category Other
   * @example
   * 
   * f.VERSION // => 0.1.4
   */
  const VERSION = '1.0.1';

  exports.F = F;
  exports.T = T;
  exports.VERSION = VERSION;
  exports.add = add;
  exports.after = after;
  exports.always = always;
  exports.and = and;
  exports.apply = apply;
  exports.applyTo = applyTo;
  exports.asc = asc;
  exports.ascend = ascend;
  exports.assoc = assoc;
  exports.before = before;
  exports.binary = binary;
  exports.both = both;
  exports.cacheWith = cacheWith;
  exports.call = call;
  exports.clone = clone;
  exports.compact = compact;
  exports.concat = concat;
  exports.cond = cond;
  exports.construct = construct;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.debounce = debounce;
  exports.deepCompact = deepCompact;
  exports.deepMerge = deepMerge;
  exports.desc = desc;
  exports.descend = descend;
  exports.difference = difference;
  exports.dissoc = dissoc;
  exports.divide = divide;
  exports.either = either;
  exports.endsWith = endsWith;
  exports.eq = eq;
  exports.equals = equals;
  exports.every = every;
  exports.everyPass = everyPass;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.first = first;
  exports.flatten = flatten;
  exports.flip = flip;
  exports.forEach = forEach;
  exports.fromPairs = fromPairs;
  exports.groupBy = groupBy;
  exports.gt = gt;
  exports.gte = gte;
  exports.has = has;
  exports.hasPath = hasPath;
  exports.identity = identity;
  exports.ifElse = ifElse;
  exports.includes = includes;
  exports.indexOf = indexOf;
  exports.intersection = intersection;
  exports.is = is;
  exports.isEmpty = isEmpty;
  exports.isExist = isExist;
  exports.isNil = isNil;
  exports.join = join;
  exports.keys = keys;
  exports.last = last;
  exports.lastIndexOf = lastIndexOf;
  exports.length = length;
  exports.lt = lt;
  exports.lte = lte;
  exports.map = map;
  exports.mapObj = mapObj;
  exports.match = match;
  exports.max = max;
  exports.merge = merge;
  exports.min = min;
  exports.move = move;
  exports.multiply = multiply;
  exports.nAry = nAry;
  exports.none = none;
  exports.not = not;
  exports.nth = nth;
  exports.omit = omit;
  exports.once = once;
  exports.opposite = opposite;
  exports.or = or;
  exports.partial = partial;
  exports.partialRight = partialRight;
  exports.path = path;
  exports.pathEq = pathEq;
  exports.pathOr = pathOr;
  exports.pick = pick;
  exports.pickBy = pickBy;
  exports.pipe = pipe;
  exports.pipeAsync = pipeAsync;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.propOr = propOr;
  exports.props = props;
  exports.random = random;
  exports.reduce = reduce;
  exports.reject = reject;
  exports.replace = replace;
  exports.reverse = reverse;
  exports.shuffle = shuffle;
  exports.sleep = sleep;
  exports.slice = slice;
  exports.some = some;
  exports.somePass = somePass;
  exports.sort = sort;
  exports.sortWith = sortWith;
  exports.splice = splice;
  exports.split = split;
  exports.startsWith = startsWith;
  exports.subtract = subtract;
  exports.sum = sum;
  exports.tap = tap;
  exports.test = test;
  exports.then = then;
  exports.throttle = throttle;
  exports.thunkify = thunkify;
  exports.times = times;
  exports.toArray = toArray;
  exports.toLower = toLower;
  exports.toPairs = toPairs;
  exports.toUpper = toUpper;
  exports.trace = trace;
  exports.trim = trim;
  exports.tryCatch = tryCatch;
  exports.type = type;
  exports.unary = unary;
  exports.uncurry = uncurry;
  exports.uncurryN = uncurryN;
  exports.union = union;
  exports.uniq = uniq;
  exports.unless = unless;
  exports.values = values;
  exports.when = when;
  exports.zip = zip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
