var assert = require('assert');
var log = console.log;
let TweetParser = require('../lib/tweet-parser');


describe('tests', function() {
  describe('test beginsWithUpperCase()', function() {
    it('should return true when the text begins with upper case', function() {
      let text = new TweetParser('This is a sample sentence');
      assert.equal(text.beginsWithUpperCase(), true);
    });

    it('should return false when the text does not begin with upper case', function() {
      let text = new TweetParser('ehis is a sample sentence');
      assert.equal(text.beginsWithUpperCase(), false);
    });
  });
});