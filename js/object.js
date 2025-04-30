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

// const dog1 = {
//   name: 'bob',
//   age: 3,
//   color: 'black',

//   say: function () {
//     return 'gav';
//   },
// };

// const dog2 = {
//   name: 'sven',
//   color: 'red',
//   age: 4,
//   say: function (voice) {
//     return voice;
//   },
// };

// console.log(dog1);
// // dog1.age = 33;
// console.log(dog1.age);

// console.log(dog1.name, dog1.say('woof'));
// console.log(dog1.say('gavvvvvvv'));

// function Dog(name, color, isMale) {
//   this.name = name;
//   this.color = color;
//   this.isMAle = isMale;
//   this.say = function (voice) {
//     return voice;
//   };
// }

// const dog1 = new Dog('green', true);
/* при вызове на место this становиться имя dog1
dog1.name = 'Oscar';
  dog1.color = "green";


*/
// console.log(dog1);
// console.log(dog1.say('kdkdkdkddk'));
// const dog2 = new Dog('Bob', 'red', true);
// console.log(dog2);

// function User(name, sname, age) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.getFullNmae = function () {
//     return this.name + this.sname;
//   };
// }

// const foruser = new User('andrii ', 'boyar', 33);

// console.log(foruser, foruser.getFullNmae());

// const foruser1 = new ForUser('bob ', 'bobovich', 3);

// console.log(foruser1, foruser1.getFullNmae());

// const foruser2 = new ForUser('sten ', 'test', 55);

// console.log(foruser2, foruser2.getFullNmae());
// ? функция конструктор для создания странны usa
// function Country(nameCountry, population, area) {
//   this.nameCountry = nameCountry;
//   this.population = population;
//   this.area = area;
//   this.getDensite = function () {
//     return this.population / this.area;
//   };
// }

// const USA = new Country('USA', 331000000, 9500000);
// console.log(USA);
// const densite = USA.getDensite();
// console.log(densite);
//!===============================================================

// function Auto(marka = 'bmw', maxSpeed = 200) {
//   this.name = marka;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;

//   this.accelerate = function (value) {
//     this.speed += value;
//   };
//   this.decelerate = function (value) {
//     return this.speed;
//   };
//   this.stop = function () {
//     return (this.speed = 0);
//   };
// }

// const auto = new Auto();
// console.log(auto);

// const obl = {
//   prop1: 12,
//   'prop 2': true,
//   11: 33,
// };

// const key = 'prop 2';
// console.log(obl);
// console.log(obl['prop 2']);
// console.log(obl[11]);

// const table = {
// '2*2':4,

// }
//todo вернуть обьект таблица умножения
const creataMulTable = function (limit = 10) {
  const table = {};
  for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= limit; j++) {
      table[`${i}*${j}`] = i * j;
    }
  }
  return table;
};

const table = creataMulTable();
console.log(table);
