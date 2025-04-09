// const summand1 = 1;
// const summand2 = 4;

// console.log(`${summand1 + summand2}`);

// Написать код, который предлагает пользователю угадать "секретное число".

// Секретное число хранится в константе.
// Пользователь пытается угадать, вы в зависимоти от ответа пользователя даете подсказки: больше или меньше секретное число.
// После того, как пользователь угадал секретное число, вы выводите ему количество попыток, которые были потрачены на угадывание.

// let secretNumbre = prompt('Угадайте секреиное число?');

//функция которая проверяет возраст на совершенолетие
// /**
//  *
//  * @param {number} age
//  * @param {number} ADULT
//  * @returns {boolean}
//  */
// const isAdult = function (age = 0, ADULT = 18) {
//   return age >= ADULT ? true : false;
// };

// const result = isAdult(17, 21);
// console.log(result);
// функция которая принимает два числа и проверяет кратность первого вторым

// const checkMultiplicityTwoNumbers = function (num1, num2) {
//   return num1 % num2 === 0;
// if (num1 % num2 === 0) {
//   return true;
// }
// return false;
// };

// console.log(checkMultiplicityTwoNumbers(4, 3));

// const calcRectangleArea = function (width = 0, height = 0) {
//   return width * height;
// };

// const result = calcRectangleArea(4, 4);
// console.log(result);

// Треугольник существует только тогда, когда сумма двух его сторон больше третьей. Требуется сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, то треугольника с такими сторонами не существует.

// const checkExistenceTriangle = function (a, b, c) {
//   return b + c > a && c + a > b && a + b > c;
// };

// console.log(checkExistenceTriangle(2, 2, 2));

// const breysPhraseOrMeaning = function (a) {
//   if (a === false || a === NaN || a === undefined || a === null || a === '') {
//     return 'повторите ввод';
//   }
//   return a;
// };

// console.log(breysPhraseOrMeaning(prompt('Введите что-то')));

// const EnteringUuser = prompt('Введите что-то')

// const f = function () {
//   const input = prompt('введите что то')
//   if (input === null) {
//     return 'повторите ввод'

//   }
//   return input
// }

// f4()

const obj1 = {};

const obj2 = Object();

const obj3 = new Object();
