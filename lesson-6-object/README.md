# Object

## Tasks

> After finishing each TASK print **`person`** object.
>
> Printing should look like that: **_`console.log('TASK-1', person);`_**

- **[TASK-1]** Create a variable **`person`** object which will have below fields:
  - **`firstName`** -> which type is **_string_**
  - **`lastName`** -> which type is **_string_**
  - **`age`** -> which type is **_number_**
  - **`hello`** -> it is a **_function_** which should print: _`Hello my name is [firstName] [lastName]`_
- **[TASK-2]** Add **`familyMembers`** field to **`person`** object which you have created in previous task. This field
  should be
- **[TASK-3]** Add **`house`** field to **`person`** object. This field should be an object initialized with:
  - **`country`** -> **_string_** field
  - **`city`** -> **_string_** field
  - **`zipCode`** -> **_string_** field
- **[TASK-4]** Add filed **`addField`** which will be a **_function_** to **`person`** object. This function should take 2 parameters
  _`name`_ and _`value`_. This function should add field with given name to **`person`** object
- **[TASK-5]** Add field **`addFamiyMember`** which will be a **_function_** to **`person`** object. This function 
  should take 1 parameter
  which should allow adding new persons to current **`person`** **`familyMembers`** array
- **[TASK-6]** Using method that you have created in **TASK-4** add **`eyeColor`** field with _`green`_ value to
  **`person`** object
- **[TASK-7]** Using method that you have created in **TASK-5** add family member to **`person`** object
  **`familyMembers`** field. New family member should be an object with `firstName`, `lastName` and `ageField`
- **[TASK-8]** Change **`house`** **`country`** field of person object to _`Void`_
- **[TASK-9]** Remove **`house`** **`zipCode`** field from **`person`** object
- **[TASK-9]** Check does **`age`** field exists in **`person`** variable
- **[TASK-10]** Check does **`asc1234`** field exists in **`person`** variable

## Questions

- **[QUESTION-1]** How can you block any modification to object ?
- **[QUESTION-2]** How can you prevent removing fields from object ?
- **[QUESTION-3]** How can you get all object values (only values)?
- **[QUESTION-4]** How can you get all object field names (keys)?

## Additional information

- How to create an object: **[Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)**
- How to remove field from object: **[delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)**
- More about object and object built in methods you can find here: **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
- What is the meaning of **_this_** inside object: **[this as an object method](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method)**
- How to check does field exists inside object: **[in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)**

> I want to encourage you to play with object built in methods, they can be very useful in the future. Here you can find those methods: **[Object Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)**
