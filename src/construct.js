/**
 * This function is used to generate the instance of supplied constructor
 * 
 * Like `new MyClass()`
 * 
 * @param {Function} constructor 
 * @param {...*} args
 * @return {Object}
 * @category Function
 * @sign (...x -> a) -> (...x) -> a
 * @example
 * 
 * class Animal {}
 * let makeAnimal = f.construct(Animal)
 * 
 * makeAnimal('Rabbit') // => new Animal('Rabbit')
 */
const construct = constructor => (...args) => new constructor(...args)

export default construct