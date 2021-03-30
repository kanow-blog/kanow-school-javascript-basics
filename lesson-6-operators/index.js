import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task-1

function checkIfEqual(valueA, valueB) {
    if(valueA === valueB) { 
        return true;}
    else {
        return false;}
}
console.log('TASK-1', checkIfEqual(1, 1));

//Task-2

function checkIfNotEqual(valueA, valueB) {
    if(valueA !== valueB) { 
        return true;}
    else {
        return false;}
}
console.log('TASK-2', checkIfNotEqual(1, 2));

//Task-3

function sumOfValues(valueA, valueB) {
    sumOfValues = valueA + valueB;
        return sumOfValues;
}
console.log('TASK-3', sumOfValues(1, 2));

//Task-4

function differenceOfValues(valueA, valueB) {
    differenceOfValues = valueA - valueB;
        return differenceOfValues;
}
console.log('TASK-4', differenceOfValues(1, 2));

//Task-5

function multiplicationOfValues(valueA, valueB) {
    multiplicationOfValues = valueA * valueB;
        return multiplicationOfValues;
}
console.log('TASK-5', multiplicationOfValues(1, 2));

//Task-6

function divisionOfValues(valueA, valueB) {
    divisionOfValues = valueA / valueB;
        return divisionOfValues;
}
console.log('TASK-6', divisionOfValues(1, 2));

//Task-7

function checkIfDivisible(valueA, valueB) {
    if(valueA % valueB === 0) {
        return true;}
    else {return false;}    
}
console.log('TASK-7', checkIfDivisible(4, 2));

//Task-8

function checkIfDivisible2(valueA, valueB, valueC) {
    if(valueA % valueB === 0 && valueA % valueC === 0) {
        return true;}
    else {return false;}    
}
console.log('TASK-8', checkIfDivisible2(8, 4, 2));

//Task-9

function checkIfBigger(valueA, valueB) {
    if(valueA > valueB) {
        return true;}
    else {return false;}    
}
console.log('TASK-9', checkIfBigger(8, 4));

//Task-10

function checkIfSmaller(valueA, valueB) {
    if(valueA < valueB) {
        return true;}
    else {return false;}    
}
console.log('TASK-10', checkIfSmaller(4, 8));

//Task-11

function checkIfBiggerOrEqual(valueA, valueB) {
    if(valueA >= valueB) {
        return true;}
    else {return false;}    
}
console.log('TASK-11', checkIfBiggerOrEqual(8, 8));

//Task-12

function checkIfSmallerOrEqual(valueA, valueB) {
    if(valueA <= valueB) {
        return true;}
    else {return false;}    
}
console.log('TASK-12', checkIfSmallerOrEqual(8, 8));

//Task-13

function powerOfValues(valueA, valueB) {
    powerOfValues = valueA ** valueB;
    return powerOfValues;    
}
console.log('TASK-13', powerOfValues(8, 2));

//Task-14

var a = 10; 
var b = 20;
a += 10; //a=20
b -= 5; //b=15
a /= 2; //a=10
b *= 2; //b=30
++a;    //a=11
b++;    //b=31
var result = a++ + --b + ++b; //11+30+31=72
console.log('TASK-14', result);
