# This context 

## Tasks

> After finishing each TASK print the result like that: **_`console.log('TASK-1', result);`_**

- **[TASK-1]** Call **_`arrowSayHello`_** method of **`person1`**. What will be the result and why?
- **[TASK-2]** Call **_`sayHello`_** method of **`person1`**. What will be the result and why?
- **[TASK-3]** Call **_`sayHello`_** method of **`person1`** with context of **`person3`**. What will be the result and why?
- **[TASK-4]** Call **_`sayHelloAfter5sec`_** method of **`person2`**. What will be the result and why?
- **[TASK-5]** Call **_`sayHelloAfter6sec`_** method of **`person2`**. What will be the result and why?
- **[TASK-6]** Call **_`sayHelloAfter5sec`_** method of **`person2`** with context of **`person3`**. What will be the result and why?
- **[TASK-7]** Call **_`sayHelloAfter6sec`_** method of **`person2`** with context of **`person3`**. What will be the result and why?
- **[TASK-8]** Call **_`say2Words`_** method of **`person1`** with context of **`person3`** and with parameters:
  `'first word'`, `'second word'`. Use **`.call`**
- **[TASK-9]** Call **_`say2Words`_** method of **`person1`** with context of **`person3`** and with parameters:
  `'first word'`, `'second word'`. Use **`.apply`**

## Questions

- **[QUESTION-1]** What is the difference between `.call` and `.bind` functions ?
- **[QUESTION-2]** Can you call **_`arrowSayHello`_** method of **`person1`** with different context (for example 
  using `.call` or `.apply` method)?
- **[QUESTION-3]** What would happen if you would attach _index.js_ file as not module in your _index.html_. I mean if
  you would do that:
  ```html
  <script src="index.js"></script>
  ```
  instead of this:
  ```html
  <script type="module" src="./index.js"></script>
  ```
  Would anything change ?

  > If you try this, remember to comment out this two lines from your _index.js_
  >```javascript
  >// import readmeLoader from '../readmeContentLoader.js';
  >//
  >// void readmeLoader();
  >```
- **[QUESTION-4]** What would happen if you would use `const` or `let` instead of `var` keyword for initialization of
  these parameters:
  ```javascript
  var firstName = 'GLOBAL FIRST NAME';
  var lastName = 'GLOBAL LAST NAME';
  var age = 'GLOBAL AGE';
  ```
  If this change can affect your scrip result attached as module vs not as module?
- **[QUESTION-5]** In your words try to explain the difference between `this` inside an arrow function and `this`
  inside regular function ?

## Additional information

- To learn more about **_this_** you can visit this
  link **[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)**
- To learn more about **_.call_** method you can visit this
  link **[call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)**
- To learn more about **_.apply_** method you can visit this
  link **[apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)**
- To learn more about **_.bind_** method you can visit this
  link **[bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)**
