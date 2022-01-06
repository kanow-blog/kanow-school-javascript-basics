# Data grid

> Part 3

## Description

In this part, we will fetch config and render data-grid based on this config

## Setting up a project

Please reuse code from **Part 2**.

## What you need to do

### Functional requirements

- Fetch config file under this
  url: [https://raw.githubusercontent.com/kanow-blog/kanow-school-javascript-basics/master/projects/project-2/datasets/dataset-1/config.json](https://raw.githubusercontent.com/kanow-blog/kanow-school-javascript-basics/master/projects/project-2/datasets/dataset-1/config.json)
- Render columns of shape described by config
- Fetch and render data given in config
- Apply sorting rules from config to your data

### Implementation requirements

- Remember that config can change so do not hardcode solutions for specific config. To test your solution on different
  config you can use
  this [config 2](https://github.com/kanow-blog/kanow-school-javascript-basics/blob/master/projects/project-2/datasets/dataset-2/config.json)
  or create your own one
- You can think about creating your own backend which will host config files, later we can add possibility to edit this
  config
- Config file can be described by such data structure:

  ```typescript
  /**
   * dataUrl -> url to all data records
   * columns -> list of columns configs
   * sortingRules -> list of sorting rules
   */
  interface GridConfig {
    dataUrl: string;
    columns: ColumnConfig[];
    sortingRules: SortingRule[];
  }
  
  /**
   * id -> unique id of single column
   * displayName -> name which should be displayed to user in column header
   * type -> column data type
   * columnIndex -> index under which column should appear
   * visible -> is column visble to user
   * expanded -> is column expanded (if **true** should show childrens columns)
   * summary -> rule which describes the summary of what should be displayed if column childrens are hidden
   * children -> children columns
   */
  interface ColumnConfig {
    id: string;
    displayName: string;
    type: ColumnType;
    columnIndex: number;
    visible?: boolean;
    expanded?: boolean;
    summary?: string;
    children?: ColumnConfig[];
  }
  
  /**
   * id -> id of column to sort
   * direction -> sort direction (ascending or descendig)
   */
  interface SortingRule {
    id: string;
    direction: SortDirection;
  }
  
  enum ColumnType {
    DATE = 'DATE',
    NUMBER = 'NUMBER',
    STRING = 'STRING',
    OBJECT = 'OBJECT'
  }
  
  enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
  }
  ```

## Hints

- Make a plan a do not implement everything at once. For example fetch data and render columns ignoring children,
  sorting rules ... then slowly start adding thinks you have ignored
- Keep in mind we are going to extend this project with new functionalities like filters