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
