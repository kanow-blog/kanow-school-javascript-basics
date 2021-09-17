# Data grid

> Part 2

## Description

In this part, we will add a component in which user will be able to define sorting rules.

## Setting up a project

Please reuse code from **Part 1**.

## What you need to do

### Functional requirements

- Add button which will open model in the center of the screen in which user will be able to define sort rules. A single rule should have three fields:
  - _**field name:**_ name of the column which you want to sort,
  - _**sort type:**_ what comparator you want to use `NUMBER`, `SRTING` or `DATE`,
  - _**sort direction:**_ do you want to sort `ASC` or `DESC`
- In the bottom part of this modal, you should add two buttons:
  - _**Clear:**_ to allow clear all sort rules which user applied,
  - _**Apply:**_ to apply all sort rules defined by user (In this part only `console.log` rules chosen by the user),
- In the right upper corner, add button with `X` icon for closing modal,
- User should be able to combine sorting rules. For example: First sort by `firstName` **ASC** then sort by `lastName` **DES** and in the end sort by `age` **ASC**, so in total we will  have 3 filter rules which need to be combined with order given by user

### Implementation requirements

 - Create `SortingModal` component. This component should:
   - Handle interactions for `X` button,
   - Handle interactions for _**Clear**_ button,
   - Handle interactions for _**Apply**_ button,
   - Provide an API which allows to get all sorting rules data (check _**Additional information**_ to know the data structure),
 - Create `SortingRue` component. This component should:
   - Handle selects for: _**field name**_, _**sort type**_ and _**field name**_,
   - Provides an API which allows:
     - Set values for  _**field name**_ and _**sort type**_ select
     - Get value set in _**field name**_ select,
     - Get value set in _**sort type**_ select,
     - Get value set in _**field name**_ select,
     - Are all selects have selected value,
 - All sort rules should be cashed as `SORT_CONFIG` in `IndexDB`

### Additional information

- Possible sort types:
  - `'STRING'`,
  - `'NUMBER'`,
  - `'DATE'`,
- Possible sort directions:
  - `'ASC'`,
  - `'DESC'`,
- Single sorting rule example:
  ```typescript
  const sortRule = {
    field: 'firstName',
    type: 'STRING',
    direction: 'ASC';
  }
  ```
- Sort config example:
  ```typescript
  const sortConfig = [
    {
      field: 'firstName',
      type: 'STRING',
      direction: 'ASC'
    },
    {
      field: 'age',
      type: 'NUMBER',
      direction: 'DESC'
    }
  ]
  ```

## Hints

- To cash this data, you should use _**[`IndexDB`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)**_. You can use this library to make your life easier, _**[idb](https://github.com/jakearchibald/idb)**_
- Some information about date you can find here _**[Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples)**_. Check _**[Calculating elapsed time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#calculating_elapsed_time)**_ and _**[using date object examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples)**_.
