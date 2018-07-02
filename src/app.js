const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries('https://restcountries.eu/rest/v2/all');
  countries.getData();
  countries.bindEvents();

  const element = document.querySelector('select#countries-list');
  const element1 = document.querySelector('input#region-filter');
  const selectView = new SelectView(element, element1);
  selectView.bindEvents();


  const container = document.querySelector('div#country-data');
  const detailView = new DetailView(container);
  detailView.bindEvents();
});
