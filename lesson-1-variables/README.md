# THIS LESSSON WILL BE CHANGED
# Variables

## Task

- **[SUBTASK-1]** Create list of 2 persons. Each person should contain fields:

  - firstName (string)
  - lastName (string)
  - age (string)
  - famillyMembers (list of strings)
  - house (object which should contain):
    - country
    - city
    - street
    - zip-code

- **[SUBTASK-2]** Change `name` of 2nd person to **Tomek** and log the result
- **[SUBTASK-3]** Change `zip-code` of 4th person to **90-001** and log the result
- **[SUBTASK-4]** Create a function which will take two parameters the first parameter will be an array of persons which you have created in a previous subtask, the second parameter will be a new person which you want to add to the existing persons array. Use created function and log the result
- **[SUBTASK-5]** Create a function which will take two parameters the first parameter will be a person, second parameter will be a new house object, this function should allow changing person house. Use created function and log the result
- **[SUBTASK-6]** Create a function which will take one which will be an array of persons, this function should allow removing the last person from the array. Use created function and log the result
- **[SUBTASK-7]** Create a function which will take two parameters first will be a famillyMembes array of an existing person (let's say first person of your array), second will be a name of the new family member, this function should allow adding new family member to famillyMembers array. Use created function and log the result
- **[SUBTASK-8]** Create a function which will take 3 parameters the first parameter will be a person, the second parameter will be a name of the new field and the third parameter will be an initial value of the new field this function should allow adding field with any name to given person. Use created function and log the result
- **[SUBTASK-9]** Create a function which will take 2 parameters the first parameter will be an array of persons, the second parameter will be an index of person to remove this function should allow removing person under given index. Use created function and log the result

## Hints

- For removing an element from the array you can use [`array.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- For adding an element to the array you can use [`array.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- For removing an element with given index you can use [`array.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- Hint you can use `object[fieldName]` to access any field of an object

> All consol.log should look like that: console.log('[SUBTASK-1]', persons) `[SUBTASK-N] result`
