var assert = require('assert');
var log = console.log;
let TweetParser = require('../lib/tweet-parser');


describe('tests', function() {
  describe('test beginsWithUpperCase()', function() {
    it('should return true when the text begins with upper case', function() {
      let parser = new TweetParser('This is a sample sentence');
      assert.equal(parser.beginsWithUpperCase(), true);
    });

    it('should return false when the text does not begin with upper case', function() {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.beginsWithUpperCase(), false);
    });
  });

  describe('test endsWithFullStop()', function() {
    it('should return true when the text ends with full stop', function() {
      let parser = new TweetParser('This is a sample sentence.');
      assert.equal(parser.endsWithFullStop(), true);
    });

    it('should return false when the text does not end with full stop', function() {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.endsWithFullStop(), false);
    });
  });


  describe('test hasDigit()', function() {
    it('should return true when the text contains a digit', function() {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.hasDigit(), true);
    });

    it('should return false when the text does not contain a digit', function() {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.hasDigit(), false);
    });

    it('should return true when the text contains 0', function() {
      let parser = new TweetParser('this is a sample sentence 0');
      assert.equal(parser.hasDigit(), true);
    });

    it('should return false when the text does not contain a digit, and contains symbols', function() {
      let parser = new TweetParser('this is a sample sentence ~!@#$%^&*()?":+`<>,./_');
      assert.equal(parser.hasDigit(), false);
    });
  });

  describe('test hasConsecutiveUpperCaseLetters()', function() {
    it('should return true when the text contains consecutive upper case characters', function() {
      let parser = new TweetParser('THIS is a sample sentence 4.');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), true);
    });

    it('should return false when the text does not contain consecutive upper case characters', function() {
      let parser = new TweetParser('Th1S is a sample sentence');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });

    it('should return false when the text does not contain consecutive upper case characters, and contains consecutive digits', function() {
      let parser = new TweetParser('this is a sample sentence 1A23');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });

    it('should return false when the text not contain consecutive upper case characters, and contains symbols', function() {
      let parser = new TweetParser('this is a sample sentence ~!@#$%^&*()?":+`<>,./_');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });
  });

  describe('test containsEqualUppercaseAndFullStopCharacters()', function() {
    it('should return true when the text contains an equal number upper case and full stop characters', function() {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.containsEqualUppercaseAndFullStopCharacters(), true);
    });

    it('should return false when the text does not contain an equal number upper case and full stop characters (more upper case characters)', function() {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.containsEqualUppercaseAndFullStopCharacters(), false);
    });

    it('should return false when the text does not contain an equal number upper case and full stop characters (more full stops)', function() {
      let parser = new TweetParser('this is a sample sentence 1A23...');
      assert.equal(parser.containsEqualUppercaseAndFullStopCharacters(), false);
    });
  });
});