# Guessing game
> Part 2

## Setting up environment

This is **part 2** of _**Guessing game**_ project, so please reuse your code from **part 1**

## What you will do

In part two you will improve the UI of your application. Your tasks are:

- Get rid of `window.prompt` and `window.alert`
- Add **`input`** which allows user putting his next guess
- Add a big question mark over the **`input`** which will represent the number which user needs to guess
- Add **`confirm button`** on the right side of the **`input`** which will confirm the value which user entered into **`input`**
- Add Guessing history list. Every time user confirms his answer add his guess with information (**CORRECT ANSWER**, **VERY CLOSE**, **CLOSE**, **FAR**) with formatting (big, bold, color) to the guessing history list. List should be displayed below the **`input`** and should be collapsible
- Add **reset button** which allows restart the game. If the button has been clicked you should: draw a new number, clear the **input**, remove displayed information, restore the question mark and clear the guessing history list
- After **`confirm button`** has been clicked you need:
  - Clear the **`input`** with user guess
  - Replace big question mark with guessed number (only if user found guessing number)
  - Basing on how close user was to the correct answer display information over input:
    - **CORRECT ANSWER** → should be displayed if user guess is equal to random number. Displayed information should be big, bold text which will change color from green to blue in the infinity animation (use css animations)
    - **VERY CLOSE** → should be displayed if the user was wrong by no more than **10%** of the order of magnitude + 1 of the guessing number. Displayed information should be big, bold green text
    - **CLOSE** → should be displayed if the user was wrong by no more than **50%** of the order of magnitude + 1 of the guessing number. Displayed information should be big, bold orange text
    - **FAR** → should be displayed in other cases. Displayed information should be big, bold red text

>Remember that, the application should be responsive (min-width of your application should be `360px`)

## How to calculate [x%] of the order of magnitude + 1 of the guessing number?

### Example 1

Let's say we draw a number **`2`**. The order of magnitude + 1 of this number will be **10** so now 10% of this will be **1**

### Example 2

Let's say we draw a number **`22`**. The order of magnitude + 1 of this number will be **100** so now 10% of this will be **10**

### Example 3

Let's say we draw a number **`222`**. The order of magnitude + 1 of this number will be **1000** so now 10% of this will be **100**

## Hints

- Collapsible element: **[`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)**
- How to create animation: **[animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)**
