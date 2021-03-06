# Operators

## Tasks

> After finishing each TASK use the function you have created and print the result of this function. I encourage you to try to use different values as parameters to get different results (print results of all examples you have made).
>
> Printing should look like that: **_`console.log('TASK-1', result);`_**

- **[TASK-1]** Create a function which will take two parameters valueA and valueB then compare and check are they equal. If valueA and valueB are equal then return **`true`** otherwise return **`false`**
- **[TASK-2]** Create a function which will take two parameters valueA and valueB then compare and check are they NOT equal. If valueA and valueB are NOT equal then return **`true`** otherwise return **`false`**
- **[TASK-3]** Create a function which will take two parameters and return sum of those two parameters
- **[TASK-4]** Create a function which will take two parameters and return difference of those two parameters
- **[TASK-5]** Create a function which will take two parameters and return multiplication result of those two parameters
- **[TASK-6]** Create a function which will take two parameters and return division result of those two parameters
- **[TASK-7]** Create a function which will take two parameters and check does first is divisible by second parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-8]** Create a function which will take three parameters and check does first is divisible by second and third parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-9]** Create a function which will take two parameters and check does first parameter is bigger than second parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-10]** Create a function which will take two parameters and check does first parameter is smaller than second parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-11]** Create a function which will take two parameters and check does first parameter is bigger or equal then second parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-12]** Create a function which will take two parameters and check does first parameter is smaller or equal then second parameter if yes return **`true`** otherwise return **`false`**
- **[TASK-13]** Create a function which will take two parameters and return exponentiation result of those two parameters. First parameter should be a power base and second should be the exponent of the power (**[POWER](https://www.mathplanet.com/Oldsite/media/36392/bild2.jpg)**)
- **[TASK-14]** Create a function which will take one parameter and return `'This value is null or undefined'` if value of this paramter is **null** or **undefined** otherwise return this parameter value (use **[Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)**)

## Questions

- **[QUESTION-1]** What is the difference between `==` and `===`
- **[QUESTION-2]** What are all truthy types.

  Truthy types are types which will return **`true`** after `==` to **`true`**. For example:

  ```javascript
  const someText = 'text';
  someText == true; // will return true
  ```

- **[QUESTION-3]** What are all falsy types.

  Falsy types are types which will return **`true`** after `==` to **`false`**. For example:

  ```javascript
  const someText = '';
  someText == false; // will return true
  ```

- **[QUESTION-4]** What will be the result of this code:

  ```javascript
  let a = 10;
  let b = 20;
  a += 10;
  b -= 5;
  a /= 2;
  b *= 2;
  ++a;
  b++;
  const result = a++ + --b + ++b;
  ```

  As the answer you should write a comment what will be under each variable. For example:

  ```javascript
  let a = 10;
  let b = 20;
  let result = a++ + --b;
  ```

  ANSWER: **`// result = 10 + 19`**

- **[QUESTION-5]** What is the value of x variable and why ?

  ```javascript
  const person = {
    name: 'Jan',
    age: 12,
  };
  const result = person?.house?.addres;
  ```

  > What is [optionl chaning **`?.`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator

## Additional information

- To learn more about JavaScript operators you can visit this link: [**Expressions and operators**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
