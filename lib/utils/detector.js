let characterMaps = require('./character-maps');

module.exports = {
  isDigit (char) {
    return !isNaN(char) && char !== ' ';
  },
  isFullStop(char) {
    return char == '.';
  },
  isUpperCaseCharacter(char) {
    return char.toLowerCase() != char;
  },
  isSymbol(char) {
    return !!characterMaps.symbolCharacterMap[char]
  },
  isComma(char) {
    return char == ',';
  },
  isExclamation(char) {
    return char == '!';
  },
  isQuotation(char) {
    return !!characterMaps.quoteCharacterMap[char];
  },
  isHyphen(char) {
    return char == '-';
  },
  isColon(char) {
    return char == ':';
  },
  isSemiColon(char) {
    return char == ';';
  },
  isQuestionMark(char) {
    return char == '?';
  },
  isSpace (char) {
    return char == ' ';
  },
  isAlphanumeric(char) {
    return !!characterMaps.alphabetCharacterMap[char] || this.isDigit(char);
  },
  isAmpersat(char) {
    return char == '@';
  },
  isOctothorpe(char) {
    return char == '#';
  },
  isEmoji(char) {
    return !!characterMaps.emojiCharacterMap[char];
  },
  shouldEndSentence(char) {
    return char == '?' || char == '.' || char == '!';
  }
} 
