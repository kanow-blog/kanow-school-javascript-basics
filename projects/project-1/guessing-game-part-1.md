# Guessing game

> Part 1

## Setting up a new project

- To set up a project create a new directory with **_guessing-game_** name and move to this project:

    ```bash
    mkdir guessing-game
    cd guessing-game
    ```

- Initialize git repository:

    ```bash
    git init
    ```

- Create **_index.html_** and **_index.js_** files:

    ```bash
    touch index.html index.js
    ```

- After finishing this step, your project structure should look like that:

    ```bash
    guessing-game/
    ├── index.html
    └── index.js
    ```

## Game rules

- You need to create a variable which will store information about a randomly generated number which user needs to guess
- Then create a function which will take one parameter. This parameter will contain information about user guess
  (number which according to the user is the number drawn by the program). This function should return:
  - **TOO BIG** if the number given by the user is bigger than the number drawn by the program
  - **TOO SMALL** if the number given by the user is smaller than the number drawn by the program
  - **YOU WIN** if the number given by the user is equal to the number drawn by the program
- Then create an infinity loop which will ask the user for a number until he guesses the drawn number. If user guess
  won't be a number then display information: **_'Please enter a number value'_** and continue iteration. If the user
  entered the number than pass this number to the function which you have created and display the returned value. If
  returned value is equal to **_'YOU WIN'_** finish the game if not then continue iteration.

## Hints

- For generating a random value you can use
  this: **[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)**
- For asking and receiving user answer you can use
  this: **[Window.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)**
- For displaying information to user you can use
  this: **[Window.alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)**
