// Артем Удовиченко, [13.11.2024 12:11]
// Каждую задачу нужно решить тремя циклами(for, while, do while)
// Легкий уровень
// 0.Вывести три раза в консоль слово хуй
// 1.Вывести числа от 1 до 10. Каждое число в новой строке в консоли.
// 2.Вывести числа от 10 до 1. Каждое число в новой строке в консоли.
// 3.Вывести число 3 6 9 12... до 100
// 4.Вывести только четные число от 2 до 40
// 5.Вывести числа от 1 до 10. Все число должны быть в одной строке(конкатенация).
// 6.Посчитать сумму всех чисел от 1  до 10
// 7.Посчитать факториал введенного числа
// 8.Найти сумму всех четных чисел от 10 до 20
// 9.Вывести таблицу умножения на 5 (от 1 до 10)
// 10.Спросить у пользователя ты долбоеб? Он должен ответить да или нет. Спрашивать у него до тех пор пока он не согласится.
// 0.Вывести три раза в консоль слово хуй
//!=========================================================================================================

// for (let i = 0; i < 3; i++) {
//   console.log('привет');
// }

// let i = 0;

// while (i < 3) {
//   console.log('привет');
//   i++;
// }

// let i = 0;
// do {
//   console.log('привет');
//   i++
// } while (i < 3);
//!========================================================================================================
// 1.Вывести числа от 1 до 10. Каждое число в новой строке в консоли.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//!===========================================================================================
// 2.Вывести числа от 10 до 1. Каждое число в новой строке в консоли.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;

// do {
//   console.log(i);
//   i--;
// } while (i > 0);
//!=========================================================================================================
// 3.Вывести число 3 6 9 12... до 100

// for (let i = 3; i <= 100; i += 3){

//   console.log(i);

// }

// let i = 3;

// while (i <= 100) {
//   console.log(i);
//   i +=3

// }

// let i = 3;

// do {
//   console.log(i);
//   i += 3;

// } while (i <= 100);

//!===============================================================================================================

// 4.Вывести только четные число от 2 до 40

// for (let i = 2; i <= 40; i += 2) {
//   console.log(i);
// }

// let i = 2;

// while (i <= 40) {
//   console.log(i);
//   i += 2;
// }

// let i = 2;

// do {
//   console.log(i);
//   i += 2;
// } while (i <= 40);

//!==================================================================================================================

// 5.Вывести числа от 1 до 10. Все число должны быть в одной строке(конкатенация).

//  TODO --создать перемменую куда накапливать результат и склеивать и выводить

// let resultString = '';

// for (let i = 1; i <= 10; i++) {
//   resultString += i;
// }

// console.log(resultString);

// let resultString = '';
// let i = 1;

// while (i <= 10) {

//   resultString += i;
//   i++;
// }
// console.log(resultString);

// let resultString = '';
// let i = 1;
// do {
//   resultString += i;
//   i++;
// } while (i <= 10);
// console.log(resultString);
//!========================================================================================================

// 6.Посчитать сумму всех чисел от 1  до 10  1+ 2 + 3 + 4 + 5.........

// let sumNumbers = 0;

// for (let i = 1; i <= 10; i++) {
//   sumNumbers += i;
// console.log(sumNumbers);

// }
// console.log('calculation result=', sumNumbers);

// let sumNumbers = 0;
// let i = 1;

// while (i <= 10) {
//   sumNumbers += i;
//   i++;
// }
// console.log(sumNumbers);

// let sumNumbers = 0;
// let i = 1;
// do {
//   sumNumbers += i;
//   i++;
// } while (i <= 10);
// console.log(sumNumbers);

//!===============================================================================================================

// 7.Посчитать факториал введенного числа !5= 1*2*3*4*5

// let factorial = Number(prompt('Введите число')); //!7 =5040
// let resultFactorial = 1;
// for (let i = 1; i <= factorial; i++) {
//   resultFactorial *= i;
// }

// console.log(resultFactorial);

// let factorial = Number(prompt('Введите число'));
// let resultFactorial = 1;
// let i = 1;
// while (i <= factorial) {
//   resultFactorial *= i;
//   i++;
// }

// console.log(resultFactorial);

// let factorial = Number(prompt('Введите число'));
// let resultFactorial = 1;
// let i = 1;

// do {
//   resultFactorial *= i;
//   i++;
// } while (i <= factorial);
// console.log(resultFactorial);

//!===============================================================================================================

// 8.Найти сумму всех четных чисел от 10 до 20

// let sumEvenNumbers = 0;

// for (let i = 10; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sumEvenNumbers += i;
//   }

// }

// let sumEvenNumbers = 0;
// let i = 10;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     sumEvenNumbers += i;
//   }
//   i++;
// }

// console.log(sumEvenNumbers);

// let sumEvenNumbers = 0;
// let i = 10;

// do {
//   if (i % 2 === 0) {
//     sumEvenNumbers += i;
//   }
//   i++;
// } while (i <= 20);
// console.log(sumEvenNumbers);
//!========================================================================================================================

// 9.Вывести таблицу умножения на 5 (от 1 до 10)

// let multiplicationTable = 5;
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//   result = multiplicationTable * i;
//   console.log(result);
// }

// let multiplicationTable = 5;
// let resultMultiplication = 0;
// let i = 1;

// while (i <= 10) {
//   resultMultiplication = multiplicationTable * i;
//   i++;
//   console.log(resultMultiplication);
// }

// let multiplicationTable = 5;
// let resultMultiplication = 0;
// let i = 1;

// do {
//   resultMultiplication = multiplicationTable * i;
//   i++;
//   console.log(resultMultiplication);
// } while (i <= 10);
//!======================================================================================================================

// 10.Спросить у пользователя ты долбоеб? Он должен ответить да или нет. Спрашивать у него до тех пор пока он не согласится.
