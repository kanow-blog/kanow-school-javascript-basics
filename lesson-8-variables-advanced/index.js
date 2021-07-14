import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

// TASK-1
function increaseParameterByOne(param) {
}

// TASK-2
function removeFisrCharacterOfString(param) {
}

const numberVariable1 = 11;
const stringVariable1 = 'some string';

let numberVariable2 = increaseParameterByOne(numberVariable1); // CHECKPOIN-1
numberVariable2 = 100; // CHECKPOIN-2
let stringVariable2 = removeFisrCharacterOfString(stringVariable1); // CHECKPOIN-3
stringVariable2 = 'test'; // CHECKPOIN-4

//TASK-3
function increasePersonAgeByOne(personAge) {
  
}

//TASK-4
function changePersonLastName(person, newLastName) {
  
}

//TASK-5
function addPersonFamilyMember(personFamilyMembers, newMember) {
  
}

//TASK-6
function changePersonHouseNumber(personHouseNumber, newHouseNumber) {
  
}

let person1 = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 21,
  familiMembers: ['Justyna', 'Mateusz'],
  changeFirstName: function (newName) {
    this.firstName = newName;
  },
  house: {
    country: 'Poland',
    city: 'Lodz',
    houseNumber: 12,
    zipCode: '90-001',
    changeZipCode: function changeZipCode(newZipCode) {
      this.zipCode = newZipCode;
    }
  }
}

//TASK-7
function describeSumOperation(valueA, valueB) {
  
}

increasePersonAgeByOne(person1.age); // CHECKPOIN-5
changePersonLastName(person1, 'Nowak'); // CHECKPOIN-6
addPersonFamilyMember(person1.familiMembers, 'Andrzej'); // CHECKPOIN-7
changePersonHouseNumber(person1.house.houseNumber, 32); // CHECKPOIN-8
person1.changeFirstName('Mariusz'); // CHECKPOIN-9
person1.house.changeZipCode('90-100'); // CHECKPOIN-10

let person2 = person1;
let person3 = person1;
person1.firstName = 'Szymon'; // CHECKPOIN-11
person2.lastName = 'Kowalczyk' // CHECKPOIN-12
person2 = null; // CHECKPOIN-13
person1 = null; // CHECKPOIN-14

console.log('QUESTION-1', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-2', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-3', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-4', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-5', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-6', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-7', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-8', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-9', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-10', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-11', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-12', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-13', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-14', 'PUT YOUR ANSWER HERE');