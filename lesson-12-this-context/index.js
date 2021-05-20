import readmeLoader from '../readmeContentLoader.js';

void readmeLoader();

var firstName = 'GLOBAL FIRST NAME';
var lastName = 'GLOBAL LAST NAME';
var age = 'GLOBAL AGE';

const person1 = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 21,
  arrowSayHello: () => console.log(`Hello my name is ${this?.firstName} ${this?.lastName} and I am ${this?.age} years old`),
  sayHello: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
  },
  say2Words: function (word1, word2) {
    console.log(`Person ${this.firstName} ${this.lastName} is saying:`);
    console.log('Word 1: ', word1);
    console.log('Word 2: ', word2);
  }
}

const person2 = {
  firstName: 'Andrzej',
  lastName: 'Tracz',
  age: 33,
  sayHelloAfter5sec: function () {
    window.setTimeout(() => console.log(`AFTER 5 SEC - Hello I am ${this.firstName} and I am ${this.age} years old`), 5000)
  },
  sayHelloAfter6sec: function () {
    window.setTimeout(function () {
      console.log(`AFTER 6 SEC - Hello I am ${this.firstName} and I am ${this.age} years old`);
    }, 6000)
  }
}

const person3 = {
  firstName: 'Justyna',
  lastName: 'Kowalczyk',
  age: 23,
}

//TASK-1
person1.arrowSayHello();
console.log('TASK-1', '"Hello my name is GLOBAL FIRST NAME GLOBAL LAST NAME and I am GLOBAL AGE years old" will be printed. Because arrawSayHello is an arrow function and therefore "this" is the window object.');

//TASK-2
person1.sayHello();
console.log('TASK-2', '"Hello my name is Jan Kowalski and I am 21 years old" will be printed. sayHello is a regular function and "this" is person1 so it uses variables under person1 scope.');

//TASK-3
person1.sayHello.call(person3);
console.log('TASK-3', '"Hello my name is Justyna Kowalczyk and I am 23 years old" will be printed. Because when we use "call" method, we changed the "this" inside person1, now our new "this" is person3.');

//TASK-4
person2.sayHelloAfter5sec();
console.log('TASK-4', '"AFTER 5 SEC - Hello I am Andrzej and I am 33 years old" will be printed after 5 seconds. Because our "this" is person2 and its variables were used.');

//TASK-5
person2.sayHelloAfter6sec();
console.log('TASK-5', '"AFTER 6 SEC - Hello I am GLOBAL FIRST NAME and I am GLOBAL AGE years old" will be printed. Because there is no defined variable inside the scope so "this" can not reach any values.');

//TASK-6
person2.sayHelloAfter5sec.call(person3);
console.log('TASK-6', '"AFTER 5 SEC - Hello I am Justyna and I am 23 years old" will be printed.');

//TASK-7
person2.sayHelloAfter6sec.call(person3);
console.log('TASK-7', '"AFTER 6 SEC - Hello I am GLOBAL FIRST NAME and I am GLOBAL AGE years old" will be printed.');

//TASK-8
person1.say2Words.call(person3, 'first word', 'second word');
console.log('TASK-7', '"Person Justyna Kowalczyk is saying: Word 1:  first word Word 2:  second word" will be printed.')

//TASK-9
person1.say2Words.apply(person3, ['first word', 'second word']);
console.log('TASK-8', '"Person Justyna Kowalczyk is saying: Word 1:  first word Word 2:  second word" will be printed.')

console.log('QUESTION-1: ', '"call" calls a function while "bind" creates a function.');
console.log('QUESTION-2: ', 'No, I will have an error.')
console.log('QUESTION-3: ', 'We need to reach HTML file before js file because js runs after HTML is parsed.');
console.log('QUESTION-4: ', '"Hello my name is undefined undefined and I am undefined years old" would be printed for TASK-1 for both let and const.');
console.log('QUESTION-5: ', 'This in regular function will be always a "this" of object of which you called the function. This in arrow function is always bind to the scope in which function is created');
