import readmeLoader from '../../readmeContentLoader.js';

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
console.log('TASK-1', 'PUT YOUR EXPLANATION HERE');

//TASK-2
console.log('TASK-2', 'PUT YOUR EXPLANATION HERE');

//TASK-3
console.log('TASK-3', 'PUT YOUR EXPLANATION HERE');

//TASK-4
console.log('TASK-4', 'PUT YOUR EXPLANATION HERE');

//TASK-5
console.log('TASK-5', 'PUT YOUR EXPLANATION HERE');

//TASK-6
console.log('TASK-6', 'PUT YOUR EXPLANATION HERE');

//TASK-7
console.log('TASK-7', 'PUT YOUR EXPLANATION HERE');

//TASK-8
console.log('TASK-8', 'PUT YOUR EXPLANATION HERE');

//TASK-9
console.log('TASK-9', 'PUT YOUR EXPLANATION HERE');


console.log('QUESTION-1: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-2: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-3: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-4: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-5: ', 'PUT YOUR ANSWER HERE');
