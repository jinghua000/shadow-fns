import { add, multiply, pipe } from '../src/index.js'

const fn = pipe(add(1), multiply(2))

export default fn