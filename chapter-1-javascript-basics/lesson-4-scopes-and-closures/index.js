import readmeLoader from '../../readmeContentLoader.js';
void readmeLoader();

console.log('~~MAIN START');
const mainScopeVariable = 'MAIN SCOPE VARIABLE';
// OUTSIDE_WORDL scope
{
    console.log('~~==OUTSIDE_WORDL START==');
    console.log('~~==OUTSIDE_WORDL END==');
}

// SHOP scope
{
    console.log('~~++SHOP START++');
    console.log('~~++SHOP END++');
}

// HOUSE scope
{
    console.log('~~**HOUSE START**');
    // ROOM scope
    {
        console.log('~~**$$ROOM START$$');
        var person = 'Jan Kowalski';
        console.log('~~**$$ROOM END$$');
    }
    console.log('~~**HOUSE END**');
}

// exampleFunction closure
function exampleFunction() {
    console.log('  ##exampleFunction START##');
    var person2 = 'Justyna Kowalczyk';
    console.log('  ##exampleFunction END##');
}

exampleFunction();
console.log('~~MAIN END');

console.log('QUESTION-1: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-2: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-3: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-4: ', 'PUT YOUR ANSWER HERE');
console.log('QUESTION-5: ', 'PUT YOUR ANSWER HERE');