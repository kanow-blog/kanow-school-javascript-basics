# Prototypes

## Tasks

> After finishing each TASK if this is needed please print log with explanation `console.log('TASK-1', 'I think like that because ...')`

- **[TASK-1]** Display _**Object**_, _**Number**_ and _**String**_ prototypes in the console and analyze them.
- **[TASK-2]** Change the implementation of `.toString` method of an _**Array**_ prototype to print: _`Hello, I am an array`_. Then call this method on any instance of an _**Array**_ which you have created. What is the result and why?
- **[TASK-3]** Remove `.toString` method of _**Number**_ prototype. Then call `.toString` on any number you have created. What is the result and why?
- **[TASK-4]** Create a prototype of _**Animal1**_ with field `name` and method `sayHello` defined in the constructor.
- **[TASK-5]** Create a prototype of _**Animal2**_ with field `name` defined in the constructor and method `sayHello` added on the prototype of _**Animal2**_.

## Questions

- **[QUESTION-1]** In one sentence explain what is **prototype**
- **[QUESTION-2]** What is on the top of prototype chain?
- **[QUESTION-3]** What will happen if we change `Object.prototype.toString` implementation? Does this change affect the result of `.toString` called on insances of _**String**_ or _**Number**_ ?
- **[QUESTION-4]** What will happen if we change `String.prototype.toString` implementation ? Does this change affect the result of `.toString` called on insances of _**String**_ and _**Number**_ ?
- **[QUESTION-5]** What do you think, what is the difference between _**Animal1**_ and _**Animal2**_ prototypes created in **TASK-4** and **TASK-5** ?

## Additional information

- What are JavaScript prototypes:
  - [Visualized Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
  - [Inheritance with the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)