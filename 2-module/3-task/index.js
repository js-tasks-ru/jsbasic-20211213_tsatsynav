'use strict';

let calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return (this.a + this.b);
  },

  mul() {
    return (this.a * this.b);
  }
};

calculator.read(3, 5);
calculator.sum();
calculator.mul();
