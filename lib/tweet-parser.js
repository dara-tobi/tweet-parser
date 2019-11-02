let detector = require('./utils/detector');
let log = console.log;

class TweetParser {
  constructor(str) {
    this.str = str;
    this._hasDigit = false;
    this._hasConsecutiveUpperCaseLetters = false;
    this._upperCaseCharacterCount = 0;
    this._fullStopCharacterCount = 0;
    this._digitCharacterCount = 0;
    this._hasSymbol = false;
    this._hasComma = false;
    this._hasExclamation = false;
    this._hasQuotation = false;
    this._hasHyphen = false;
    this._hasColon = false;
    this._hasSemiColon = false;
    this._hasQuestionMark = false;
    this._hasSpace = false;

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

      if (detector.isDigit(str[i])) {
        this._digitCharacterCount += 1;
      }

      if (detector.isSymbol(str[i])) {
        this._hasSymbol = true;
      }

      if (detector.isComma(str[i])) {
        this._hasComma = true;
      }

      if (detector.isExclamation(str[i])) {
        this._hasExclamation = true;
      }

      if (detector.isQuotation(str[i])) {
        this._hasQuotation = true;
      }

      if (detector.isHyphen(str[i])) {
        this._hasHyphen = true;
      }

      if (detector.isColon(str[i])) {
        this._hasColon = true;
      }

      if (detector.isSemiColon(str[i])) {
        this._hasSemiColon = true;
      }

      if (detector.isQuestionMark(str[i])) {
        this._hasQuestionMark = true;
      }

      if (detector.isSpace(str[i])) {
        this._hasSpace = true;
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

  digitCharacterCount() {
    return this._digitCharacterCount;
  }

  hasSymbol() {
    return this._hasSymbol;
  }

  hasComma() {
    return this._hasComma;
  }

  hasExclamation() {
    return this._hasExclamation;
  }

  hasQuotation() {
    return this._hasQuotation;
  }

  hasHyphen() {
    return this._hasHyphen;
  }

  hasColon() {
    return this._hasColon;
  }

  hasSemiColon() {
    return this._hasSemiColon;
  }

  hasQuestionMark() {
    return this._hasQuestionMark;
  }

  hasSpace() {
    return this._hasSpace;
  }
}

module.exports = TweetParser;