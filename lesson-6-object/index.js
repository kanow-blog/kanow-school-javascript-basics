import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//TASK-1

let person = {
    firstName: 'Ali',
    lastName: 'Kenzo',
    age: '23',
    hello: function() {
        console.log('Hello my name is: ' + this.firstName + ' ' + this.lastName);
    }
}
console.log('TASK-1', person.hello());

//TASK-2

person.familyMembers = ['Veli', 'Hasan'];
console.log('TASK-2', person);

//TASK-3

person.house = {
    country: 'Nepal',
    city: 'Kathmandu',
    zipCode: '36950'
}
console.log('TASK-3', person);

//TASK-4
/*
person.addField = function(name, value) {
    this[name] = value;
}
addField[weight, '60kg');
console.log('TASK-4', person);

//TASK-5
do it like task-4
function addFamilyMember(newPerson) {
    person.familyMembers.push(newPerson);
}
addFamilyMember(Kerime);
console.log('TASK-5', person);

//TASK-6

function addField2(name, value) {
    person.name = value;
}
addField2(eyeColor, 'green');
console.log('TASK-6', person);

//TASK-7

person.familyMembers[Kerime] = {
    firstName: 'Kerime',
    lastName: 'Kerr',
    age: 43
}
*/
//TASK-8

person.house.country = 'Void';
console.log('TASK-8', person);

//TASK-9

delete person.house.zipCode;
console.log('TASK-9', person);

console.log('QUESTION-1: ', 'We  can use object freeze method.');
console.log('QUESTION-2: ', 'We can use object seal method.');
console.log('QUESTION-3: ', 'We can use object.values(variable); for it.');
console.log('QUESTION-4: ', 'We can use object.keys(variable); fot it.');