import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

// TASK-1
function increaseParameterByOne(param) {
  param = param + 1;
  return param;
}

// TASK-2
function removeFisrCharacterOfString(param) {
  param = param.substring(1);
  return param;
}


const numberVariable1 = 11;
const stringVariable1 = 'some string';


let numberVariable2 = increaseParameterByOne(numberVariable1); // CHECKPOIN-1
numberVariable2 = 100; // CHECKPOIN-2
let stringVariable2 = removeFisrCharacterOfString(stringVariable1); // CHECKPOIN-3
stringVariable2 = 'test'; // CHECKPOIN-4

//TASK-3
function increasePersonAgeByOne(personAge) {
  personAge += 1;
}

//TASK-4
function changePersonLastName(person, newLastName) {
  person.lastName = newLastName;
}

//TASK-5
function addPersonFamilyMember(personFamilyMembers, newMember) {
  personFamilyMembers.push(newMember);
}

//TASK-6
function changePersonHouseNumber(personHouseNumber, newHouseNumber) {
  personHouseNumber = newHouseNumber;
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

console.log('QUESTION-1', 'It will still be the same. Not only it is a const variable, but also we use numberVariable1 only as a parameter in CHECKPOINT-1.');
console.log('QUESTION-2', 'No it will not effect numberVariable1 because in CHECKPOINT-2 we are only overwriting numberVariable2 variable.');
console.log('QUESTION-3', 'stringVariable-1 was used only as a parameter in CHECKPOINT-3 and what is more that it is a const variable, it will not change.');
console.log('QUESTION-4', 'No, what we do in CHECKPOINT-4 is only overwriting stringVariable2, there is nothing with stringVariable1.');
console.log('QUESTION-5', 'It will not change because that function does not have any parameters to refer person1 object.');
console.log('QUESTION-6', 'Yes because after calling that function and adding our parameters, that function body changes lastName field in object person1.');
console.log('QUESTION-7', 'Yes it will add a new member "Andrzej" to the familyMembers array.');
console.log('QUESTION-8', 'Yes it will overwrite and change the number in the houseNumber field.');
console.log('QUESTION-9', 'Yes we call changeFirstName function inside person1 and body of that function overwrites firstName of person1 object.');
console.log('QUESTION-10', 'Yes, when we call the function in CHECKPOINT-10, we it will change person1.house.zipCode.');
console.log('QUESTION-11', 'person2.firstName will be "Szymon". Because person2 is refferring to person1 and when we change person1, it changes person2.');
console.log('QUESTION-12', 'It will be "Kowalczyk" because we changed lastName of person2 and it is referring to person1.');
console.log('QUESTION-13', 'No we are only overwriting person2 and nothig more in the CHECKPOINT-13.');
console.log('QUESTION-14', 'It will not affect any of these objects because at CHECKPOINT-14 what we do is overwriting person1 and they are no longer related.');