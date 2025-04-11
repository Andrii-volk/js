'use strict';
//три способа создать обьект
// { }
// Object
// new Object

// const obj1 = {
//   rele: 'value',
//   number: 23,
//   bool:false
// };

// const cat = {
//литеральный способ обьявления
// name: 'Bill',
// isMale: false,
// age: 33,
// breed: 'street',
// color: 'gray',
//   say: function (d, y) {
//     return 'meyow';
//   },
//   run: function () {
//     return 'i';
//   },
// };

// alert(cat);
// console.log(cat.say());
// console.log(cat.name);
// cat.age += 17;

// cat.colorEye = 'red';
// // cat.colorEye = undefined;
// delete cat.color;
// delete cat.age;

const dog1 = {
  name: 'bob',
  age: 3,
  color: 'black',
  isMale: false,
  say: function () {
    return 'gav';
  },
};

const dog2 = {
  name: 'sven',
  color: 'red',
  age: 4,
  say: function () {
    return 'gav-gav';
  },
};

console.log(dog1);
// dog1.age = 33;
console.log(dog1.age);
