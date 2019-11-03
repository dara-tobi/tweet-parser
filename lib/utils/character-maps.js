const emojiList = require('./emoji-list');
const symbolsList = [
	'`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+',
	'[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/',
	'<', '>', '?'
];
const quotesList = ['\❞', '\❝', '\❜', '\❛', '\″', '\"', '\'', '\‟', '\‛', '\’', '\‘', '\“', '\”'];
const alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
	'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const buildCharacterMap = (characterList) => {
  let characterMap = {};
  characterList.forEach((character) => {
    characterMap[character] = character;
  });

  return characterMap; // returns a key-value pair for a list, e.g. ['a', 'b'] returns {'a': 'a', 'b': 'b'}
}

const symbolCharacterMap = buildCharacterMap(symbolsList);
const quoteCharacterMap = buildCharacterMap(quotesList);
const alphabetCharacterMap = buildCharacterMap(alphabetList);
const emojiCharacterMap = buildCharacterMap(emojiList);

module.exports = {
	symbolCharacterMap: symbolCharacterMap,
	quoteCharacterMap: quoteCharacterMap,
	alphabetCharacterMap: alphabetCharacterMap,
	emojiCharacterMap: emojiCharacterMap
}