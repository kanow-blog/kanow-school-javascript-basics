import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//TASK-1

let numbersArray = [1, 2, 3, 4, 5];
console.log('TASK-1', numbersArray);

//TASK-2

console.log('TASK-2', numbersArray[2]);

//TASK-3

numbersArray.push(10);
console.log('TASK-3', numbersArray);

//TASK-4

numbersArray.unshift(-1);
console.log('TASK-4', numbersArray);

//TASK-5

numbersArray.pop();
console.log('TASK-5', numbersArray);

//TASK-6

numbersArray.splice(2, 1);
console.log('TASK-6', numbersArray);

//TASK-7

numbersArray[4];
console.log('TASK-7', numbersArray[4]);

//TASK-8

function createOnesMatrix(rowsCount, columnsCount) {
    let matrix = [];    
    for(let i = 0; i < rowsCount; i++) {
        matrix.push([]);
        for(let j = 0; j < columnsCount; j++) {
            matrix[i].push(1);
        }
    }
    return matrix;
}
let thing = createOnesMatrix(4, 4);
console.log('TASK-8', thing);

for(let i = 0; i < thing.length; i++) {
    console.log('TASK-8', thing[i][0]);
}
console.log('TASK-8', thing[0]);

//Task-9 Create a loop to print eack matrix elements 
for(let i = 0; i < thing.length; i++) {
    for(let j = 0; j < thing.length; j++) {
        console.log('Value under row: ['+ i +'] and column: ['+ j +']', thing[i][j]);
    }  
}

console.log('QUESTION-1: ', 'Console will print undefined.');
console.log('QUESTION-2: ', 'Yes we can. If we increase the lenght of the array, empty elements are going to be added to that array. If we decrease the length, it will be deleting elements from the end till it reaches to the lenght we set.');
console.log('QUESTION-3: ', 'We can hold many values under a single variable. let color1 = "blue"; let color2 = "green"; let color3 = "orange"; And we can get them all in one line==> let colors = ["blue", "green", "orange"].');
