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
// const MAX_TRY = 3;
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

//????????????????????????????????????????????????????????????????????

// 1. Вывести все числа от 1 до 10

// for (let i = 1; i >= 10; i++) {
//   console.log(i);
// }

// let num1 = 5;
// let num2 = 6;

// let result = num1 + num2;

// console.log('результат\t' + result);

// let num = 1;
// console.log(num);

// let string = 'red'
// console.log(string);

// alert('я джава')

// перебор числа от 5 до 0

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// let userName = 'Andrii';
// // alert(userName);
// console.log('userName', userName);
// const userAge = 35;
// const userName = 'Andrii';
// console.log(userAge);
// console.log(userName);

// const greeting = 'You are:';

// const num = 5;

// const age = prompt('How old are you?');

// console.log(greeting + age + 'years old');

// const num1 = Number(prompt('Введите число пеорвое'));
// const num2 = Number(prompt('Введите число второе '));

// const num3 = Number(prompt('Введите число третье'));

// const result = num1 * num2 * num3;

// console.log(result);

// const num1 = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));
// const mathSimbol = prompt('Введите ведите знак операции');

// if (mathSimbol === '+') {
//   let result = num1 + num2;
//   console.log(result);
// } else {
//   let result = num1 - num2;
//   console.log(result);
// }

// const day = 'saturday';
// const date = 11;

// if (day === 'saturday' && date === 10) {
//   console.log('Сегодня пятница 13 и у вас есть скидка');
// } else {
//   console.log('((( жаль вам не положена скидка');
// }

// let result = prompt('fgdfg', ['sdfsdf']);

// let sideCount = 1;
// const TOTAL_SIDE_AMOUNT = 4;

// while (sideCount <= TOTAL_SIDE_AMOUNT) {
//   console.log('пройти прямо');
//   console.log('пройти на право');
//   // sideCount = sideCount + 1;
//   sideCount++;
// }
// console.log(sideCount);

// const pageCount = 400;
// let firstPage = 1;

// while (firstPage <= pageCount) {
//   console.log(firstPage);
//   firstPage++;
// }

// let userNum = Number(prompt('Введте число'));
// alert(userNum ** 2);

// let userFirstNum = Number(prompt('введите первое число '));
// let userSecondNum = Number(prompt('введите второе число '));

// let result = (userFirstNum + userSecondNum) / 2;

// alert(result);

// let userMinutes = Number(prompt('введите кол-во минут '));

// let userSeconds = userMinutes * 60;

// alert(userSeconds     +  'sec');

// let greeting = 'Hello: ';

// let userName = prompt('как вас зовут?');

// alert(greeting + userName);

// const dataUser = Number(prompt('Введите число'));

// if (dataUser === 10) {
//   console.log('верно');
// } else {
//   alert('не верно');
// }

// const isTest = false;

// if (isTest === true) {
//     console.log('верно');
// } else {
//     console.log('не верно');

// }

// if (!isTest === true) {
//   console.log('верно');
// } else {
//     console.log('не верно');

// }

// let purchaseAmount = Number(prompt('Введите сумму покупки'));

// if (purchaseAmount >= 500 && purchaseAmount < 800) {
//   let resuSum = purchaseAmount * 0.03;

//   let disont = purchaseAmount - resuSum;

//   console.log(
//     'вам надано скидку 3% к оплате',
//     Math.floor(disont),
//     'Скидка:',
//     resuSum.toFixed(1)
//   );
// } else {
//   if (purchaseAmount >= 800) {
//     let resuSum = purchaseAmount * 0.05;

//     let disont = purchaseAmount - resuSum;

//     console.log(
//       'вам надано скидку 5% к оплате',
//       Math.floor(disont),
//       'Скидка:',
//       resuSum.toFixed(1)
//     );
//   } else {
//     console.log('скидка предоставляеться от покупки на сумму от 500гр');
//   }
// }

// let num = 26;

// while (num > 0) {
//   num--
//   console.log(num);
// }

// let num = 10;

// while (num <= 50) {
//   console.log(num);
//   num += 5;
// }
//todo циклы
//1. Вывести три раза в консоль слово "хуй".
// 2. Вывести числа от 1 до 10. Каждое число в новой строке.
// 3. Вывести числа от 10 до 1. Каждое число в новой строке.
// 4. Вывести четные числа от 2 до 20.
// 5. Вывести нечетные числа от 1 до 19.
// 6. Вывести квадраты чисел от 1 до 10.
// 7. Вывести таблицу умножения числа 5 от 1 до 10.
// 8. Вывести сумму чисел от 1 до 10.
// 9. Вывести сумму четных чисел от 1 до 20.
// 10. Вывести сумму нечетных чисел от 1 до 20.
// 11. Вывести факториал числа 5 (5!).
// 12. Вывести все числа от 1 до 50, которые делятся на 7 без остатка.
// 13. Вывести все числа от 1 до 100, которые делятся на 3 и 5 одновременно.
// 14. Вывести все двузначные числа, у которых сумма цифр равна 10.
// 15. Вывести числа Фибоначчи до 10-го элемента.
// 16. Вывести числа от 1 до 20, но вместо чисел, кратных 3, вывести "Fizz", а вместо кратных 5 — "Buzz".
// 17. Найти количество делителей числа 24.
// 18. Найти наибольший общий делитель (НОД) чисел 36 и 48.
// 19. Проверить, является ли число 37 простым.
// 20. Найти первое число больше 100, которое делится на 17 без остатка.
//!
//1. Вывести три раза в консоль слово "хуй".
// for (let i = 3; i >= 0; i--) {
//   console.log('tre');
// }
//!
// 2. Вывести числа от 1 до 10. Каждое число в новой строке.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//!
// 3. Вывести числа от 10 до 1. Каждое число в новой строке.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
//!
// 4. Вывести четные числа от 2 до 20.
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//!
// Вывести нечетные числа от 1 до 19.
// for (let i = 1; i <= 19; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
//!
// 6. Вывести квадраты чисел от 1 до 10.
// for (let i = 2; i <= 10; i++) {
//   console.log(i ** 2);
// }
//!
// 7. Вывести таблицу умножения числа 5 от 1 до 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }
//!
// 8. Вывести сумму чисел от 1 до 10.
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(sum);
// }
//!
// 9. Вывести сумму четных чисел от 1 до 20.

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(sum);
//   }
//     console.log(sum);

// }
//!
// 10. Вывести сумму нечетных чисел от 1 до 20.
//TODO проверить через чат gpt
// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//     console.log(sum);
//   }
//   console.log(sum);
// }
//!
// 11. Вывести факториал числа 5 (5!).

// let factorial = 1;
// for (let i = 1; i <= 5;i++){
//   factorial *= i;
//   console.log(factorial);
// }
// !
// 12. Вывести все числа от 1 до 50, которые делятся на 7 без остатка.

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }
//!
// 13. Вывести все числа от 1 до 100, которые делятся на 3 и 5 одновременно.
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
//!
// 14. Вывести все двузначные числа, у которых сумма цифр равна 10.
//todo не решено решено в чате gpt
// let sum = 0;
// let i = 0;
// while (i <= 99) {
//   i++;
//   sum += i;
//   if (sum===10) {

//     console.log(sum);
//   }

// }
//!
// 15. Вывести числа Фибоначчи до 10-го элемента. первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// for (let i = 3; i <= 10; i++) {
//   let sum = a + b; // Складываем два предыдущих числа
//   console.log(sum);

//   a = b; // Обновляем значения
//   b = sum;
// }
//!
//  16. Вывести числа от 1 до 20, но вместо чисел, кратных 3, вывести "Fizz", а вместо кратных 5 — "Buzz".

// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log('fizzbuzz');
//   }
// }
//!
// 17. Найти количество делителей числа 24.должно делиться на на каждое число без остатка от 1 до 24

// let numberDivisors = 0;
// for (let i = 1; i <= 24; i++) {
//   if (24 % i === 0) {
//     numberDivisors++;
//   }
// }
// console.log(numberDivisors);
//!
// 18. Найти наибольший общий делитель (НОД) чисел 36 и 48.

// let a = 36;
// let b = 48;

// while (b !== 0) {
//   let remainder = a % b;
//   a = b;
//   b = remainder;
// }

// console.log(a); // Выведет 12 использован алгоритм Евклида, который находит НОД двух чисел,

//!---------------------------------------------------
// function requestNumberAtUser(params) {
//   let number = prompt('enter number');
// }

// requestNumberAtUser()
//!функция страшное гавно
// const calcSumma = function () {
//   const checkError =
//     number1 === '' ||
//     number2 === '' ||
//     number1 === null ||
//     number2 === null ||
//     isNaN(Number(number1)) ||
//     isNaN(Number(number2));
//   const number1 = prompt('enter number1');
//   const number2 = prompt('enter number2');
//   if (checkError
// number1 === '' ||
// number2 === '' ||
// number1 === null ||
// number2 === null ||
// isNaN(Number(number1)) ||
// isNaN(Number(number2))
// ) {
// return null; ///'error'; //exit лучше воврошать null
// }
// else {
//
// let summa = Number(number1) + Number(number2);}
// return summa;\
// return Number(number1) + Number(number2);
// };

// let summa = calcSumma();
// console.log(summa);

// const checkError =
//   number1 === '' ||
//   number2 === '' ||
//   number1 === null ||
//   number2 === null ||
//   isNaN(Number(number1)) ||
//   isNaN(Number(number2));
// const number1 = prompt('enter number1');
// const number2 = prompt('enter number2');

// const calcSumma = function (number1, number2) {
//   return Number(number1) + Number(number2);
// };
// console.log(calcSumma);

// let summaLiter = calcSumma(1, 3); //передаём литерально
// let summaUser = calcSumma(number1, number2); // передаём через перемменную.

/**
 * описание функции summa two number
 * '*' значит any -любой
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {null | number}
 */
// const calcSummaTwonumber = function (number1, number2) {
//   let summa = number1 + number2;
//   if (isNaN(summa)) {
//     return null;
//   }
//   return summa;
// };
// /**
//  *
//  * @param {null | string} num
//  * @returns {boolean}
//  */
// const isErrorInputNumber = function (num) {
//   return num === '' || num === null || isNaN(Number(num));
// };

//!============
//
// setInterval(function () {
//   let MessageInput = document.getElementById('message');
//   window.alert(MessageInput.value)
// },4000);

// const hour = new Date();
// console.log(hour);

// const numbersMultipleNum = function (firstNum, secondNum, num) {
//   for (let i = firstNum; i >= secondNum; i--) {
//     if (i % num === 0) {
//       console.log(i);
//     } else {
//       for (let i = firstNum; firstNum <= secondNum; i++)
//         if (i % num === 0) {
//           console.log(i);
//         }
//     }
//   }
// };
// numbersMultipleNum(20, 15, 3);
// numbersMultipleNum(3, 22, 5);

// function f(first, last, number) {
//   while (first !== last) {
//     if (first % number === 0) {
//       console.log(first);
//     }
//     first++;
//   }
// }

// const numbersMultipleNum = function (firstNum, secondNum, num) {
// Определяем направление
//   if (firstNum >= secondNum) {
//     // Идём от большего к меньшему
//     for (let i = firstNum; i >= secondNum; i--) {
//       if (i % num === 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     // Идём от меньшего к большему
//     for (let i = firstNum; i <= secondNum; i++) {
//       if (i % num === 0) {
//         console.log(i);
//       }
//     }
//   }
// };

// Примеры использования
// numbersMultipleNum(20, 15, 3);
// Вывод:
// 18
// 15

// numbersMultipleNum(333, 22, 5);
// Вывод: тот же, что выше (от 330 до 25)
//предлагать пользователю решить арифмитический пример до тех пор пока он его не рещит
//создать функцию продумать параметры используя параметры сформировать промпт вычисл
//todo add math operation sinds
const treningMAth = function (
  firstNum = 5,
  secondNum = 5,
  applyOperators = '*'
) {
  let resultMultiply = 0;
  switch (applyOperators) {
    case '*':
      resultMultiply = firstNum * secondNum;

      break;
    case '+':
      resultMultiply = firstNum + secondNum;
      break;
    case '-':
      resultMultiply = firstNum - secondNum;
      break;
    case '/':
      resultMultiply = firstNum / secondNum;
      break;
  }
  let i = 1;
  let answer = 0;

  while (true) {
    let answer = Number(
      prompt(
        `решите арифметический пример: ${firstNum} ${applyOperators} ${secondNum} = `
      )
    );
    if (isNaN(answer)) {
      alert('Введите число!');
      continue;
    }
    if (resultMultiply === answer) {
      alert(
        `${firstNum} ${applyOperators} ${secondNum} =${answer} ваш ответ правильный `
      );
      break;
    }
    i++;
  }
};

treningMAth();
treningMAth(4, 4, '-');
