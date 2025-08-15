function MyArray() {
  this.lenght = 0;
  this.push = function (value) {
    this[this.lenght] = value;
    this.lenght++;
    return this.lenght;
  };
}

// const MyArray = new MyArray();
// console.log(MyArray.length);

function MyArrayPrototype() {
  this.push = function (value) {
    this[this.lenght] = value;
    this.lenght++;
    return this.lenght;
  };
}

function MyArray() {
  this.lenght = 0;
}

MyArray.prototype = new MyArrayPrototype();

const myFun = function () {};

console.dir(myFun);
