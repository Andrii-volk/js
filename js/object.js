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
//       table[`${i}*${j}`] = i * j;
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

const customer = {
  name: 'Mikki',
  sername: 'mikkivich',
  email: 'mikki@gmail.com',
  password: 'qwwrr',
  phoneNumber: '23232323223',
  adress: {
    city: 'Kiev',
    sreet: 'kievskaia',
    house: '34',
    apartment: '3',
  },

  seeAdress() {
    return `${customer.adress}`;
  },
  changePhoneNumber(newNuber) {
    return (this.phoneNumber = newNuber);
  },
};

customer.isMale = {
  male: true,
  female: false,
};
delete customer.email;

const customerCopy = { ...customer }; // копирование обьекта
const customerCopy1 = Object.assign({}, customer); // копирование обьекта
console.log(customerCopy1);

customer.changePhoneNumber('34343343434344444444444444444444');
console.log(customer.adress);
console.log(customer);

const cat = {
  name: 'Murka',
  color: 'red',
  isMale: false,
  isFurnitureDamage: true,
};

for (let key in cat) {
  console.log(key, cat[key]);
}

const currentYear = new Date().getFullYear();

const Book = function (author, Name, yearRelease, price) {
  this.author = author;
  this.name = Name;
  this.yearRelease = yearRelease;
  this.publisher = {
    city: 'Kiev',
    name: 'gary potter',
  };
  this.price = price;
  this.culcAgeBook = function () {
    return currentYear - this.yearRelease;
  };

  this.culcPrice = function () {
    return (this.price += 5);
  };
};
