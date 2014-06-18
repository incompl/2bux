/* jshint node:true */
/* global $,$$ */

var phantom = require('phantom');
var connect = require('connect');
var http = require('http');

var server;

exports.setUp = function(callback) {
  var app = connect().use(connect.static('.'));
  server = http.createServer(app).listen(3000);
  callback();
};

exports.tearDown = function(callback) {
  server.close();
  callback();
};

function phantomTest(test, expected, evaluate) {
  phantom.create(function(ph) {
    ph.createPage(function(page) {
      page.open('http://localhost:3000/test/html/main.html', function(result) {
        page.evaluate(evaluate, function(result) {
          test.equal(result, expected);
          ph.exit();
          test.done();
        });
      });
    });
  });
}

exports.$ = function(test) {
  phantomTest(test, 'Hello!', function() {
    return $('h1').innerText;
  });
};

exports.$$ = function(test) {
  phantomTest(test, 6, function() {
    return $$('li').length;
  });
};

exports.$withContext = function(test) {
  phantomTest(test, 'Stuff 1', function() {
    var stuffContainer = $('#stuff');
    var stuffUnit = $('li', stuffContainer);
    return stuffUnit.innerText;
  });
};

exports.$$withContext = function(test) {
  phantomTest(test, 3, function() {
    var stuffContainer = $('#stuff');
    var stuff = $$('li', stuffContainer);
    return stuff.length;
  });
};
