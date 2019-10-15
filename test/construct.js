const eq = require('./util/eq')
const equals = require('./util/equals')
const f = require('../src')

describe('test construct', function () {
  
  it('construct class', function () {

    class Animal {
      constructor (type) {
        this.type = type
      }
    }

    Animal.prototype.eat = 'yes'

    let rabbit1 = new Animal('Rabbit')
    let rabbit2 = f.construct(Animal)('Rabbit')

    equals(rabbit1, rabbit2)
    eq(rabbit2 instanceof Animal, true)
    eq(rabbit2.type, 'Rabbit')
    eq(rabbit2.eat, 'yes')

  })

  it('several arguments', function () {

    function Book (title, page) {
      this.title = title
      this.page = page
    }

    let book = f.construct(Book)('Javascript', 100)

    eq(book.title, 'Javascript')
    eq(book.page, 100)

  })

})