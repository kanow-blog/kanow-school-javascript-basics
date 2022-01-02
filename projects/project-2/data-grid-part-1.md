# Data grid

> Part 1

## Description

You will create an application which will allow view data in grid views. In the next parts we will add more
functionalities to this project like filters, search or sorting.

## Setting up a new project

- To set up a project create a new directory with **_data-grid_** name and move to this project:

  ```bash
  mkdir data-grid
  cd data-grid
  ```

- Initialize git repository:

  ```bash
  git init
  ```

- Create **_index.html_**, **_index.js_** and **_styles.css_** files:

  ```bash
  touch index.html index.js styles.css
  ```

- After finishing this step, your project structure should look like that:

  ```bash
  data-grid/
  ├── index.html
  └── index.js
  └── styles.css
  ```

## What you need to do

In part one you will need to

- fetch data under this url: _[https://raw.githubusercontent.com/kanow-blog/kanow-school-javascript-basics/master/projects/project-2/datasets/dataset-1/data.json](https://raw.githubusercontent.com/kanow-blog/kanow-school-javascript-basics/master/projects/project-2/datasets/dataset-1/data.json)_ (to fetch data you need to send **GET** request). Structure of this data looks like that:

  ```typescript
  type Person = {
    id: string;
    gender: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    age: number;
    email: string;
    address: {
      country: string;
      state: string;
      city: string;
      street: string;
      houseNumber: number;
    };
  };
  ```

- Then you will need to display this data in a table view. **`address`** field should be collapsible. By default, it should show summary of address which should look like that: _**`[city], [street], [house]`**_ for example: _**Cecilia, Bay Avenue 376**_. If you click address header then you need to expand this header and display detailed data in separated columns

## Hints

- You can use **`data-*`** attribute to recognize cell and rows which should be visible or hidden. By tooling this attribute you can collapse or expand you column header. So for example if user click header name of collapsible column you can toggle this attribute and expand column (and vice versa).
  - More about: _**[data-\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)**_
  - More about attr _**[Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)**_
- To fetch data you shoud use this: _**[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)**_
- Mor information about tables you can find here: _**[`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)**_. Check **`rowspan`** and **`colspan`** attributes
