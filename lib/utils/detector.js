let characterMaps = require('./character-maps');

module.exports = {
  isDigit: function (char) {
    return !isNaN(char) && char !== ' ';
  },
  isFullStop: function(char) {
    return char == '.';
  },
  isUpperCaseCharacter: function(char) {
    return char.toLowerCase() != char;
  },
  isSymbol: function(char) {
    return !!characterMaps.symbolCharacterMap[char]
  },
  isComma: function(char) {
    return char == ',';
  },
  isExclamation: function(char) {
    return char == '!';
  },
  isQuotation: function(char) {
    return !!characterMaps.quoteCharacterMap[char];
  },
  isHyphen: function(char) {
    return char == '-';
  },
  isColon: function(char) {
    return char == ':';
  },
  isSemiColon: function(char) {
    return char == ';';
  },
  isQuestionMark: function(char) {
    return char == '?';
  },
  isSpace: function (char) {
    return char == ' ';
  }
} 
