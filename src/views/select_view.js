const PubSub = require('../helpers/pub_sub.js');
const Countries = require('../models/countries.js');

const SelectView = function (element) {
  this.element = element;
  console.log(this.element);
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-ready', (event) => {
    const countriesData = event.detail;
    this.populate(countriesData);
  });

  this.element.addEventListener('change',  (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('country:selected-country', selectedIndex);
  })
}

SelectView.prototype.populate = function (countriesData) {
  countriesData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
