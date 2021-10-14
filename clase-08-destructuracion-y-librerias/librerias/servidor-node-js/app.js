const _ = require("lodash");

console.log("Hola, mundo!!!");

function sayHello() {
  console.log("Hello world");
}

const obj1 = {
  a: 10,
  b: 20,
  c: [13, 4, 5, 3, 2],
  d: {
    fn: sayHello,
    aa: {
      bb: 12,
      cc: 34,
      dd: 45,
    },
  },
};
const obj2 = {
  a: 10,
  b: 20,
  c: [13, 4, 5, 3, 2],
  d: {
    fn: sayHello,
    aa: {
      bb: 12,
      cc: 34,
      dd: 45,
    },
  },
};

console.log(obj1 === obj2);

const numbers = [645, 24, 6, 2, 25, 6, -100];

console.log(_.isEqual(obj1, obj2));

console.log(_.min(numbers));
console.log(_.max(numbers));
