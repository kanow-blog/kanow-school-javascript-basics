import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task 1

var valueA = 1;
var valueB = 1;
function equalParameters(valueA,valueB) {
    if(valueA === valueB) {
        console.log('They are equal.');
    }
}
equalParameters(valueA,valueB);

//Task 2

var valueA = 1;
var valueB = 1;
function equalParameters1(valueA,valueB) {
    if(valueA !== valueB) {
        console.log('They are not equal.');
    }
}
equalParameters1(valueA,valueB);

//Task 3

var valueA = 1;
var valueB = 1;
function sum(valueA,valueB) {
    sum = valueA + valueB;
    console.log(sum);  
}

//Task 4

var valueA = 1;
var valueB = 1;
function difference(valueA,valueB) {
    difference = valueA - valueB;
    console.log(sum);  
}

//Task 5

var valueA = 1;
var valueB = 2;
function multiply(valueA,valueB) {
    multiply = valueA * valueB;
    console.log(multiply);  
}

//Task 6

var valueA = 6;
var valueB = 2;
function division(valueA,valueB) {
    division = valueA / valueB;
    console.log(division);  
}

//Task 7

var valueA = 6;
var valueB = 2;
function divisionCheck(valueA,valueB) {
    if(valueA % valueB === 0) {
        console.log('It is divisible.')
    }
}

//Task 8

var valueA = 6;
var valueB = 4;
var valueC = 2;
function divisionCheck1(valueA,valueB,valueC) {
    if(valueA % valueB === 0 && valueA % valueC === 0) {
        console.log('They are divisible.')
    }
    else {
        console.log('They are not divisible.')
    }
}

//Task 9

var valueA = 6;
var valueB = 4;
function sizeCheck(valueA,valueB) {
    if(valueA > valueB) {
        console.log('It is bigger.')
    }
    else {
        console.log('It is smaller.')
    }
}

//Task 10

var valueA = 6;
var valueB = 4;
function sizeCheck1(valueA,valueB) {
    if(valueA < valueB) {
        console.log('It is smaller.')
    }
    else {
        console.log('It is bigger.')
    }
}

//Task 11

var valueA = 6;
var valueB = 6;
function sizeCheck3(valueA,valueB) {
    if(valueA >= valueB) {
        console.log('It is bigger or equal.')
    }
    else {
        console.log('It is smaller.')
    }
}

//Task 12

var valueA = 6;
var valueB = 5;
function sizeCheck4(valueA,valueB) {
    if(valueA <= valueB) {
        console.log('It is smaller or equal.')
    }
    else {
        console.log('It is bigger.')
    }
}

//Task 13

var valueA = 6;
var valueB = 2;
function power(valueA,valueB) {
    power = valueA ** valueB; 
}
    console.log(power);

//Task 14

var a = 10;
var b = 20;
a += 10; //a=20
b -= 5; //b=15
a /= 2; //a=10
b *= 2; //b=30
++a; //a=11
b++; //b=31
var result = a++ + --b + ++b; //11+30+32=73

