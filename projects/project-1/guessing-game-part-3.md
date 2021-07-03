# Guessing game

> Part 3

## Setting up environment

This is **part 3** of _**Guessing game**_ project, so please reuse your code from **part 2**

## What you will do

In part three, you will add:

- Cache for game history. If user stop playing the game and leave your website in any way, then after he returns
  he should see the communicated in the pop-up which will say: 'Do you want to continue?'. User should be able to choose one of two options: **start a new game**, **resume**. If user choose to **resume**, then you need to load saved game history and previously drawn number. If user choose to start a new game, then you need to clear the game history cache and cached drawn number.
- You should allow the user to choose the range of the number which will be drawn. Edges of the range should be defined by integers. Range shouldn't be empty. For example, range from: **1** to: **-1** will be empty, so you won't be able to draw a number. If such a thing happens, you should inform about this user and ask to define another range. (Your default range is **1 - 100**).

>Custom user range should also be cache in web-browser storage.

## Hints

- IndexDB is one of the ways how you can cache your data:
  - here you can find short overview what is this: **[IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)**
  - here you can find some examples of usage: **[Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)**
- LocalStorage is another way how you can store your app data:
  - here you can find short overview what is this and how to use this: **[Local Storage - API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)**
- Good article with comparison of available web storage: **[Storage for the web](https://web.dev/storage-for-the-web/)**
