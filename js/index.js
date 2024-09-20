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

("4");
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
const inputValue = prompt('Введите число'); //50
const result = inputValue + inputValue;
console.log('result :>> ', result);

