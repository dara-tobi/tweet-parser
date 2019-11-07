var assert = require('assert');
var log = console.log;
let TweetParser = require('../lib/tweet-parser');
let detector = require('../lib/utils/detector');

describe('PARSER TESTS', () => {
  describe('test beginsWithUpperCase()', () => {
    it('should return true when the text begins with upper case', () => {
      let parser = new TweetParser('This is a sample sentence');
      assert.equal(parser.beginsWithUpperCase(), true);
    });

    it('should return false when the text does not begin with upper case', () => {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.beginsWithUpperCase(), false);
    });
  });

  describe('test endsWithFullStop()', () => {
    it('should return true when the text ends with full stop', () => {
      let parser = new TweetParser('This is a sample sentence.');
      assert.equal(parser.endsWithFullStop(), true);
    });

    it('should return false when the text does not end with full stop', () => {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.endsWithFullStop(), false);
    });
  });


  describe('test hasDigit()', () => {
    it('should return true when the text contains a digit', () => {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.hasDigit(), true);
    });

    it('should return false when the text does not contain a digit', () => {
      let parser = new TweetParser('this is a sample sentence');
      assert.equal(parser.hasDigit(), false);
    });

    it('should return true when the text contains 0', () => {
      let parser = new TweetParser('this is a sample sentence 0');
      assert.equal(parser.hasDigit(), true);
    });

    it('should return false when the text does not contain a digit, and contains symbols', () => {
      let parser = new TweetParser('this is a sample sentence ~!@#$%^&*()?":+`<>,./_');
      assert.equal(parser.hasDigit(), false);
    });
  });

  describe('test hasConsecutiveUpperCaseLetters()', () => {
    it('should return true when the text contains consecutive upper case characters', () => {
      let parser = new TweetParser('THIS is a sample sentence 4.');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), true);
    });

    it('should return false when the text does not contain consecutive upper case characters', () => {
      let parser = new TweetParser('Th1S is a sample sentence');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });

    it('should return false when the text does not contain consecutive upper case characters, and contains consecutive digits', () => {
      let parser = new TweetParser('this is a sample sentence 1A23');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });

    it('should return false when the text not contain consecutive upper case characters, and contains symbols', () => {
      let parser = new TweetParser('this is a sample sentence ~!@#$%^&*()?":+`<>,./_');
      assert.equal(parser.hasConsecutiveUpperCaseLetters(), false);
    });
  });

  describe('test hasEqualUppercaseAndFullStopCharacters()', () => {
    it('should return true when the text contains an equal number upper case and full stop characters', () => {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.hasEqualUppercaseAndFullStopCharacters(), true);
    });

    it('should return false when the text does not contain an equal number upper case and full stop characters (more upper case characters)', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.hasEqualUppercaseAndFullStopCharacters(), false);
    });

    it('should return false when the text does not contain an equal number upper case and full stop characters (more full stops)', () => {
      let parser = new TweetParser('this is a sample sentence 1A23...');
      assert.equal(parser.hasEqualUppercaseAndFullStopCharacters(), false);
    });
  });

  describe('test digitCharacterCount()', () => {
    it('should return the total number of digit characters', () => {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.digitCharacterCount(), 1);
    });

    it('should return the total number of digit characters, when the digits are embedded in alphabets', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.digitCharacterCount(), 4);
    });

    it('should return the total number of digit characters when there are no digits', () => {
      let parser = new TweetParser('this is a sample sentence ...');
      assert.equal(parser.digitCharacterCount(), 0);
    });
  });

  describe('test hasSymbol()', () => {
    it('should return true when text contains a symbol', () => {
      let parser = new TweetParser("This is a sample sentence \\ 4");
      assert.equal(parser.hasSymbol(), true);
    });

    it('should return false when the text contains no symbols', () => {
      let parser = new TweetParser('This is a sample sentence 4');
      assert.equal(parser.hasSymbol(), false);
    });
  });

  describe('test hasComma()', () => {
    it('should return true when text contains a comma', () => {
      let parser = new TweetParser('This is, a sample sentence 4.');
      assert.equal(parser.hasComma(), true);
    });

    it('should return false when the text contains no commas', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasComma(), false);
    });
  });

  describe('test hasExclamation()', () => {
    it('should return true when text contains an exclamation', () => {
      let parser = new TweetParser('This is a sample sentence 4!');
      assert.equal(parser.hasExclamation(), true);
    });

    it('should return false when the text contains no exclamations', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasExclamation(), false);
    });
  });

  describe('test hasQuotation()', () => {
    it('should return true when text contains a quotation mark', () => {
      let parser = new TweetParser('This is a "sample" sentence 4.');
      assert.equal(parser.hasQuotation(), true);
    });

    it('should return false when the text contains no quotation marks', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasQuotation(), false);
    });
  });

  describe('test hasHyphen()', () => {
    it('should return true when text contains a hyphen', () => {
      let parser = new TweetParser('This is a sample-sentence 4.');
      assert.equal(parser.hasHyphen(), true);
    });

    it('should return false when the text contains hyphens', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasHyphen(), false);
    });
  });

  describe('test hasColon()', () => {
    it('should return true when text contains a colon', () => {
      let parser = new TweetParser('This is: a sample sentence 4.');
      assert.equal(parser.hasColon(), true);
    });

    it('should return false when the text contains no colons', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasColon(), false);
    });
  });

  describe('test hasSemiColon()', () => {
    it('should return true when text contains a semicolon', () => {
      let parser = new TweetParser('This; is a sample sentence 4.');
      assert.equal(parser.hasSemiColon(), true);
    });

    it('should return false when the text contains no semicolons', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasSemiColon(), false);
    });
  });

  describe('test hasQuestionMark()', () => {
    it('should return true when text contains a question mark', () => {
      let parser = new TweetParser('This is a sample sentence 4?');
      assert.equal(parser.hasQuestionMark(), true);
    });

    it('should return false when the text contains no question marks', () => {
      let parser = new TweetParser('Th1S is a sample sentence 456.');
      assert.equal(parser.hasQuestionMark(), false);
    });
  });

  describe('test hasSpace()', () => {
    it('should return true when text contains a space', () => {
      let parser = new TweetParser('This is a sample sentence 4.');
      assert.equal(parser.hasSpace(), true);
    });

    it('should return false when the text contains no spaces', () => {
      let parser = new TweetParser('Th1Sisasamplesentence456.');
      assert.equal(parser.hasSpace(), false);
    });
  });

  describe('test hasMention()', () => {
    it('should return true when text contains a mention', () => {
      let parser = new TweetParser('This is a @sample sentence 4.');
      assert.equal(parser.hasMention(), true);
    });

    it('should return false when the text contains no mentions', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.hasMention(), false);
    });
  });

  describe('test hasHashTag()', () => {
    it('should return true when text contains a hashtag', () => {
      let parser = new TweetParser('This is a #sample sentence 4.');
      assert.equal(parser.hasHashTag(), true);
    });

    it('should return false when the text contains no hashtags', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.hasHashTag(), false);
    });
  });

  describe('test hasEmoji()', () => {
    it('should return true when text contains an emoji', () => {
      let parser = new TweetParser('This is a #sample sentence 😊😊.');
      assert.equal(parser.hasEmoji(), true);
    });

    it('should return false when the text contains no emojis', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.hasEmoji(), false);
    });
  });

  describe('test endsWithQuestionMark()', () => {
    it('should return true when text ends with a question mark', () => {
      let parser = new TweetParser('This is a #sample sentence?');
      assert.equal(parser.endsWithQuestionMark(), true);
    });

    it('should return false when the text does not end with a question mark', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.endsWithQuestionMark(), false);
    });
  });

  describe('test startsWithHashTag()', () => {
    it('should return true when text starts with a hashtag', () => {
      let parser = new TweetParser('#This is a #sample sentence?');
      assert.equal(parser.startsWithHashTag(), true);
    });

    it('should return false when the text does not start with a hashtag', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.startsWithHashTag(), false);
    });
  });

  describe('test startsWithMention()', () => {
    it('should return true when text starts with a mention', () => {
      let parser = new TweetParser('@This is a #sample sentence?');
      assert.equal(parser.startsWithMention(), true);
    });

    it('should return false when the text does not start with a mention', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.startsWithMention(), false);
    });
  });

  describe('test potentialSentenceCount()', () => {
    it('should return 2 where there are two sentence endings', () => {
      let parser = new TweetParser('Is this a sentence? Mark it as one.');
      assert.equal(parser.potentialSentenceCount(), 2);
    });

    it('should return 1 when there is one sentence ending', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.potentialSentenceCount(), 1);
    });

    it('should return 3 when there are three sentence endings', () => {
      let parser = new TweetParser('Th1S is a sample sentence. Yes? Yes');
      assert.equal(parser.potentialSentenceCount(), 3);
    });


    it('should return 3 when there are three sentence endings, but ignore consecutive-sentence end characters', () => {
      let parser = new TweetParser('Th1S is a sample sentence... Yes? Yes!');
      assert.equal(parser.potentialSentenceCount(), 3);
    });
  });

  describe('test endSentenceCharacterCount()', () => {
    it('should return 2 where there are two sentence end characters', () => {
      let parser = new TweetParser('Is this a sentence? Mark it as one.');
      assert.equal(parser.endSentenceCharacterCount(), 2);
    });

    it('should return 1 when there is one sentence end character', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.endSentenceCharacterCount(), 1);
    });

    it('should return 3 when there are three sentence end characters', () => {
      let parser = new TweetParser('Th1S is a sample sentence. Yes? Yes');
      assert.equal(parser.endSentenceCharacterCount(), 2);
    });


    it('should return 3 when there are three sentence end characters, but ignore consecutive-sentence end characters', () => {
      let parser = new TweetParser('Th1S is a sample sentence... Yes? Yes!');
      assert.equal(parser.endSentenceCharacterCount(), 3);
    });
  });

  describe('test hasBadStructure()', () => {
    it('should return false when there are no issues with the sentence', () => {
      let parser = new TweetParser('Is this a sentence? Mark it as one.');
      assert.equal(parser.hasBadStructure(), false);
    });

    it('should return true when there is no final end character', () => {
      let parser = new TweetParser('Th1S is a sample sentence. Yes? Yes');
      assert.equal(parser.hasBadStructure(), true);
    });

    it('should return true when there are consecutive uppercase characters', () => {
      let parser = new TweetParser('ThIS is a sample sentence... Yes? Yes!');
      assert.equal(parser.hasBadStructure(), true);
    });

    it('should return false when there is a randomly occuring uppercase character that does not start a sentence', () => {
      let parser = new TweetParser('Th1S is a sample sentence.');
      assert.equal(parser.hasBadStructure(), false);
    });
  });
});

describe('DETECTOR TESTS', () => {
  describe('test isAlphanumeric()', () => {
    it('should return false when a character is not alphanumeric (space)', () => {
      assert.equal(detector.isAlphanumeric(' '), false);
    });

    it('should return false when a character is not alphanumeric (octothorpe)', () => {
      assert.equal(detector.isAlphanumeric('#'), false);
    });

    it('should return false when a character is not alphanumeric (ampersat)', () => {
      assert.equal(detector.isAlphanumeric('@'), false);
    });

    it('should return true when a character is alphanumeric (alphabet)', () => {
      assert.equal(detector.isAlphanumeric('a'), true);
    });

    it('should return true when a character is alphanumeric (digit)', () => {
      assert.equal(detector.isAlphanumeric('5'), true);
    });
  });

  describe('test isEmoji()', () => {
    it('should return true when a character is an emoji (laughter)', () => {
      assert.equal(detector.isEmoji('😂'), true);
    });

    it('should return true when a character is an emoji (eggplant)', () => {
      assert.equal(detector.isEmoji('🍆'), true);
    });

    it('should return true when a character is an emoji (car)', () => {
      assert.equal(detector.isEmoji('🚘'), true);
    });

    it('should return true when a character is an emoji (fire)', () => {
      assert.equal(detector.isEmoji('🔥'), true);
    });

    it('should return true when a character is an emoji (money)', () => {
      assert.equal(detector.isEmoji('💰'), true);
    });

    it('should return false when a character is not an emoji (digits)', () => {
      assert.equal(detector.isEmoji('2345'), false);
    });

    it('should return false when a character is not an emoji (octothorpe)', () => {
      assert.equal(detector.isEmoji('#'), false);
    });
  });

  describe('test shouldEndSentence()', () => {
    it('should return true when a character is either . ! or ? (.)', () => {
      assert.equal(detector.shouldEndSentence('.'), true);
    });

    it('should return true when a character is either . ! or ? (!)', () => {
      assert.equal(detector.shouldEndSentence('!'), true);
    });

    it('should return true when a character is either . ! or ? (?)', () => {
      assert.equal(detector.shouldEndSentence('?'), true);
    });
  });
});