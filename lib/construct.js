"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = construct;
exports.default = _default;