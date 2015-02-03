var cbml = require('../.');
var assert = require('should');
var fs = require('fs');
var util = require('util');
var path = require('path');

describe('fixtures', function() {
  var dirname = 'test/fixtures';
  var items = fs.readdirSync(dirname).filter(function(item) {
    return /\.input\.(\w+)$/.test(item);
  }).forEach(function(input) {
    var output = input.replace(/\.input\.(\w+)$/, '.output.$1');
    it(input, function() {
      if (/\.throw\./.test(input)) { // 出现异常
        (function() {
          cbml.parse(fs.readFileSync(path.join(dirname, input)));
        }).should.throw();
        return;
      }
      assert.equal(
        JSON.stringify(cbml.parse(fs.readFileSync(path.join(dirname, input))), null, '  '),
        String(fs.readFileSync(path.join(dirname, output)))
      );
    });
  });

});