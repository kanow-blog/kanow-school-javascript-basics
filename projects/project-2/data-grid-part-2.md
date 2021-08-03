# Data grid

> Part 2

## Description

In this part, we will add sorting functionality.

## Setting up a project

Please reuse code from **Part 1** and extend it with this sorting feature.

## What you need to do

In part two, you will need to

- Add ASC(ascending) and DES(descending) sort by:
  - _**String:**_ `'b' > 'a'`
  - _**Number:**_ `9 > 8`
  - _**Date:**_ `'01/01/2022' > '02/02/2021'`
- Add button which will open model in the center of the screen in which user will be able to define sort rules. A single rule should have three fields:
  - _**field name:**_ name of the column which you want to sort
  - _**sort type:**_ what comparator you want to use `NUMBER`, `SRTING` or `DATE`
  - _**sort direction:**_ do you want to sort `ASC` or `DESC`

  In the bottom part of this modal, you should add two buttons:
  - _**Clear:**_ to allow clear all sort rules which user applied
  - _**Apply:**_ to apply all sort rules defined by user

  In the right upper corner, add button with `X` icon for closing modal
- User should be able to combine field sort. For example: First sort by `firstName` **ASC** then sort by `lastName` **DES** and in the end sort by `age` **ASC**, so in total we will  have 3 filter rules which need to be combined with order given by user
- This is how sort config should look like:

  ```typescript
  enum SortType {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    DATE = 'DATE'
  }
  enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
  }
  type SortRule = {
    field: string;
    type: SortType;
    direction: SortDirection;
  }
  type SortConfig = SortRule[];
  ```

- Sort config should be cashed and loaded when user open application.

## Hints

- For sorting, you should use _**[`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)**_
- To cash this data, you should use _**[`IndexDB`](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)**_. You can use this library to make your life easier _**[idb](https://github.com/jakearchibald/idb)**_
- Some information about date you can find here _**[Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples)**_. Check _**[Calculating elapsed time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#calculating_elapsed_time)**_ and _**[using date object examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples)**_. Between Date objects you can also use these JavasSript operators: `>`, `<`, `<=` and `>=`