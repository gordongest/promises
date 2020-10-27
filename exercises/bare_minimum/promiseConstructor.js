var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var readFile = Promise.promisifyAll(require('fs').readFile);

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (!err) {
        var firstLine = content.split('\n')[0];
        resolve(firstLine);
      } else {
        reject(err);
      }
    });
  });
};
// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err) {
        resolve(res.statusCode);
      } else {
        reject(err);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
