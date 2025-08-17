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
//
//!==================================================================================

function StudentPrototypePrototype() {
  this.eat = function () {
    return 'i am eat';
  };
}
function StudentPrototype() {
  this.speak = function () {
    return `${this.name} ${this.sname}щщщщщщщщщщщщщщщщщщщщщщ`;
  };
}
StudentPrototype.prototype = new StudentPrototypePrototype();
function Student(name, sname, age = 22) {
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.fuulName = function () {
    return `${this.name}-${this.sname}-${this.age}`;
  };
}

Student.prototype = new StudentPrototype();

const studentMain = new Student('musk', 'dedede', 44);

console.log(studentMain.eat());
// console.log(studentMain.sleep());
console.log(studentMain.fuulName());
console.log(studentMain.speak());
const studentMain1 = new Student('mgfgfsk', 'fg', 5555);
console.log(studentMain1.speak());
console.log(studentMain1.fuulName());
console.log(studentMain1.fuulName());




