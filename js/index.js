'use strict';
// js язык с денамической типизацией высокоуровневая интерпретиррованная мултьтипарадигминная

// alert("hello world")
// console.log("hello wolrfd");

// let a = 1;

// console.log("a =", a);
// a = a + 1;
// console.log(a);

// const pi = 3.14;
// console.log(pi);

//string

// const stringVariable1 = "string";
// const stringVariable2 = "string";
// const stringVariable3 = `strting`;
// console.log('Hey says : "Hy how are you? "');
// литеральное задание значения

//number
// 1,22,-50 10,5 10e5,infinity,-infinity,0 (+0,-0),NaA-:"Not a number"

// const numberVariable1 = Infinity;
// const numberVariable2 = NaN;
// console.log('NaN :>> ', NaN);
// console.log(" numberVariable:>> ", numberVariable1);
// console.log(" 10/0", 10 / 0);
// console.log("10 / -0", 10 / -0);
// console.log('"abc" / 5', "abc" / 5);

// const bigintValue = 33333333333333333333n;

// console.log('bigintValue', bigintValue);
// console.log('bigintValue :>> ', bigintValue);

// boolean

// const boolVelue = false;
// console.log('boolVelue', boolVelue)

// const boolVelue1 = true;

// console.log('boolVelue1 :>> ', boolVelue1);

// const symbolValue = Symbol();
// console.log('symbolValue :>> ', symbolValue);

// undefined
// const undValue = undefined;
// console.log('undefined :>> ', undefined);

// null

// const nullValue = null;
// console.log('nullValue :>> ', nullValue);

// не примитив

// const obj = {};

// typeof толко для примитивов

// операции

// const a = 1;
// const b = 2;

// const c = a % b;  -остаток от деления

// console.log('c :>> ', c);

// 2 **2 поднесение в степень

// console.log('Math', Math.sqrt(9));
// console.log('Math.abs(-10', Math.abs(-10) );
// Math.sqrt корень квадратный
// const a = 2;
// const b = 3;
// const c = Math.sqrt(a ** 2 + b ** 2);
// console.log('c', c)
// console.log(typeof c);

// дано -squareSide = 5 s-? p-?

// const squareSide = 5;
// const resultS = (squareSide * squareSide );
// const resultS = Math.pow(squareSide, 2);
// console.log(resultS);

// const resultP = ((squareSide + squareSide) * 2)
// console.log('resultP', resultP)

// value = 20;
// value = value + 10;
// value += 10;
// console.log('value', value)

// let age = prompt('Сколько тебе лет?');
// let age2 = age * 2;

// i = 1
// i + = 1;
// i ++ 1  инкремент (инкрементировать тоесть увеличевать имменно на 1)

// let i = 1;
// постифкисный инкримент i++
// console.log("i++", i++);
// console.log("i", i);

// let j = 1;
// инфиксный инкримент ++j
// console.log("++j", ++j);
// console.log("j", j);

// постифкисный инкримент i--
// let g = 1;
// console.log('g', g);
// console.log("g", g--);
//  console.log("g", g--);
// инфиксный инкримент --j
// let f = 1;

// console.log('f-- :>> ', --f
// );
// console.log("f-- :>> ", --f);

// приоритетьтность операций
// const result6 = 10 * 5 - 8;
// const result7 = 2 ** (3 ** 2);
// console.log('result7 :>> ', result7);

// приведение типов явное

// ("4");
// console.log("Number('4') :>> ", Number("4"));
// console.log("Number('true') :>> ", Number(true));
// console.log("Number('false') :>> ", Number(false));
// console.log("Number('null') :>> ", Number(null));
// console.log("Number('undefined') :>> ", Number(undefined));
// console.log("Number('55n') :>> ", Number(55n));
// console.log("Number('Symbol()') :>> ", Number(Symbol()));

// не явное привидение типов

// console.log("true + 10 :>> ", true + 10);
// console.log(5 + '5');
// console.log('5' + 5);

// console.log(typeof ('5' + 5));
// console.log("5" + 5);

// введения данных
// prompt всё воспринимает как строку
// const inputValue = Number(prompt('Введите число')); //50
// const result = inputValue + inputValue; //'50' + '50'
// console.log('result :>> ', result);

// + перед prompt тоже приводит к числу
// const firstNumber = +(prompt('Введите первое число')); //5

// const firstNumber = Number(prompt("Введите первое число")); //5
// const secondNumber = Number(prompt("Введите второе число")); //5

// console.log(firstNumber + secondNumber);
// !
//?

//* dfgdfdfg

// TODO
// console.log('Elon musk', 1982);
// console.log('Elon musk');
// console.log (typeof(9546465464645656n));

// const string1 = ' I\'am a Teacher';
// console.log(typeof(string1));
//?
// console.log(string1 ,typeof string1);

// let condition = true;

// if(...условие){..блок кода который будет выполняться если условие правдиво...}

// if (condition) {
//   console.log("value =", condition)

// };

// ! false
// !undefined
// !nullё
// !NaN
// !  ''empty string
// ! 0 +0 -0*/

//!  console.log(-2 ** 3); ошибка
//? console.log((-2) ** 3); правильно

// !логическое нет ( инвертирует)
//  !undefined --- true

// ?'west' > 'best' ---сравниваеться номер символа в таблице (=)--всегда пишеьбся вторым

//логическое сложение ИЛИ ||(коньюкция)
// 0+1 =1  1+0=1 0+0=1
// возврашает  первую  правду или  поседнюю  ложь

// логическое  умножение И && (дизъюнкция)

// 1*0=0 0*1=0 0*0=0  1*1=1
// возврашает последную правду или первую ложь

// let condition = true && 12;

// console.log(condition);

// let price = 10;

// price = (price + 5) * 1.03

// console.log('price', price)

// let dateBirthDay;
// date_BirthDay = '2020/28/06';

// {
//   const dateBirthDay = '1971/28/06';
//   console.log('  dateBirthDay:>> ', dateBirthDay );
// }

// ? имя функции отвечает на вопрос что она делает

// function name(params) {

// }

// let str = prompt('Message', 'default');
// console.log('str :>> ', str);

// обьявление функции bad practic
// function requestNumberAtUser(params) {
//   const number = prompt('enter nuber','10' );
// }
// вызов функции
// requestNumberAtUser();

// good practic
// функцианальное выражение function expression
// const requestNumberAtUser = function name(params) {
//   prompt('enter number', '10');
// };
// requestNumberAtUser()

// !const summa = Number(firstNumber + secondNumber);//не преаброзует к числу

// !функция должна быть однозадачная
// const calcSummaTwoNumberReqAtUser = function name() {
//   const firstNumber = prompt('enter first number');
//   const secondNumber = prompt('enter second number');

// ошибка:если ничего не ввели пустая строка либо на жали отмена либо что-то не число
// const checkError =
//   firstNumber === '' ||
//   secondNumber === '' ||
//   firstNumber === null ||
//   secondNumber === null ||
//   isNaN(Number(firstNumber)) ||
//   isNaN(Number(secondNumber));
// if (checkError) {
// true
// обработка ошибки
// return 'error'; //exit
// } else {
// false
// если ошибки нет выполняем этот блок кода
// const summa = Number(firstNumber) + Number(secondNumber);
// return summa
// return Number(firstNumber) + Number(secondNumber);
// }
// };

// console.log('calcSumma() :>> ', calcSumma());

// const summa = calcSummaTwoNumberReqAtUser();
// console.log('summa :>> ', summa);

// -------------------------------------------

// const calcSummaTwoNumberReqAtUser = function name() {
// const firstNumber = prompt('enter first number');
// const secondNumber = prompt('enter second number');

/**
 *
 * @param {null | string} num
 * @returns { boolean}
 */
// const isErrorInputUser = function (num) {
// const error = num === '' || num === null || isNaN(Number(num));
// return error;

//   return num === '' || num === null || isNaN(Number(num));
// };

/**
 * Return summa two number.
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {null | number}
 */
// const calcSummaTwoNumber = function name(firstNumber, secondNumber) {
//   let summa = Number(firstNumber) + Number(secondNumber);
//   if (isNaN(summa)) {
//   }
//   return null;
// };
// return summa;

// let summaLit = calcSummaTwoNumber(1, 2);
// console.log('summaList :>> ', summaLit);

// let summaUser = calcSummaTwoNumber(firstNumber, secondNumber);

// console.log('summaUser :>> ', summaUser);

// const summa = calcSummaTwoNumber(1,2);
// console.log('summa :>> ', summa);
// if (condition) {
// } else {
// }

// num = 3;

//TODO task find the perimeter of the square P=4×a
// const sideSquare = prompt('Enter side square', '10');
/**
 *
 * @param {number} side
 * @returns {null | number}
 */
// const CalcPerimeterSquare = function name(side = 0) {
//   if (side < 0) {
//     return null

//   }
//   return side * 4;
// };

// console.log(CalcPerimeterSquare());

/**
 *
 *
 */
// const isAdult = function (age = 0) {
//   if (18 >= 0) {
//     return false;
//   }
//   console.log('isAdult', isAdult)
// };

// b = 4;

// let a = 0;
// let b = '';
// let c = null;

// let result = a || b || c;

// console.log('result', result);

// if (0 || 0 || 1) {
//   console.log('Мы попали  в условие');
// } else {
//   console.log('не попали');
// }

// if (1 === Number || 1 !== 1) {
//   console.log('Мы попали  в условие');
// } else {
//   console.log('не попали');
// }

/**
 *
 * @param {number} side
 * @returns {null | number}
 */
// const checksTheTriangleForEquiangularity = function (
//   sideA = 60,
//   sideB = 30,
//   sideC = 60
// ) {
//   if (sideA + sideB + sideC !== 180) {
//     // return ;
//     return console.log('неравносторонний');
//   }
//   if (sideA === sideB && sideB === sideC) {
//     return console.log('равносторонний');
//   }
// };

// checksTheTriangleForEquiangularity(60, 60, 60);

// const checksTheTriangleForRectangularity = function (
//   sideA = 90,
//   sideB = 30,
//   sideC = 60
// ) {
//   const RIGHT_ANGLE = 90;
//   if (sideA + sideB + sideC !== 180) {
//     return console.log('НЕ треугольник');
//   }
//   if (sideA === RIGHT_ANGLE || sideB === RIGHT_ANGLE || sideC === RIGHT_ANGLE) {
//     return console.log('прямоугольный треуголмек');
//   }

//   return console.log('НЕ прямоугольный треуголмек');
// };
// checksTheTriangleForRectangularity(80,50,50 );

// const checksTheTriangleForIsosceles = function (
//   angleA = 0,
//   angleB = 0,
//   angleC = 0
// ) {
//   const RIGHT_ANGLE = 90;
//   if (angleA + angleB + angleC !== 180) {
//     return console.log('НЕ треугольник');
//   }

//   if (angleA === angleB || angleA === angleC) {
//    return console.log('isosceles');
//   }

//   return console.log('not isosceles');
// };
// checksTheTriangleForIsosceles(10, 20, 150);

// let a = 3;
// let b = 7;
// console.log(typeof (a + b));

// const MAX_SPEED = 120;
// console.log(`Максимальная скорость: ${MAX_SPEED + MAX_SPEED}`);
// let num = Number(stringValur);

// let stringValur = '150';

// console.log(Number (stringValur) + 50);

// let x = 12;
// let y = 4;

// console.log(x / y);
// console.log(x % y);

// const temperature =1;

// if (temperature > 0) {
//   console.log('plus');
// } else if (temperature < 0) {
//   console.log('minus');
// } else {
//   console.log('0');
// }

// let isMemmber = true;
// let isGuest = true;

// if (isMemmber || isGuest) {
//   console.log('ok');
// }

// console.log('ne ok');

// let value = '40';

// console.log(Number(value) + 8);
// console.log(typeof value);

// let a = 10;
// let b = 5;

// let result = a > b;
// console.log(Boolean(result));

// const greet = function (name) {
//   return console.log(name);
// };

// greet("andrei")
// console.log(typeof greet);

// if (true) {
//   //true
// } else {
//   //false
// }

//true or false
// const isEven= function (number=432) {
//   return number % 2 === 0;
// }

// const returnEvenWord = function (number = 432) {
//   // if (number % 2 === 0) {
//   //   return'even '  //!!!!return !exit
//   // };

//   // return'odd'

//   return number % 2 ? 'even' : 'odd';
// };
// console.log(returnEvenWord ());

// const checksForAdulthood = function (number = 0) {
//   return number >= 18 ? 'adult' : 'not adult';
// };

// const summa = 23232;
// const LIMIT_SUMMA = 1000;

// const sale = summa > LIMIT_SUMMA ? 0.2 : 0;

// const classInput = check ? 'unabled' : 'disabled';

// const classInput = isValid ? 'valid' : 'invalid'

// const userNumber = Number(prompt('Enter number'));
// if (isNaN(userNumber)) {
//   console.log('NAN');
// } else {
//   if (userNumber % 5 === 0) {
//     console.log('cratno 8');
//   } else{ }
//   if (userNumber % 3 === 0) {
//     console.log('cratno 3');
//   }
//   if (userNumber % 2 === 0) {
//     console.log('cratno 2');
//   }
// }

// console.log('thanks');

//!ветвление от противного
// const userNumber = Number(prompt('Enter number'));
// if (isNaN(userNumber)) {
//   console.log(userNumber, 'NAN');

// } else if (userNumber % 5 === 0,) {
//   console.log(userNumber,'34');

// } else if userNumber(userNumber % 3 === 0) {
//   console.log(userNumber,'multyply 3');

// }

// const lang = prompt('Choose lang:\n1-ua\n2-it\n3-en\n4-es')

//!Условный оператор множественого выбора
// switch (lang) {
//   case '1':
//     console.log('привіт');
//     break;
//   case '2':
//     console.log('chao');
//     break;
//   case '3':
//     console.log('hello');
//     break;
//   case '4':
//     console.log('holla');
//     break;

//   default:
//     console.log('reapeat choose');
//     break;
// }

//  ![0-3  )      [ ----включая  ,  )---- не включая   //

// const age= '123';

// if (isNaN(age) || age < 0) {
//   console.log('error');
// } else if (age < 3) {
//   console.log('baby');
// } else if (age < 6) {
//   console.log('tudler');
// } else if (age < 13) {
//   console.log('children');
// } else if (age < 18) {
//   console.log('tinager');
// } else if (age < 70) {
//   console.log('adult');
// } else if (age < 100) {
//   console.log('oldmen');
// } else  {
//   console.log('respect');
// }

//! проаверка на ощибку
// const oddNumber = prompt('Введите число');

// if (isNaN(oddNumber)) {
//   console.log('Вы ввели не число');
// } else {
//   const result = oddNumber % 2;
//   if (result === 0) {
//     console.log('Это четное число');
//   } else {
//     console.log('Это нечетное число');
//   }
// }

// const numberWeek = prompt('Введите день недели');

// switch (numberWeek) {
//   case 1:
//     console.log('Понедельник');
//     break;
//   case 2:
//     console.log('Вторник ');
//     break;
//   case 3:
//     console.log('Среда');
//     break;
//   case 4:
//     console.log('Четверг');
//     break;
//   case 5:
//     console.log('Пятница');
//     break;
//   case 6:
//     console.log('Суббота');
//     break;
//   case 7:
//     console.log('Воскресенье');
//     break;
//   default:
//     console.log('Ошибка ');
//     break;
// }
//!----------------функции высшего порядка

// const calculate = function (num = 10, num2 = 2, operator = '+') {
//   if (isNaN(num1 * num2)) {
//     return false;
//   }
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num1 / num2;

//     default:
//       return null;
//   }
// };

// console.log(calculate(undefined, undefined, '+'));

// const highOrderFunction = function (num1, num2, func) {
//   return func(num1,num2)

// }
// console.log(highOrderFunction(4, 3, mult));
// console.log(highOrderFunction(34,4,div
// ));

//?----------------------------цыклы-------------------------------
//const CORRECT_PASSWORD = 'qwe123';
//! while
const MAX_TRY = 3;
// let count = 0;
// while (true) {
//   const userInput = prompt('enter password');
//   count++;
//   if (count >= MAX_TRY) {
//     console.log('попытки кончились');
//     break;
//   }
//   if (userInput !== CORRECT_PASSWORD) {
//     console.log('ещ раз');
//   } else if (userInput === CORRECT_PASSWORD) {
//     console.log('пароль принят');
//     break;
//   }
// }

// for (let i = 0; i < MAX_TRY; i++) {
//   const userInput = prompt('enter password');
//   if (userInput === CORRECT_PASSWORD) {
//     console.log('пароль принят');
//     break;
//   }
// }

// const calcFactorial = function (number = 3) {
//   let result = 1;
//   for (let i = 1; i <= number; i++){
//     result *= i;
//   }
// };
//?--------------------------------------------------------------------------
// Написать код, который предлагает пользователю угадать "секретное число".

// Секретное число хранится в константе.
// Пользователь пытается угадать, вы в зависимоти от ответа пользователя даете подсказки: больше или меньше секретное число.
// После того, как пользователь угадал секретное число, вы выводите ему количество попыток, которые были потрачены на угадывание.

// const SECRET_NUMBER = 4;

// let numberUser = Number(prompt('Попрубуте угадать секретное число'));

// let i = 0;
// while (true) {
//   if (numberUser === SECRET_NUMBER) {
//     console.log('Вы угадали число c попытки ' + i);

//     break;
//   } else if (numberUser >= 0) {
//     console.log('Введите менье');
//   } else if (numberUser <= 0) {
//     console.log('Ведите больше');
//   }

//   i++;
// }

// let num = 0;
// while (num < 5) {
//   console.log(num);
//   num++;
// }
