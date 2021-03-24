console.info('Lesson one → Variables');

/*

Some notes:

Variables are used to store data abut anything
Example:

    var name = 'Jan'
This is a variable which will store 'Jan' you can access this variable by its signature which is named
Variables such as strings or numbers are primitives, and they are passed as value so even if you change them inside a function you will not change the original
Object and Array is non-primitive variable which is passed as a reference it means if you pass it as parameter you will work on original
Object can have many fields which are the keys to which you can refer so for example we can have object person with fields such as `firstName`, `lastName`, `age`
Example:

    var person = {
        firstName: 'Jan',
        lastName: 'Kowalski',
        age: 21
    }

    person.firstName // access a firstName field
    person['lastName'] // access a lastName field

Function signature → it is the name of the function can be anything but should be descriptive cannot be one of [reserved names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015)
Function parameters → are variables which can be accessed only in function body
Example:

    function test(param1) {
    // function body ...
    }

    test(12);

First we create a function with signature **test**
Then we called function **test** and pass 12 as the first parameter (param1),
Now **param1** inside body of function **test** will have value equal to 12

*/