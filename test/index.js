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

  describe('test digitCharacterCount()', function() {
    it('should return the total number of digit characters', function() {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.digitCharacterCount(), 1);
    });

    it('should return the total number of digit characters, when the digits are embedded in alphabets', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.digitCharacterCount(), 4);
    });

    it('should return the total number of digit characters when there are no digits', function() {
      let parser = new TweetParser('this is a sample sentence ...');
      assert.equal(parser.digitCharacterCount(), 0);
    });
  });

  describe('test hasSymbol()', function() {
    it('should return true when text contains a symbol', function() {
      let parser = new TweetParser("This is a sample sentence \\ 4");
      assert.equal(parser.hasSymbol(), true);
    });

    it('should return false when the text contains no symbols', function() {
      let parser = new TweetParser('This is a sample sentence 4');
      assert.equal(parser.hasSymbol(), false);
    });
  });

  describe('test hasComma()', function() {
    it('should return true when text contains a comma', function() {
      let parser = new TweetParser('This is, a sample sentence 4.');
      assert.equal(parser.hasComma(), true);
    });

    it('should return false when the text contains no commas', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasComma(), false);
    });
  });

  describe('test hasExclamation()', function() {
    it('should return true when text contains an exclamation', function() {
      let parser = new TweetParser('This is a sample sentence 4!');
      assert.equal(parser.hasExclamation(), true);
    });

    it('should return false when the text contains no exclamations', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasExclamation(), false);
    });
  });

  describe('test hasQuotation()', function() {
    it('should return true when text contains a quotation mark', function() {
      let parser = new TweetParser('This is a "sample" sentence 4.');
      assert.equal(parser.hasQuotation(), true);
    });

    it('should return false when the text contains no quotation marks', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasQuotation(), false);
    });
  });

  describe('test hasHyphen()', function() {
    it('should return true when text contains a hyphen', function() {
      let parser = new TweetParser('This is a sample-sentence 4.');
      assert.equal(parser.hasHyphen(), true);
    });

    it('should return false when the text contains hyphens', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasHyphen(), false);
    });
  });

  describe('test hasColon()', function() {
    it('should return true when text contains a colon', function() {
      let parser = new TweetParser('This is: a sample sentence 4.');
      assert.equal(parser.hasColon(), true);
    });

    it('should return false when the text contains no colons', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasColon(), false);
    });
  });

  describe('test hasSemiColon()', function() {
    it('should return true when text contains a semicolon', function() {
      let parser = new TweetParser('This; is a sample sentence 4.');
      assert.equal(parser.hasSemiColon(), true);
    });

    it('should return false when the text contains no semicolons', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasSemiColon(), false);
    });
  });

  describe('test hasQuestionMark()', function() {
    it('should return true when text contains a question mark', function() {
      let parser = new TweetParser('This is a sample sentence 4?');
      assert.equal(parser.hasQuestionMark(), true);
    });

    it('should return false when the text contains no question marks', function() {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasQuestionMark(), false);
    });
  });

  describe('test hasSpace()', function() {
    it('should return true when text contains a space', function() {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.hasSpace(), true);
    });

    it('should return false when the text contains no spaces', function() {
      let parser = new TweetParser('Th1Sisasamplesentence456.');
      assert.equal(parser.hasSpace(), false);
    });
  });
});