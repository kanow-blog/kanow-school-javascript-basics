import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task 1

function checkIsNumber(numberVariable) {
    return typeof numberVariable === 'number'
}
console.log('Task-1',checkIsNumber(10));
//Task 2

function checkIsString(stringVariable) {
    return typeof stringVariable === 'string'
}
console.log('Task-2',checkIsString('lody'));

//Task 3

function checkIsBoolean(booleanVariable) {
    return typeof booleanVariable === 'boolean'
}
console.log('Task-3',checkIsBoolean(true));

//Task 4

function checkIsBigInt(bigIntVariable) {
    return typeof bigIntVariable === 'bigint'
}
console.log('Task-4',checkIsBigInt(1n));

//Task 5

function checkIsSymbol(symbolVariable) {
    return typeof symbolVariable === 'symbol'
}
console.log('Task-5',checkIsSymbol(Symbol()));

//Task 6

function checkIsUndefined(undefinedVariable) {
    return typeof undefinedVariable === 'undefined'
}
console.log('Task-6',checkIsUndefined(undefined));

//Task 7

function checkIsObject(objectVariable) {
    return typeof objectVariable === 'object'
}
console.log('Task-7',checkIsObject({name:'Lily'}));

//Task 8

function checkIsFunction(functionVariable) {
    return typeof functionVariable === 'function'
}
console.log('Task-8',checkIsFunction(function () {console.log('function')}));
