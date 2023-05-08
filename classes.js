class Foo {
  constructor() {
    this.id = 'foo';
    this.print();
  }

  print() {
    console.log('foo ' + this.id);
  }
}

class Bar extends Foo {
  constructor() {
    super();
    this.id = 'bar';
    this.print();
    super.print();
  }

  print() {
    console.log('bar ' + this.id);
  }
}

new Bar();
//-----------------------
//-----------------------

// Функция-конструктор
function Dog(name) {
  this.name = name;
}

Dog.bark = function() {
  console.log(this.name + ' says woof');
}

let fido = new Dog('fido');
//fido.bark();
//-----------------------
//-----------------------

