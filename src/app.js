const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  countries = new Countries('https://restcountries.eu/rest/v2/all');
  countries.getData();
});
