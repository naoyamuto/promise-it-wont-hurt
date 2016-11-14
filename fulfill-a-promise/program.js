'use strict'

require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 300);
});

promise.then(function() {
  console.log("FULFILLED!")
});