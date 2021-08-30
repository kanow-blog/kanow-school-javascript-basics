import { PersonItem } from "./PersonItem.js";

const template = `<ul></ul>`;

export class PeopleList extends HTMLElement {
  static TAG = 'people-list';

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.people = [];
    this.getElementsReferences();
  }

  getElementsReferences() {
    this.peopleWrapper = this.shadowRoot.querySelector('ul');
  }

  addPerson(firstName, lastName) {
    const li = document.createElement('li');
    this.people.push(new PersonItem(firstName, lastName));
    li.append(this.people[this.people.length - 1]);
    this.peopleWrapper.append(li);
  }

  rawData() {
    return this.people.map(person => [person.firstName, person.lastName]);
  }

}

customElements.define(PeopleList.TAG, PeopleList);