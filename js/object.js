'use strict';
//три способа создать обьект
// { }
// Object
// new Object

// const obj1 = {
//   rele: 'value',
//   number: 23,
//   bool:false
// };

// const cat = {
//литеральный способ обьявления
// name: 'Bill',
// isMale: false,
// age: 33,
// breed: 'street',
// color: 'gray',
//   say: function (d, y) {
//     return 'meyow';
//   },
//   run: function () {
//     return 'i';
//   },
// };

// alert(cat);
// console.log(cat.say());
// console.log(cat.name);
// cat.age += 17;

// cat.colorEye = 'red';
// // cat.colorEye = undefined;
// delete cat.color;
// delete cat.age;

// const dog1 = {
//   name: 'bob',
//   age: 3,
//   color: 'black',

//   say: function () {
//     return 'gav';
//   },
// };

// const dog2 = {
//   name: 'sven',
//   color: 'red',
//   age: 4,
//   say: function (voice) {
//     return voice;
//   },
// };

// console.log(dog1);
// // dog1.age = 33;
// console.log(dog1.age);

// console.log(dog1.name, dog1.say('woof'));
// console.log(dog1.say('gavvvvvvv'));

// function Dog(name, color, isMale) {
//   this.name = name;
//   this.color = color;
//   this.isMAle = isMale;
//   this.say = function (voice) {
//     return voice;
//   };
// }

// const dog1 = new Dog('green', true);
/* при вызове на место this становиться имя dog1
dog1.name = 'Oscar';
  dog1.color = "green";


*/
// console.log(dog1);
// console.log(dog1.say('kdkdkdkddk'));
// const dog2 = new Dog('Bob', 'red', true);
// console.log(dog2);

// function User(name, sname, age) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.getFullNmae = function () {
//     return this.name + this.sname;
//   };
// }

// const foruser = new User('andrii ', 'boyar', 33);

// console.log(foruser, foruser.getFullNmae());

// const foruser1 = new ForUser('bob ', 'bobovich', 3);

// console.log(foruser1, foruser1.getFullNmae());

// const foruser2 = new ForUser('sten ', 'test', 55);

// console.log(foruser2, foruser2.getFullNmae());
// ? функция конструктор для создания странны usa
// function Country(nameCountry, population, area) {
//   this.nameCountry = nameCountry;
//   this.population = population;
//   this.area = area;
//   this.getDensite = function () {
//     return this.population / this.area;
//   };
// }

// const USA = new Country('USA', 331000000, 9500000);
// console.log(USA);
// const densite = USA.getDensite();
// console.log(densite);
//!===============================================================

// function Auto(marka = 'bmw', maxSpeed = 200) {
//   this.name = marka;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;

//   this.accelerate = function (value) {
//     this.speed += value;
//   };
//   this.decelerate = function (value) {
//     return this.speed;
//   };
//   this.stop = function () {
//     return (this.speed = 0);
//   };
// }

// const auto = new Auto();
// console.log(auto);

// const obl = {
//   prop1: 12,
//   'prop 2': true,
//   11: 33,
// };

// const key = 'prop 2';
// console.log(obl);
// console.log(obl['prop 2']);
// console.log(obl[11]);

// const table = {
// '2*2':4,

// }
//todo вернуть обьект таблица умножения
// const creataMulTable = function (limit = 10) {
//   const table = {};
//   for (let i = 2; i <= limit; i++) {
//     for (let j = 2; j <= limit; j++) {
//       table[`${i}*${j}`] = i * j; // добавляет данные в обьект через квадратные скобки потому что ключ переменая или строка
//     }
//   }
//   return table;
// };

// const table = creataMulTable();
// console.log(table);

// const car = {
//   brand: 'wolcwagen',
//   model: 'passat',
//   yearRelease: 2003,
//   number: '3333',
//   color: 'green',
// };

// for (let kay in car) {
//   console.log(`car.${kay} = ${car[kay]}`);
// }

// for (let kay in car) {
//   // console.log(kay);
//   console.log(kay, car[kay]);
// }

// console.log(car);
// car.color = 'red';
// delete car.yearRelease;

// car.firstNameUser = 'bred';
// car.lastNameUser = 'rererere';

// console.log(car);

// const user = {
//   firstName: 'dag',
//   lastName: 'test',
//   age: 34,
//   password: 'qwerrt',
//   color: 'blue',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   changePassword: function (newPass) {
//     this.password = newPass;
//   },
//   ChangesСolor(newColor) {
//     this.color = newColor;
//   },
// };

// user.ChangesСolor('green');
// user.changePassword('2323233');
// console.log(user);
// user.lastName = 'testovich';
// user.firstName = 'test';
// const userFullName = user.getFullName();

// console.log(userFullName);

// console.log(user);

// const user1 = user;
// user1.firstName = 'rerererere';
// console.log(user);
// console.log(user1);
// перебор обьекта for ..in

// for (let key in user) {
//   // console.log(key);
//   console.log(key,user[key]);
// }
// let eserProp = prompt('введите свойство')
// console.log(user[eserProp]);

// const human = {
//   name: 'ivo',
//   physParams: {
//     height: 1.9,
//     weidht : 34,
//   }
// }

// console.log(human);

// function User(firstName, lastName, age, password) {
//   // как работает  функция конструктор под капотом
//   // создаёться обьект и напичкиваеться данными
//   // потом возврашаеться этот обьект нашпигованый данными
//   // const this ={}
//   this.name = firstName;
//   this.surname = lastName;
//   this.age = age;
//   this.passw = password;
//   this.makeOlder = function () {
//     this.age++;
//   }
//   // return this;
// }

// const user1 = new User('ivan', 'ivanovich', 4, 'qwwer');
// console.log(user1);
// const user2 = new User('oleh', 'olehovich', 4, 'q43434343');
// console.log(user2);
// user1.makeOlder()
// // провкрка типа обьекта
// console.log(user1 instanceof User);

// const isWorkingAgePerson = function (agePerson) {
//   return agePerson >= 16 && agePerson <= 65;
// };

// console.log(isWorkingAgePerson(16));
// console.log(isWorkingAgePerson(3));

// console.log(isWorkingAgePerson(88));
// console.log(isWorkingAgePerson(65));

// const checkMultioliciti = function ( firstNum , SecondNUm) {

//   return firstNum % SecondNUm === 0;

// }

// console.log(checkMultioliciti(25, 5));
// console.log(checkMultioliciti(15, 3));

// console.log(checkMultioliciti(15, 5));

// console.log(checkMultioliciti(15, 4));

// Треугольник существует только тогда, когда сумма двух его сторон больше третьей
// const checkExistenceTriangle = function (a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// };

// console.log(checkExistenceTriangle(1, 2, 3));
// console.log(checkExistenceTriangle(6,8,10));

// реализовать функцию для расчёта площади(или поверхности) следующей фигуры треугольник прямоугольник в зависимости от переданных размеров фигуры функция должна вернуть вычесленное значение минимум для одной фигуры на выбор

// /**
//  * Function to calculate the area of a shape.
//  * @param {string} shape - The type of shape ('rectangle' or 'triangle').
//  * @param {number} dimension1 - The first dimension (width and length for rectangle, base for triangle).
//  * @param {number} dimension2 - The second dimension (length for rectangle, height for triangle).
//  * @returns {number} The area of the shape.
//  * @throws {Error} If the shape is unknown.
//  */
// function calculateArea(shape, dimension1, dimension2) {
//   if (shape === 'rectangle') {
//     // Для прямоугольника: площадь = ширина * длина
//     return dimension1 * dimension2;
//   } else if (shape === 'triangle') {
//     // Для треугольника: площадь = (основание * высота) / 2
//     return (dimension1 * dimension2) / 2;
//   } else {
//     return 'Неизвестная фигура';
//   }
// }

// console.log(calculateArea('rectangle', 5, 10)); // Площадь прямоугольника: 50
// console.log(calculateArea('triangle', 5, 10));

// /**
//  * Функция проверяет, находится ли число в допустимом диапазоне.
//  * @param {number} num - Проверяемое число.
//  * @returns {string} Результат проверки.
//  * @throws {RangeError} Если число выходит за допустимый диапазон.
//  */
// function checkNumberInRange(num) {
//   if (num < 1 || num > 100) {
//     throw new RangeError('Число должно быть в пределах от 1 до 100');
//   }
//   return 'Число в допустимом диапазоне';
// }

// try {
//   console.log(checkNumberInRange(150));  // Это вызовет ошибку
// } catch (error) {
//   console.error(error);  // Поймает и выведет ошибку
// }
// throw new Error('Что-то пошло не так');

// const customer = {
//   name: 'Mikki',
//   sername: 'mikkivich',
//   email: 'mikki@gmail.com',
//   password: 'qwwrr',
//   phoneNumber: '23232323223',
//   adress: {
//     city: 'Kiev',
//     sreet: 'kievskaia',
//     house: '34',
//     apartment: '3',
//   },

//   seeAdress() {
//     return `${customer.adress}`;
//   },
//   changePhoneNumber(newNuber) {
//     return (this.phoneNumber = newNuber);
//   },
// };

// customer.isMale = {
//   male: true,
//   female: false,
// };
// delete customer.email;

// const customerCopy = { ...customer }; // копирование обьекта
// const customerCopy1 = Object.assign({}, customer); // копирование обьекта
// console.log(customerCopy1);

// customer.changePhoneNumber('34343343434344444444444444444444');
// console.log(customer.adress);
// console.log(customer);

// const cat = {
//   name: 'Murka',
//   color: 'red',
//   isMale: false,
//   isFurnitureDamage: true,
// };

// for (let key in cat) {
//   console.log(key, cat[key]);
// }

// const currentYear = new Date().getFullYear();

// const Book = function (author, Name, yearRelease, price) {
//   this.author = author;
//   this.name = Name;
//   this.yearRelease = yearRelease;
//   this.publisher = {
//     city: 'Kiev',
//     name: 'gary potter',
//   };
//   this.price = price;
//   this.culcAgeBook = function () {
//     return currentYear - this.yearRelease;
//   };

//   this.culcPrice = function () {
//     return (this.price += 5);
//   };
// };

// const book1 = new Book('frfrfrfr', 'rfrfrfrfrf', 4444, 4);
// console.log(book1);

// const person = {
//   name: 'Ivan',
//   age: 34,
//   isStudent: false,

// }
// console.log(person);

// const car = {
//   brand: 'Toyota',
//   year: 2010,
// };

// car.color = 'red';
// car.year = 2022;
// console.log(car);

// const book = {
//   name: 'gary potter',
//   yearRelease: 2333,
//   numberPages: 333,
// };

// delete book.yearRelease;
// console.log(book);

// const user = {
//   username: 'ivan',
// };
// let key = 'username';
// console.log(user[key]);

// const fruit = {
//   name: 'apple',
//   color: 'green',
//   isSweet: false,
// };

// for (let key in fruit) {
//   console.log(`${key} >>>> ${fruit[key]}`);
// }

// const user = {
//   username: '',
// };
// user.username = 'greg';
// console.log(user);
// console.log(user.username);

// const book = {
//   title: '44',
// };

// book.author = 'foma';

// for (let key in book) {
//   // console.log(key);

//   console.log(`${key} >>> ${book[key]}`);
// }

// const human = {
//   name:'Greg',
//   age:33,
//   cityResidence: 'Kiev',
//   isAdult:true,
// }

// const player = {
//   name: 'Greg',
//   score: 0,
//   rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
//   },
// };

// for (let i = 1; i <= 3; i++) {
//   let diceResult = player.rollDice();
//   console.log(`Бросок ${i}: ${diceResult}`); // Выводим номер броска и результат
//   player.score += diceResult;
//   console.log(`Бросок${i}>>>${player['name']}:${player['score']}`);
// }
// console.log(`итоговая сумма бросков>>>${player['name']}:${player['score']}`);

// const book = {
//   title: 'Red cat',
//   author: 'Mikki Rurk',
//   year: 1943,
//   getInfo() {
//     return `Название книги:${this.title},Автор:${this.author},Год издания:${this.year}`;
//   },
// };

// console.log(book.getInfo());

// const obj1 = {};
// const obj2 = {};
// const newObj = obj1;//копирование по ссылке

// const Phone = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.getDetails = function () {
//     return `модель:${this.brand} марка: ${this.model} цена:${this.price}`;
//   };
// };
// const lg = new Phone('samsung', 's23', 22);
// console.log(lg.getDetails());
// const samsung = new Phone('Lg', 'f3434', 333);
// console.log(samsung.getDetails());

// const array = new Array(1, 2, 3);

// const array1 = [1, 2, 3, 4];
// console.log(array);
// console.log(array1);

// console.log(array.length);
// console.log(array1.push(8));


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

// const dog1 = {
//   name: 'fred',
//   color: 'red',
//   say: function () {
//     return 'gav';
//   },
// };

// const dog2 = {
//   name: 'ray',
//   color: 'blue',
//   say: function (voice) {
//     return voice;
//   },
// // };

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.say = function (voice = 'woof') {
//     return voice;
//   };
// }

// const dog1 = new Dog('ray', 'red');
// console.log(dog1);
// const dog2 = new Dog('Smit', 'black');
// console.log(dog2);

// function User(name, sname, getFullNmae) {
//   this.name = name;
//   this.sname = sname;
//   this.getFullName = function () {
//     return this.name + ' ', this.sname;
//   };
// }

// const user1 = new User('frenk', 'frencovich');
// console.log(user1);

// function Website(title, style) {
//   this.title = title;
//   this.style = style;
//   this.showStyle = function () {
//     return `сайт:${this.title},стиль ${this.style}`;
//   };
// }

// const website = new Website('мой сайт', 'синий');

// console.log(website);
// console.log(website.showStyle());

// function dfdf() {
//   console.log(this);
// }

// function Contry(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return Number(this.population / this.area);
//   };
// }

// const usa = new Contry('usa',121420000n, 2333333n);

// console.log(`${usa.name} плотность населения,${usa.getDensity()},`);

// const poland = new Contry('Poland', 38000000n, 312000n);
// console.log(`${poland.name}  плотность населения ${poland.getDensity()} `);

// function Recipe(ketoOmletname, mainIngredients, prepTime) {
//   this.ketoOmletname = ketoOmletname;
//   this.mainIngredients = mainIngredients;
//   this.prepTime = prepTime;
//   this.getTotalTime = function () {
//     return this.prepTime + 10;
//   };
// }

// const ketoOmelette = new Recipe('Keto omlete', 'eggs', 13);
// console.log(
//   `Name recipe-${ketoOmelette.ketoOmletname}ingridirnt=> ${
//     ketoOmelette.mainIngredients
//   } - total time ${ketoOmelette.getTotalTime()} `
// );

// function Phone(brand, model, price, screenSize) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.screenSize = screenSize;
//   this.getInfo = function () {
//     return `brand:${this.brand}-model: ${this.model}-price:${this.price}-screenSize:${this.screenSize}  `;
//   };
//   this.isExpensive = function () {
//     return 'дороже 500$';
//   };
// }

// const iphone = new Phone('Iphone', '16e', '200$', 6.1);
// console.log(iphone);
// console.log(iphone.getInfo());

// const samsung = new Phone('Samsung', 'Galaxy A54', '400', 6.4);

// console.log(samsung);
// console.log(samsung.getInfo());

// function Student(grade1 = 0, grade2 = 0, grade3 = 0) {
//   this.grade1 = grade1;
//   this.grade2 = grade2;
//   this.grade3 = grade3;
//   this.setGrades = function () {
//     return this.grade1 + this.grade2 + this.grade3;
//   };
//   this.getAverage = function () {
//     return this.setGrades() / 3;
//   };
//   this.isExellent = function () {
//     return this.getAverage() > 4.5;
//   };
// }

// const newStudent = new Student(3, 3, 4);
// console.log(newStudent);
// console.log(newStudent.getAverage());
// console.log(newStudent.isExellent());

// function Exercise(name, reps, weight) {
//   this.name = name;
//   this.reps = reps;
//   this.weight = weight;
//   this.getEffort = function () {
//     return this.reps * this.weight;
//   };
// }

// function Workout(name, duration, exercise) {
//   this.name = name;
//   this.duration = duration;
//   this.exercise = exercise;
//   this.getTotalEffort = function () {
//     return this.exercise.getEffort();
//   };
// }
// const pushUp = new Exercise('Push-ups', 20, 0);
// const morningWorkout = new Workout('Morning Workout', 30, pushUp);
// console.log(
//   `${
//     morningWorkout.name
//   } total effort: ${morningWorkout.getTotalEffort()}, duration: ${
//     morningWorkout.duration
//   } minutes`
// );

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return Math.trunc(this.population / this.area);
//   };
// }

// const russia = new Country('russia', 146028000, 17125191);
// const canada = new Country('canada', 40590000, 9984670);
// const india = new Country('india', 1440000000, 3287263);

// console.log(
//   russia.name,
//   '-The number of people per 1 km2=',
//   russia.getDensity(),'people'
// );
// console.log(
//   canada.name,
//   '-The number of people per 1 km2=',
//   canada.getDensity(),
//   'people'
// );

// console.log(
//   india.name,
//   '-The number of people per 1 km2=',
//   india.getDensity(),
//   'people'
// );

// function Auto(marka = 'bmw', maxSpeed = 450) {
//   this.name = marka;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;
//   this.acceleration = function (value = 10) {
//     if (value > 0) {
//       this.speed += value;
//     }
//     if (this.speed > this.maxSpeed) {
//       return (this.speed = this.maxSpeed);
//     }
//     return this.speed;
//   };
//   this.deceleration = function (value = 10) {
//     if (value > 0) {
//       this.speed -= value;
//       if (this.speed <= 0) {
//         return (this.speed = 0);
//       }
//       return this.speed;
//     }
//   };

//   this.stop = function () {
//     return (this.speed = 0);
//   };
// }

// const auto = new Auto();
// console.log(auto);
// console.log(auto.acceleration(50));
// console.log(auto.deceleration());
// console.log(auto.deceleration());

// console.log(auto.deceleration());

// console.log(auto);

// console.log(auto.acceleration());

// console.log(auto.acceleration());

// const obj = {
//   prop1: 12,
//   prop2: 'sdsd',
//   'prop 3': true,
//   11: 22,
// };

// const key = 'prop 3';
// console.log(obj);
// console.log(obj['prop1']);
// console.log(obj.prop2);
// console.log(obj['prop 3']);
// console.log(obj['11']);
// console.log(obj[key]);
//-----------------пример таблички умножения
// const createMultTable = function (limit = 9) {
//   const table = {};
//   for (let i = 2; i <= limit; i++) {
//     for (let j = 2; j <= limit; j++) {
//       table[`${i}*${j}`] = i * j;
//     }
//   }

//   return table;
// };

//   const table = createMultTable();
// console.log(table);

// const tel1 = '123-1234';
// const tel2 = '123-12-12';
// const tel3 = '123-12-12';

// const bookTel = {
//   1: '123-1234',
//   2: '123-12-12',
//   3: '123-12-12',
// };

// console.log(bookTel);

// console.log(bookTel['1']);

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.introducce = function () {
//     return `My name- ${name},i how${age}`
//   }

// };

// const myName = new Person('Andrii', 35)
// console.log(myName.introducce());

// const Book = function (title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} написсана ${this.author} в ${this.year}`;
//   }

//   this.isClassic = function () {
//     return this.year <= 2000;
//   }
// };

// const book1 = new Book('Война и мир', 'Лев Толстой', 1869);
// const book2 = new Book('Гарри Поттер', 'Дж. К. Роулинг', 2021);

// console.log(book1.getSummary());
// console.log(book1.isClassic());
// console.log(book2.isClassic());

