'use strict';
const toString = function () {
  return `${this.name} ${this.sname}`;
};

const man = {
  read: function () {
    return this.name + ' reading';
  },
};
const student = {
  id: 1,
  name: 'ellon',
  sname: 'musk',
  age: 50,
  toString: toString,
};
const student2 = {
  id: 2,
  name: 'bob',
  sname: 'mrofbusk',
  age: 30,
  toString, // toString:toString
};
// student.prototype =man
student.__proto__ = man;

console.log(student.read());
console.log(student2);
console.log(student.toString);
//!------------------------------------------------------------------------------------
const rabbitParent = {
  countPaw: 4,
  jump: function () {
    return 'i am jumping';
  },
};

const rabbitPet = {
  name: 'Jorg',
  pet: function () {
    return 'pet-' + this.name;
  },
};

const rabbitMagic = {
  say: function (word) {
    return word;
  },
};
rabbitPet.__proto__ = rabbitParent;
rabbitMagic.__proto__ = rabbitPet;

// console.log(rabbitParent.say('hello'));
// console.log(rabbitPet.pet());
console.log(rabbitMagic.jump());
console.log(rabbitMagic.say('hello'));


 
