let detector = require('./utils/detector');
let log = console.log;

class TweetParser {
  constructor(str) {
    this.str = str;
    this._hasDigit = false;
    this._hasConsecutiveUpperCaseLetters = false;
    this._hasConsecutiveUpperCaseLetters = false;
    this._upperCaseCharacterCount = 0;
    this._fullStopCharacterCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (!this._hasDigit) {
        if (detector.isDigit(str[i])) {
          this._hasDigit = true;
        }
      }

      if (str[i - 1] && str[i - 1] != ' ') { // we don't want to do this check for the first letter, or spaces
        if (!this._hasConsecutiveUpperCaseLetters) {
          this._hasConsecutiveUpperCaseLetters =
            (detector.isUpperCaseCharacter(str[i]) && detector.isUpperCaseCharacter(str[i - 1]));
        }
      }

      if (detector.isUpperCaseCharacter(str[i])) {
        this._upperCaseCharacterCount += 1;
      }

      if (detector.isFullStop(str[i])) {
        this._fullStopCharacterCount += 1;
      }
    }
  }

  beginsWithUpperCase() {
    return detector.isUpperCaseCharacter(this.str[0]);
  }

  endsWithFullStop() {
    return detector.isFullStop(this.str[this.str.length - 1]);
  }

  hasDigit() {
    return this._hasDigit;
  }

  hasConsecutiveUpperCaseLetters() {
    return this._hasConsecutiveUpperCaseLetters;
  }

  containsEqualUppercaseAndFullStopCharacters() {
    return this._fullStopCharacterCount == this._upperCaseCharacterCount;
  }
}

module.exports = TweetParser;