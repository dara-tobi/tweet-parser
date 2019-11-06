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
    this._hasMention = false;
    this._hasHashTag = false;
    this._hasEmoji = false;
    this._endsWithQuestionMark = false;
    this._startsWithMention = false;
    this._startsWithHashTag = false;
    this._endsWithFullStop = false;

    for (let i = 0; i < str.length; i++) {
      if (detector.isDigit(str[i])) {
        this._hasDigit = true;
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

      if (str[i + 1] && detector.isAlphanumeric(str[i + 1]) && str[i + 2] && detector.isAlphanumeric(str[i + 2])) {
        if (detector.isAmpersat(str[i])) {
          this._hasMention = true;
        }
      }

      if (str[i + 1] && detector.isAlphanumeric(str[i + 1]) && str[i + 2] && detector.isAlphanumeric(str[i + 2])) {
        if (detector.isOctothorpe(str[i])) {
          this._hasHashTag = true;
        }
      }

      if (detector.isEmoji(str[i] + str[i+1])) {
        this._hasEmoji = true;
      }

      if (!str[i + 1]) {
        if (detector.isQuestionMark(str[i])) {
          this._endsWithQuestionMark = true;
        }
      }

      if (detector.isAmpersat(str[0]) && str[1] && detector.isAlphanumeric(str[1]) && str[2] && detector.isAlphanumeric(str[2])) {
        this._startsWithMention = true;
      }

      if (detector.isOctothorpe(str[0]) && str[1] && detector.isAlphanumeric(str[1]) && str[2] && detector.isAlphanumeric(str[2])) {
        this._startsWithHashTag = true;
      }

      if (!str[i + 1] && detector.isFullStop(str[i])) {
        this._endsWithFullStop = true;
      }
    }
  }

  beginsWithUpperCase() {
    return detector.isUpperCaseCharacter(this.str[0]);
  }

  endsWithFullStop() {
    return this._endsWithFullStop;
  }

  hasDigit() {
    return this._hasDigit;
  }

  hasConsecutiveUpperCaseLetters() {
    return this._hasConsecutiveUpperCaseLetters;
  }

  hasEqualUppercaseAndFullStopCharacters() {
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

  hasMention() {
    return this._hasMention;
  }

  hasHashTag() {
    return this._hasHashTag;
  }

  hasEmoji() {
    return this._hasEmoji;
  }

  endsWithQuestionMark() {
    return this._endsWithQuestionMark;
  }

  startsWithMention() {
    return this._startsWithMention;
  }

  startsWithHashTag() {
    return this._startsWithHashTag;
  }

  endsWithFullStop() {
    return this._endsWithFullStop;
  }
}

module.exports = TweetParser;