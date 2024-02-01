# Multidiscount calculator

> Part 2

## Description

In this part, we will convert codebase to TypeScript and add code static analysis tools like eslint and prettier

## Setting up

Reuse you old project and follow below instructions

1. Copy all files from [***refactoring-config***](./refactoring-config) to root of your project
2. Run `npm install` in the root of the project
3. Make sure that you root Application component is called **`MultidiscountCalculator`**
4. Run `npm run start` to start you application under [***http://localhost:5173/***](http://localhost:5173/)

## Requirements

1. Running `npm run typecheck` doesn't produce any errors
2. Running `npm run lint` doesn't produce any errors
3. Running `npm run build` creates a valid build that can be used by the end user

## Hints

- If you haven't used TypeScript before try these resources:
  - Fast introducing to TypeScript
    Essentials: [Kamil Myśliwiec - Kurs TypeScript(Only PL)](https://kamilmysliwiec.com/tag/kurs-typescript)
  - Fas introducing to TypeScript
    Essentials [Matt Pocock - Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)
  - Longer version of TypeScript
    introduction [Microsoft - Getting started with TypeScript](https://docs.microsoft.com/en-us/learn/paths/build-javascript-applications-typescript/)
  - Difference between **any** and **unknown**:
    [Daniel Rosenwasser - Announcing TypeScript 3.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type)
  - Think about your project files organization. Maybe create one file for all interfaces, one for all the enums or
    maybe keep interfaces and enums connected with their source class/components
- What is prettier: [Prettier](https://prettier.io/)
- What is Eslint: [Eslint](https://eslint.org/)
