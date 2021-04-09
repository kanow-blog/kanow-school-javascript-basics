import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

console.log('~~MAIN START');
const mainScopeVariable = 'MAIN SCOPE VARIABLE';

// OUTSIDE_WORDL scope
{
    console.log('~~==OUTSIDE_WORDL START==');
    const tree1 = 'pine';
    const tree2 = 'oak';
    let treesCount = 2;
    const person = 'Asli';
    console.log(tree1, tree2, treesCount, person);
    console.log('TASK-5', person);
    console.log('~~==OUTSIDE_WORDL END==');
}


// SHOP scope
{
    console.log('~~++SHOP START++');
    const product1 = 'broom';
    const product2 = 'vacuum cleaner';
    let productsCount = 2;
    function shop() {
        console.log(product1, product2, productsCount);
    }
    shop(); 
    console.log(product1, product2, productsCount);
    console.log('TASK-5', person);
    console.log('~~++SHOP END++');
}


// HOUSE scope
{
    console.log('~~**HOUSE START**');
    const room1 = 'saloon';
    const room2 = 'bedroom';
    let roomsCount = 2;
    // ROOM scope
    {
        console.log('~~**$$ROOM START$$');
        const item1 = 'bed';
        const item2 = 'chair';
        let itemsCount = 2;
        var person = 'Jan Kowalski';
        function house() {
            console.log(item1, item2, itemsCount, person, room1, room2, roomsCount);
        }
        house();
        console.log('TASK-5', person);
        console.log(item1, item2, itemsCount, person);
        console.log('~~**$$ROOM END$$');
    }
    console.log('TASK-5', person);
    console.log(room1, room2, roomsCount);
    console.log('~~**HOUSE END**');
}

// exampleFunction closure
function exampleFunction() {
    console.log('  ##exampleFunction START##');
    var person2 = 'Justyna Kowalczyk';
    console.log('TASK-5', person);
    console.log('Task-6', person2, person);
    console.log('  ##exampleFunction END##');
}
console.log('TASK-5', person);

exampleFunction();
console.log('~~MAIN END');
console.log('QUESTION-1: ', 'NO. House scope is outside of item1s scope.');
console.log('QUESTION-2: ', 'YES. Room scope has room1 variable inside it.');
console.log('QUESTION-3: ', 'NO. Product1 is inside low level scope.' );
console.log('QUESTION-4: ', 'Because when we use var, it creates another var person with undefined value outside of the scope, in the beginning of the highest scope in the file.');
console.log('QUESTION-5: ', 'NO. You can not access inside closures from outside. The variable will exist after you call the function but only inside this functions closure.');

