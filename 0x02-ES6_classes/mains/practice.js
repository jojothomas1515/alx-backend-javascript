/* eslint-disable */
class Down {
  constructor() {
    console.log(Object.getOwnPropertyNames(Down.prototype));
    const t = Object.getPrototypeOf(this);
    console.log(t.hasOwnProperty('sayHello'));

  }

  sayHello() {
    console.log('hello jojo thomas');
  }
}

class Up extends Down {
  sayHello() {
    console.log('way up we go');
  }

  toString() {
    const k = super.toString();
    return k[1] = 'jojo';
  }
}

const ex = new Up();
console.log(ex.toString());

