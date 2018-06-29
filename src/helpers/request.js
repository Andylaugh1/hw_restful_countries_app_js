const Request = function (url) {
  this.url = url;
}

Request.prototype.fetchData = function () {
  return fetch(this.url)
    .then(response => response.json());
};

module.exports = Request;
