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

//?------------------------------0-------------------------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)

// 0.Вывести три раза в консоль слово бе-бе-бе'

// for (let i = 0; i < 3; i++) {
//   console.log('бе-бе-бе');
// }

// let num = 0;
// let word = 'бе-бе-бе';
// while (num < 3) {
//   console.log(word);
//   num++;
// }

// let num = 0;
// let word = 'бе-бе-бе';
// do {
//   console.log('бе-бе-бе');
//   num++
// } while (num < 3);

//?--------------------------1---------------------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)
// 1.Вывести числа от 1 до 10. Каждое число в новой строке в консоли.

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);

//?----------------------------2-----------------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)
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

//?--------------------------------------3-----------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)
// 3.Вывести число 3 6 9 12... до 100

// for (let i = 3; i < 100; i += 3){

//   console.log(i);

// }

// let i = 3;
// while (i < 100) {
//   console.log(i);
//   i += 3;
// }

// let i = 3;
// do {
//   console.log(i);

//   i += 3;
// } while (i < 100);
//?-----------------------------------4----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 4.Вывести только четные число от 2 до 40

// for (let i = 2; i < 42; i += 2) {
//   console.log(i);
// }

// let i = 2;
// while (i < 42) {
//   console.log(i);
//   i += 2;
// }

// let i = 2;

// do {
//   console.log(i);
//   i += 2;
// } while (i < 42);
//?-----------------------------------5----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 5.Вывести числа от 1 до 10. Все число должны быть в одной строке(конкатенация).

// let str = '';
// for (let i = 1; i < 11; i++) {
//   str += i;
// }
// console.log(str);

// let str = '';
// i = 0;
// while (i < 10) {
//   i++;
//   str += i;
// }
// console.log(str);

// let str = '';
// i = 0;

// do {
//   i++;
//   str += i;
// } while (i < 10);
// console.log(str);

//?-----------------------------------6----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 6.Посчитать сумму всех чисел от 1  до 10

// let sum = 0;
// for (let i = 1; i < 11; i++) {
//   sum+= i;
// }
// console.log(sum);

// let sum = 0;
// let i = 0;
// while (i < 11) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// do {
//   sum += i;
//   i++;
// } while (i < 11);
// console.log(sum);

//?-----------------------------------7----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 7.Посчитать факториал введенного числа

// let factorial = Number(prompt('Введите число')); //5
// let resultfactorial =1
// for (let i = 1; i <= factorial; i++) {
//  resultfactorial*=i

// }
// console.log(resultfactorial);

// let factorial = Number(prompt('Введите число'));
// let resultfactorial = 1;
// let i = 1;

// while (i <= factorial) {
//   resultfactorial *= i;
//   i++;
// }
// console.log(resultfactorial);

// let factorial = Number(prompt('Введите число'));
// let resultfactorial = 1;
// let i = 1;

// do {
//   resultfactorial *= i;
//   i++;
// } while (i <= factorial);
// console.log(resultfactorial);

//?-----------------------------------8----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 8.Найти сумму всех четных чисел от 10 до 20

// let sum = 0;                          //не смог посмотрел у gpt
// for (let i = 10; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
//!доделать осаольные два цкла while & dowhile
//?-----------------------------------9----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\

// 9.Вывести таблицу умножения на 5 (от 1 до 10)

// let calc = 0;  //сам решил заняло 10мин

// for (let i = 1; i <= 10; i = i + 1) {
//   calc = i * 5;
//   console.log(calc);
// }

// let calc = 0;
// let i = 1;

// while (i <= 10) {
//   calc = i * 5;
//   i++;
//   console.log(calc);
// }

// let calc = 0;
// let i = 1;
// do {
//   calc = i * 5;
//     i++;
//     console.log(calc);
// } while (i <= 10);

//?-----------------------------------10----------------------------------------
//? Каждую задачу нужно решить тремя циклами(for, while, do while)\
// 10.Спросить у пользователя ты долбоеб? Он должен ответить да или нет. Спрашивать у него до тех пор пока он не согласится.

// let userAnswer = '';
// for (let i = 1; i > 0; i++) {
//   if (userAnswer === 'да') {
//     alert('я так и знал)))');
//     break;
//   } else {
//     userAnswer = prompt('Ты долбаёб?Да или нет?').toLowerCase();
//   }
// }

// let userAnswer = '';
// i = 1;
// while (i > 0) {
//   if (userAnswer === 'да') {
//     alert('я так и знал)))');
//     break;
//   } else {
//     userAnswer = prompt('Ты долбаёб?Да или нет?').toLowerCase();
//   }
// }

// let userAnswer = '';
// i = 1;

// do {
//   if (userAnswer === 'да') {
//     alert('я так и знал)))');
//     break;
//   } else {
//     userAnswer = prompt('Ты долбаёб?Да или нет?').toLowerCase();
//   }
// } while (i > 0);
//!-----------------------------------------------------------------------------------------------------
// Артем Удовиченко, [13.11.2024 12:21]
// Без использования string
// Задачи средней сложности. Решать любым удобным циклом.
// 1. Вывести все числа от 1 до 100, которые делятся на 3 или на 5.
// 2. Посчитать количество цифр в числе.(Math.floor)
// 3. Посчитать сумму цифр в числе.(Math.floor)
// 4. Проверить, является ли число простым.
// 5. Найти наименьший общий делитель (НОД) двух чисел.
// 6. Проверить, является ли число совершенным.
// 7. Найти произведение всех нечетных чисел от 1 до n.
// 8. Посчитать сумму всех чисел от 1 до n, которые делятся на 7.
// 9. Найти ближайший квадратный корень, не превышающий данное число.
// 10. Определить, есть ли в числе одинаковые цифры.

//?--------------------------------------------1--------------------------------------
// 1. Вывести все числа от 1 до 100, которые делятся на 3 или на 5.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

//?----------------------------------------------2--------------------------------------------
//!решено 40% остальное чат
// 2. Посчитать количество цифр в числе.(Math.floor)

// let num = 1234;
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(count);

//?--------------------------------3----------------------------------------
//!---не решено решение chat gpt
// 3. Посчитать сумму цифр в числе.(Math.floor)

// let number = 123;  // Число, для которого считаем сумму цифр
// let sum = 0;       // Переменная для хранения суммы цифр

// while (number > 0) {
//   sum += number % 10; // Добавляем последнюю цифру к сумме
//   number = Math.floor(number / 10); // Убираем последнюю цифру
// }

// console.log(sum); // Выводим результат
//?------------------------------------4-------------------------
// 4. Проверить, является ли число простым.

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 4. Посчитать, сколько чисел от 1 до N делятся на 3
// Напишите программу, которая находит, сколько чисел от 1 до N делятся на 3.

// Алгоритм:

// Используйте цикл, чтобы пройти все числа от 1 до N.
// Если число делится на 3, увеличивайте счетчик.

// let numbersDivided = 9;//!решено с алгоритмической подсказкой чата без готового кода
// let i = 1;
// while (i <= numbersDivided) {
//   if (i % 3 === 0) {
//   }
//   i++;
// }
