const PubSub = require('../helpers/pub_sub.js')

const DetailView = function (container) {
  this.container = container;
}

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('selection:country-object', (event) => {
    const country = event.detail;
    this.render(country);
  })
};

DetailView.prototype.render = function (country) {
  const countryName = this.createNewElement('h1', country.name);
  const countryCapital = this.createNewElement('h2', country.capital);
  const countryRegion = this.createNewElement('h2', country.region);
  const countryPopulation = this.createNewElement('h2', country.population);
}

DetailView.prototype.createNewElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  this.container.appendChild(element);
}

module.exports = DetailView;
