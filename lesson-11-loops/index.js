import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task-1

var person = {
    firstName: 'Ali',
    lastName: 'Webbe',
    age: '32'
};
for(const property in person) {
    console.log('TASK-1', property);
}

//Task-2

const myArray = ['x', 'y', 'z'];
for(const element of myArray) {
    console.log('TASK-2', element);
}
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//Task-3
function checkIsTheMiddle(array, index) {
    return Math.floor((array.length - 1) / 2) === index;
}
const fiveNumbersOfArray = [11, 12, 13, 14, 15];
const fourElementsArray = [1, 2, 3, 4];
let i = 0;
while (checkIsTheMiddle(fiveNumbersOfArray, i) === false) {
    console.log('TASK-3', fiveNumbersOfArray[i]);
    i++; 
}
console.log('TASK-3', fiveNumbersOfArray[i]);
i = 0;
while (checkIsTheMiddle(fourElementsArray, i) === false) {
    console.log('TASK-3', fourElementsArray[i]);
    i++;
}
console.log('TASK-3', fourElementsArray[i]);


//Task-4

const array1 = [1, 2, 3, 4, 5, 6]; 
for(let j = 0; j < array1.length; j++) {
    if(j % 2 === 0) {
        continue;
    }
    console.log('TASK-4', array1[j]);  
}


//Task-5

const array3 = [1, 2, 3, 4, 5, 6];
for(const element of array3) {
    if(element === 4) {
        break;
    }
    console.log('TASK-5', element);
}

//Task-6

const array6 = [1, 2, 3, 4, 5, 6];
function printOddNumbers(value) {
    if(value % 2 !== 0) {
        return;
    }
    console.log('TASK-6', array6);
}
array6.forEach(printOddNumbers);

//Questions

console.log('QUESTION-1', 'for loop');

console.log('QUESTION-2', 'for in');

console.log('QUESTION-3', 'for loop is the most intuitive.');

