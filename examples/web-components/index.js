import { PeopleList } from './PeopleList.js';

const peopleList = document.querySelector('people-list');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const addItemBtn = document.querySelector('#add-item-btn');
const showRawData = document.querySelector('#raw-data-btn');
const rawDataWrapper = document.querySelector('#raw-data');

addItemBtn.addEventListener('click', (e) => {
  e.preventDefault();
  peopleList.addPerson(firstNameInput.value, lastNameInput.value);
  firstNameInput.value = "";
  lastNameInput.value = "";
});

showRawData.addEventListener('click', () => {
  rawDataWrapper.textContent = JSON.stringify(peopleList.rawData());
});