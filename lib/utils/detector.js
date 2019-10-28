module.exports = {
  isDigit: function (char) {
    return !isNaN(char) && char !== ' ';
  },
  isFullStop: function(char) {
    return char == '.';
  },
  isUpperCaseCharacter: function(char) {
    return char.toLowerCase() != char;
  }
} 
