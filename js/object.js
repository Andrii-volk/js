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

function Dog(name, color, isMale) { 
  this.name = name;
  this.color = color;
  this.isMAle = isMale;
  this.say = function (voice) {
    return voice
    
  }
}

const dog1 = new Dog( 'green', true);
/* при вызове на место this становиться имя dog1
dog1.name = 'Oscar';
  dog1.color = "green";


*/
console.log(dog1);
console.log(dog1.say('kdkdkdkddk'));
const dog2 = new Dog('Bob', 'red', true);
console.log(dog2);

function ForUser(name, sname, age) {
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.getFullNmae = function () {
    return name + sname;
    
  }
  
}

const foruser = new ForUser('andtii ', 'boyar', 33)

console.log(foruser, foruser.getFullNmae());

const foruser1 = new ForUser('bob ', 'bobovich', 3);

console.log(foruser1, foruser1.getFullNmae());

const foruser2 = new ForUser('sten ', 'test', 55);

console.log(foruser2, foruser2.getFullNmae());

