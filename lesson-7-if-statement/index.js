import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task-1

function checkIfDivisibleBy2Or3(valueA) {
    if(valueA % 2 === 0) {
        console.log('Divisible by 2');
    }
    if(valueA % 3 === 0) {
        console.log('Divisible by 3');
    }
    else if(valueA % 2 !== 0 || valueA % 3 !== 0) {
        console.log('Not divisible by 2 or 3');
    }
}
console.log('TASK-1', checkIfDivisibleBy2Or3(8));
console.log('TASK-1', checkIfDivisibleBy2Or3(9));
console.log('TASK-1', checkIfDivisibleBy2Or3(6));
console.log('TASK-1', checkIfDivisibleBy2Or3(5));

//Task-2

function checkIfDivisibleBy2Or3Or4Or5(valueA) {
    if(valueA % 2 === 0) {
        console.log('Divisible by 2');
    }
    if(valueA % 3 === 0) {
        console.log('Divisible by 3');
    }
    if(valueA % 4 === 0) {
        console.log('Divisible by 4');
    }
    if(valueA % 5 === 0) {
        console.log('Divisible by 5');
    }
}
console.log('TASK-2', checkIfDivisibleBy2Or3Or4Or5(8));
console.log('TASK-2', checkIfDivisibleBy2Or3Or4Or5(9));
console.log('TASK-2', checkIfDivisibleBy2Or3Or4Or5(10));
console.log('TASK-2', checkIfDivisibleBy2Or3Or4Or5(120));

//Task-3

var isEven = 'true';
var notEven = 'false';
var isEven = 8 % 2 === 0 ? isEven : notEven;
console.log('TASK-3', isEven);
/*
function checkIfIsEvenNumber(valueA) {
    return valueA % 2 === 0;
}
console.log('TASK-3', checkIfIsEvenNumber(8));
console.log('TASK-3', checkIfIsEvenNumber(0));
console.log('TASK-3', checkIfIsEvenNumber(13));
console.log('TASK-3', checkIfIsEvenNumber(-2));
*/