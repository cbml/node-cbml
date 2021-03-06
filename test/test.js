var cbml = require('../.');
var assert = require('should');
var fs = require('fs');
var util = require('util');
var path = require('path');

/**
 * 清除 \r，为兼容 Windows 下的文本换行符 CRLF
 */
function cleanCRLF(text) {
  return String(text).replace(/\r\n?/g, '\n');
}

// coverage
cbml.parse('/*<cctv>*//*<cctv>*//*<cctv>*/cctv/*</cctv>*/', {
  ignoreLine: true
});
cbml.parse('/*<cctv>*//*</cctv>*/');
cbml.parse();

describe('coverage', function() {
  it('empty string', function () {
    assert.equal(typeof cbml.parse(''), 'object');
  })
});

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
      // if (/jsx/.test(input)) {
      //   console.log(JSON.stringify(cbml.parse(fs.readFileSync(path.join(dirname, input))), null, '  '));
      //   console.log('-------');
      //   console.log(cleanCRLF(fs.readFileSync(path.join(dirname, output))));
      // }
      assert.equal(
        JSON.stringify(cbml.parse(fs.readFileSync(path.join(dirname, input))), null, '  '),
        cleanCRLF(fs.readFileSync(path.join(dirname, output)))
      );
    });
  });
});