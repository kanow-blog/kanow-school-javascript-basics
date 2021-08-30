const template = `
<div>
  <div>
    <label for="first-name">First name: </label>
    <input type="text" name="first-name" id="first-name" disabled>
  </div>
  <div>
    <label for="first-name">Last name: </label>
    <input type="text" name="first-name" id="last-name" disabled>
  </div>
</div>
`;

export class PersonItem extends HTMLElement {
  static TAG = 'person-item';

  constructor(firstName, lastName) {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.allItems = [];
    this.getElementsReferences();
    this.firstNameEl.value = firstName;
    this.lastNameEl.value = lastName;
  }

  set firstName(value) {
    this.firstNameEl.value = value;
  }

  get firstName() {
    return this.firstNameEl.value;
  }

  set lastName(value) {
    this.firstNameEl.value = value;
  }

  get lastName() {
    return this.lastNameEl.value;
  }

  getElementsReferences() {
    this.firstNameEl = this.shadowRoot.querySelector('#first-name');
    this.lastNameEl = this.shadowRoot.querySelector('#last-name');
  }

}

customElements.define(PersonItem.TAG, PersonItem);