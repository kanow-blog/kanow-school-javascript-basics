import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();
console.info('Lesson one → Variables');

var person1 = {
    firstName: 'Ali',
    lastName: 'Young',
    age: '26',
    familyMembers: ['Fatma','Irina'],
    house: {
        counrty: 'Turkey',
        city: 'Istanbul',
        street: 'St. 1236',
        zipCode: '35770'
    }
}

var person2 = {
    firstName: 'Kale',
    lastName: 'Kirsch',
    age: '23',
    familyMembers: ['Bella','Jasmin'],
    house: {
        counrty: 'Poland',
        city: 'Warsaw',
        street: 'St. 1238',
        zipCode: '35755'
    }
}
var list = [person1,person2];

//Task2

person2.firstName = 'Tomek';
console.log(person2.firstName);

//Task3

person1.zipCode = '90001';
console.log(person1.zipCode);

//Task4
var person3 = {
    firstName: 'Kally',
    lastName: 'Baba',
    age: '23',
    familyMembers: ['Bella','Jasmin'],
    house: {
        counrty: 'Poland',
        city: 'Warsaw',
        street: 'St. 1238',
        zipCode: '35755'
    }
}
function addNewPersonToArray(list, newPerson) {
    list.push(newPerson);
}
addNewPersonToArray(list,person3);
console.log(list);

//Task5

function addNewHouse(person,newHouse) {
    person.house = newHouse;
}
addNewHouse(person1,house2);
console.log(person1);

//Task6

function removeLastPersonFromArray(list) {
    list.pop();
}
console.log(list);

//Task7

function addNewFamilyMember(person,newFamilyMember) {
    person.familyMembers.push(newFamilyMember);
}
addNewFamilyMember(person1.familyMembers,John);
console.log(person1.familyMembers);

//Task8

function addNewField(person,newField,value) {
    person[newField] = value;
}
addNewField(person2,education,'Technical University of Dublin');
console.log(person2[education]);

//Task9

function removePerson(list,index) {
list.splice(index);
}
removePerson(list,1);
console.log(list); 

