import readmeLoader from '../readmeContentLoader.js';

void readmeLoader();


const arrayOfNumbers = [3, 12, -32, 0, 3, 64, 129, -256];
const arrayOfPersons = [
  {firstName: 'Jan', lastName: 'Nowak'},
  {firstName: 'Justyna', lastName: 'Kowalczyk'},
  {firstName: 'Andrzej', lastName: 'Nowacki'},
  {firstName: 'Beata', lastName: 'Stachecka'},
];
const nestedArrayOfNumbers = [
  [2, 4, 6, 8],
  [8, 4, 2, 8],
  [1, 3, 5, 9],
  [5, 7, 3, 9],
  [5, 2, 3, 9],
  [5, 7, 6, 9],
];


//TASK-1
const evenNumbers = arrayOfNumbers.filter(number => number % 2 === 0);
console.log('TASK-1', evenNumbers);

//TASK-2
const oddNumbers = arrayOfNumbers.filter(number => number % 2 !== 0);
console.log('TASK-2', oddNumbers);

//TASK-3
const maxNumber = arrayOfNumbers.reduce((max, num) => {
  max = max < num ? num : max;
  return max;
}, -Infinity);
console.log('TASK-3', maxNumber);

//TASK-4
arrayOfNumbers.sort((a, b) => a - b);
console.log('TASK-4', arrayOfNumbers);

//TASK-5
arrayOfNumbers.sort((a, b) => b - a);
console.log('TASK-5', arrayOfNumbers);

//TASK-6
const isEvenNumbers = (number) => number % 2 === 0;
console.log('TASK-6', arrayOfNumbers.every(isEvenNumbers));

//TASK-7
const isOddNumber = (number) => number % 2 !== 0;
console.log('TASK-7', arrayOfNumbers.some(isOddNumber));

//TASK-8
const arrayOfPersonsFullName = arrayOfPersons.map(x => x.firstName + ' ' + x.lastName);
console.log('TASK-8', arrayOfPersonsFullName);

//TASK-9
const findLastName = arrayOfPersons.find(element => element.lastName === 'Nowak');
console.log('TASK-9', findLastName);

//TASK-10
const findIndexOfPerson = (element) => element.lastName === 'Nowak';
console.log('TASK-10', arrayOfPersons.findIndex(findIndexOfPerson));

//TASK-11
const multipliedBy3 = evenNumbers.map(x => x * 3);
console.log('TASK-11', multipliedBy3);

//TASK-12
const isEvenSubarray = (number) => number % 2 === 0;
const evenSubarrays = nestedArrayOfNumbers.filter(subarray => subarray.every(isEvenSubarray)).flat().map(x => x * 2);
console.log('TASK-12', evenSubarrays);

//TASK-13
const IsOddNumber = (number) => number % 2 !== 0;
const subarraysWithOddNumber = nestedArrayOfNumbers.filter(subarray => subarray.some(isOddNumber)).flat().map(x => x * 2);
console.log('TASK-13', subarraysWithOddNumber);