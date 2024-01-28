# Data grid

> Part 4

## Description

In this part, we will refactor our code and use TypesScript 😎

## Setting up a project

Please reuse code from **Part 3**.

## What you need to do

### Functional requirements

- Make sure you didn't break any functional from previous parts after this refactor

### Implementation requirements

- Create your own `tsconfig.json`, `.eslintrc` and `.prettierrc` and make them work together, or you can use config I
  have already prepared for you(I have prepared this config for project in pure JavaScript so if you are using any other
  library I do not know will it work for you). You can download config from this
  place: [refactor-config](https://github.com/kanow-blog/kanow-school-javascript-basics/tree/master/projects/project-2/refactor-config)
  . You need to copy these files to the root directory of your project and make sure all your javascript files are
  nested in _**./src**_ directory. Then you can run `npm i` in your project root directory. After running this command
  you should be able to use:
  - `npm run serve-dev` -> listen on changes in files from _**`./src`**_ directory code and recompile every time if
    detects any change
  - `npm run lint` -> check do you have any errors in your code
  - `npm run lint-and-fix` -> to fix all auto-fixable errors
  > Do not forget to change path to your source javascript file in `index.html` to _**`./dist/index.js`**_
- Create proper interfaces for config files
- Create proper interfaces for you WebComponents
- Avoid using **any** type unless you do not have idea how to solve your problem, or you really think it can be
  anything. If you do not know what can be the type of variable then better use **unknown** instead of **any**
- No TypeScript compiler errors in console

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
