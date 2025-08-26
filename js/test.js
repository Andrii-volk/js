'use strict';
// const toString = function () {
//   return `${this.name} ${this.sname}`;
// };

// const man = {
//   read: function () {
//     return this.name + ' reading';
//   },
// };
// const student = {
//   id: 1,
//   name: 'ellon',
//   sname: 'musk',
//   age: 50,
//   toString: toString,
// };
// const student2 = {
//   id: 2,
//   name: 'bob',
//   sname: 'mrofbusk',
//   age: 30,
//   toString, // toString:toString
// };
// // student.prototype =man
// student.__proto__ = man;

// console.log(student.read());
// console.log(student2);
// console.log(student.toString);
//!------------------------------------------------------------------------------------
//
//!==================================================================================

// function StudentPrototypePrototype() {
//   this.eat = function () {
//     return 'i am eat';
//   };
// }
// function StudentPrototype() {
//   this.speak = function () {
//     return `${this.name} ${this.sname}щщщщщщщщщщщщщщщщщщщщщщ`;
//   };
// }
// StudentPrototype.prototype = new StudentPrototypePrototype();
// function Student(name, sname, age = 22) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.fuulName = function () {
//     return `${this.name}-${this.sname}-${this.age}`;
//   };
// }

// Student.prototype = new StudentPrototype();

// const studentMain = new Student('musk', 'dedede', 44);

// console.log(studentMain.eat());
// // console.log(studentMain.sleep());
// console.log(studentMain.fuulName());
// console.log(studentMain.speak());
// const studentMain1 = new Student('mgfgfsk', 'fg', 5555);
// console.log(studentMain1.speak());
// console.log(studentMain1.fuulName());
// console.log(studentMain1.fuulName());

// function LadderStep() {
//   this.up = function () {
//     ++this.step;
//   };
//   this.down = function () {
//     this.step--;
//   };
//   this.showStep = function () {
//     return this.step;
//   };
// }

// function Ladder(step = 0) {
//   this.step = step;
// }
// Ladder.prototype = new LadderStep();
// const ladder = new Ladder();

// console.log(ladder.up());

// console.log(ladder.step);

// console.log(ladder.showStep());
// console.log(ladder.showStep());
// console.log(ladder.step);
// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.showStep());

// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.up());
// console.log(ladder.showStep());

// console.log(ladder.up());
// console.log(ladder.up());

// // console.log(ladder.up());
// // console.log(ladder.up());
// console.log(ladder.showStep());

// const myArray = [1, 2, 3];
// console.log(myArray);
//!---------------------------------------------------
//!concat
// const array1 = [1, 2, 3];
// const array2 = [4,5,6];
// const array3 = [array1.concat(array2)]
// console.log(array3);
//!reverse
// const array1 = [1, 2, 3];
// const array2 = [4,5,6];
// // const array3 = [array1.reverse()]
// console.log(array1.reverse());
//! push,unshift
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];

// console.log(array1.push(4, 5, 6));
// console.log(array2.unshift(4, 5, 6));
// console.log(array2);

// !shift,pop.

// const array1 = ['js','css','html'];

// console.log(array1.shift('js'));
// console.log(array1);
// console.log(array1.pop('html'));
// console.log(array1);
//!slice
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1.slice(0, 3)
// console.log(array2);
// const array3 = array1.slice(3,5);
// console.log(array3);
//!splice

// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1.splice(0, 3);
// console.log(array2);
// console.log(array1);

// console.log(array1.splice(3, 0));
// console.log(array1);

// const array1 = [1, 2, 3, 4, 5];
// // array1.splice(3,0,"a","b","c");
// array1.splice(1,0,"a","b",5,0,'c');

// // const array3 = array1.splice(-1, 1);
// console.log(array1);

//!sort
// const array1 = [3, 4, 1, 2, 7];
// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log(array1.sort(compareNumbers));
//!objekt.keys

// const object1 = {
//   js: 'test',
//   jq: 'Hello',
//   css:'World',
// }
// const returnArray = Object.keys(object1);
// console.log(returnArray);
//! необходимо создать функцию hasElement которая параметрами будет принимать массив и строку и возвращать true если есть строка в массиве и false если нет
// function hasElement(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] === str) {
//       return true
//     }
    
//   }
// return false
// }
// console.log(hasElement([], 'q'));
// console.log(hasElement(['q'], 'q'));
//!===================================================
function hasElement(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      return true
    }
    
  }
return false
}


// function hasElement(array, str) {
// console.log(array);
// if (array[0] === str) {
//   return true;
// } else {
//   return false;
// }
// {
//   return array.includes(str);
// }

// return array.includes(str);
// }

// hasElement(['3'], '')
// console.log(hasElement(['8'], '8'));
// console.log(hasElement([], ''));

// console.log(array);

//!дан массив с числами проверте что в этом массиве есть задданое число если есть true если не false

// function hasNumber(num) {
//   const array = [1, 2, 3, 4, 5]
//   return array.includes(num)
// }

// console.log(hasNumber());
//!дан масив с числами проверить если в нем два одинаковых числа если есть вернуть true если нет false
// debugger;
// function hasConsecutiveDuplicates(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }
//   return false
// }

// const result = hasConsecutiveDuplicates(['e','d','d']);
// console.log(result);
//! функция  которая возвращает массив заполненый 10 случайными числами в интервале от 5 до 33 Math.random

// function getRandomNumbersArray(arr = []) {
//   for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.floor(Math.random() * (33 - 5 + 1)) + 5;
//     arr.push(randomNumber);
//   }
//   return arr;
// }

// console.log(getRandomNumbersArray());

//! данны числа 4,-2,5,10,-130,0,33 найти мин число и макс число
// function findMinMaxNumber(arr = []) {
//   //  const arr =[]
//   const min = Math.min(...arr); //... спред оператор распаковывает массив на отдельные элэмэнты
//   const max = Math.max(...arr);
//   console.log(min, max);
//   return `min-${min},max-${max}`;
//   // return { min, max };
// }

// console.log(findMinMaxNumber([4, -2, 5, 10.14, -150, 0, 44]));
//! дан массив  arr найдите среднее арифметическое его элементов
//! [12,15,20,25,59,79]
// function getAverage(arr) {
//   let sum = 0; // сумма начинается с 0

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]; // прибавляем каждое число
//   }

//   return sum / arr.length; // делим на количество
// }

// console.log(getAverage([12, 15, 20, 25, 59, 79]));     //35

function sayWord(howSay,word='qwerty') {
  howSay(word);
}

sayWord(console.log, 'asd');