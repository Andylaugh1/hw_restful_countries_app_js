const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js')

const Countries = function (url) {
  this.url = url;
  this.countries = [];
}

Countries.prototype.getData = function () {
  const url = this.url;
  const request = new Request(url);
  const handleRequest = (responseData) => {
    this.countries = responseData;
    PubSub.publish('Countries:data-ready', this.countries);
  }

  request.fetchData()
    .then(handleRequest)
    .catch(error => console.error(error));
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('country:selected-country', (event) => {
    const selectedCountry = this.countries[event.detail];
    PubSub.publish('selection:country-object', selectedCountry);
  })

};

module.exports = Countries;
