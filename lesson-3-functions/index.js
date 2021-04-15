import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//TASK 1

function division(a, b) {
    return a / b;
}
console.log('TASK-1', division(4, 2));

//TASK 2

function multiply(a, b) {
    return a * b;
}
console.log('TASK-2', multiply(4, 2));

//TASK 3

const difference = function (a, b) {
    return a - b;
}
console.log('TASK-3', difference(4, 2));

//TASK 4

const checkIsEvenAfterIncreasedBy6 = (number) => (number + 6) % 2 === 0;
console.log('TASK-4', checkIsEvenAfterIncreasedBy6(6));
console.log('TASK-4', checkIsEvenAfterIncreasedBy6(7));

//TASK 5

const concatenateValues = (value1, value2) => value1 + value2;
console.log('TASK-5', concatenateValues('uni', 'corn'));
console.log('TASK-5', concatenateValues('pan', 'da'));

//QUESTION

console.log('QUESTION', ' If we use functions we don not need to write codes for the same action over again. If we need an action that needs to be repeated by taking different parameters, in that case they will be useful.')