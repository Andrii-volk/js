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

// let IsUseraFool = Number(confirm('ты дурак?'));

// for (let i = 1; i > 0; i++) {
//   let IsUseraFool = Number(confirm('ты дурак?'));
//   if (IsUseraFool === 1) {
//     alert('good foo')
//     break;
//   }
// }

// let IsUseraFool = Number(confirm('ты дурак?'));
// let i = 1;
// while (i > 0) {
//   let IsUseraFool = Number(confirm('ты дурак?'));

//   if (IsUseraFool === 1) {
//     alert('Молодец))))');
//     break;
//   }
// }

// let IsUseraFool = Number(confirm('ты дурак?'));
// let i = 1;

// do {
//   let IsUseraFool = Number(confirm('ты дурак?'));

//   if (IsUseraFool === 1) {
//     alert('Молодец))))');
//     break;
//   }
// } while (i > 0);
//!================================================================================================================

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
//!=========================================================================================
// 1. Вывести все числа от 1 до 100, которые делятся на 3 или на 5.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

//!==================================================================================================================

// 2. Посчитать количество цифр в числе.(Math.floor)
//TODO создать переменую для подсчёта количества итераций делить на 10 остаток у брать
// let num = Number(prompt('введите число')); //100 - 1,0,0 три числа
// let i = 0;

// while (num >= 1) {
//   num = Math.floor(num / 10);
//   i++;
// }
// console.log(i);
//!================================================================================================================
// 3. Посчитать сумму цифр в числе.(Math.floor)

// let number = prompt('введите число'); // Число, для которого считаем сумму цифр
// let sum = 0; // Переменная для хранения суммы цифр

// while (number > 0) {
//   sum += number % 10; // Добавляем последнюю цифру к сумме
//   number = Math.floor(number / 10); // Убираем последнюю цифру
// }

// console.log(sum); // Выводим результат
//!======================================================================================================
// 4. Проверить, является ли число простым.// это число которое делиться без остатка на 1 и на само себя

// let userNum = Number(prompt('введите число')); //10

// let i = 2;

// //TODO делить сначала на 1 ..2..3..4..5..6
// while (i < userNum) {
//   if (userNum % i ===0) {
//     // break;
//     console.log(' простое число ');

//   }

//   else {
//     console.log(' число не являеться простым');
//   }
//   i++;
// }

//!решение чата

// let userNum = Number(prompt('Введите число'));
// let i = 2;

// while (i < userNum) {
//   if (userNum % i === 0) {
//     console.log('Число не является простым');
//     break;
//   }
//   i++;
// }

// if (i === userNum && userNum > 1) {
//   console.log('Простое число');
// }

// && userNum % userNum === 0
//!=========================================================================================================
// 5. Найти наименьший общий делитель (НОД) двух чисел.
//
/* TODO 
Начни с простых шагов:

1️⃣ Ввод чисел – сначала попроси пользователя ввести два числа.
2️⃣ Определение меньшего числа – это поможет ограничить диапазон поиска.
3️⃣ Перебор делителей – начиная с 1, проверяй, какие числа делят оба введённых числа без остатка.
4️⃣ Запомни наибольший общий делитель – среди найденных делителей выбери максимальный.
5️⃣ Выведи результат – после завершения перебора покажи НОД.
Наибольший общий делитель (НОД) — это наибольшее число, которое одновременно делит два или более числа без остатка
Попробуй написать код, а я помогу исправить, если что-то пойдёт не так! 😊*/

// 5. Найти наименьший общий делитель (НОД) двух чисел.
//
/* TODO 
Начни с простых шагов:

1️⃣ Ввод чисел – сначала попроси пользователя ввести два числа.
2️⃣ Определение меньшего числа – это поможет ограничить диапазон поиска.
3️⃣ Перебор делителей – начиная с 1, проверяй, какие числа делят оба введённых числа без остатка.
4️⃣ Запомни наибольший общий делитель – среди найденных делителей выбери максимальный.
5️⃣ Выведи результат – после завершения перебора покажи НОД.
Наибольший общий делитель (НОД) — это наибольшее число, которое одновременно делит два или более числа без остатка
Попробуй написать код, а я помогу исправить, если что-то пойдёт не так! 😊*/

// ChatGPT сказал:
// Ты почти на правильном пути! Чтобы завершить код, нужно определить условие для while и логику проверки делителей. Вот пример, как можно доработать код:

// Сначала вводим два числа.
// Определяем, какое из чисел меньше, чтобы ограничить диапазон поиска.
// Перебираем числа от 1 до меньшего из чисел, проверяя, какие из них делят оба числа нацело.
// Запоминаем наибольший общий делитель.
// Вот исправленный вариант:

// let firstNumber = Number(prompt('Введите первое число'));
// let secondNumber = Number(prompt('Введите второе число'));

// Находим меньшее из чисел
// let minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
// let gcd = 1; // Начинаем с самого маленького возможного НОД, это 1

// Перебираем все числа от 1 до меньшего числа
// for (let i = 1; i <= minNumber; i++) {
//   if (firstNumber % i === 0 && secondNumber % i === 0) {
//     gcd = i; // Если оба числа делятся на i, запоминаем его как НОД
//   }
// }

// alert(
//   `Наибольший общий делитель (НОД) чисел ${firstNumber} и ${secondNumber} равен ${gcd}`
// );
// 18. Найти наибольший общий делитель (НОД) чисел 36 и 48.

// let a = 36;
// let b = 48;

// while (b !== 0) {
//   let remainder = a % b;
//   a = b;
//   b = remainder;
// }

// console.log(a); // Выведет 12 использован алгоритм Евклида, который находит НОД двух чисел,
//!====================================================================================================
// 6. Проверить, является ли число совершенным.
