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

//TASK-9
for(let i = 0; i < 4; i++) {
    console.log('TASK-9', thing[i][0]);
}
console.log('TASK-9', thing[0]);

console.log('QUESTION-1: ', 'Console will print undefined.');
console.log('QUESTION-2: ', 'Yes we can.');
console.log('QUESTION-3: ', 'We can hold many values under a single name. let color1 = ''blue''; let color2 = ''green''; let color3 = ''orange''; And we can get them all in one line==> let colors = [''blue'', ''green'', ''orange''].');