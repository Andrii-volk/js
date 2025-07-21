'use strict';

// let userName = prompt('Enter your name');
// alert(`Your name ${userName}`);

// const nameJs = prompt('Какое официальное название Java Script?');

// if (nameJs && nameJs.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   alert('Верно');
// } else {
//   alert('Не знаете? “ECMAScript”!');
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// const result = ((a + b) < 4) ? 'Мало' : 'Много';
//заменть на while
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// Запустить демо

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// const cat = {
//   // литеральный способ создания обьекта
//   color: 'black',
//   name: 'fred',
//   age: 12,
//   breed: 'meykun',
//   say: function () {
//     return 'myu';
//   },
//   run: function () {
//     return 'go-go';
//   },
// };

// console.log(cat);
// console.log(cat.age);
// cat.age = 3;
// console.log(cat.age);
// console.log(cat);
// cat.colorEye = 'red';
// delete cat.name;
// console.log(cat.say());
// console.log(cat.run());

const dog1 = {
  name: 'fred',
  color: 'red',
  say: function () {
    return 'gav';
  },
};

const dog2 = {
  name: 'ray',
  color: 'blue',
  say: function () {
    return 'gav-gav ';
  },
};
console.log(dog1.name);
 
console.log(dog1.say());
