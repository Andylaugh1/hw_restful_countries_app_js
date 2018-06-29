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
    console.log(this.countries);
  }

  request.fetchData()
    .then(handleRequest)
    .catch(error => console.error(error));
};

module.exports = Countries;
