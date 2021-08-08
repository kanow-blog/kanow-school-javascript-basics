import readmeLoader from '../../readmeContentLoader.js';
void readmeLoader();

// Examples

function Hero(name) {
  this.name = name;
}
Hero.prototype.sayHello = () => `Hello my name is ${this.name}!`;