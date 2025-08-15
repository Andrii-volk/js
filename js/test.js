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
//!-----------------пример таблички умножения
const creareMultTable = function (limit = 9) {
  const table = {};
  for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= limit; j++) {
      table[`${i}*${j}`] = i * j;
    }
  }

  return table;
};

const table = creareMultTable();
console.log(table);
