const symbolsList = [
	'`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+',
	'[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/',
	'<', '>', '?'
];

const quotesList = ['\❞', '\❝', '\❜', '\❛', '\″', '\"', '\'', '\‟', '\‛', '\’', '\‘', '\“', '\”'];

// to do :: emoji character map

const buildCharacterMap = (characterList) => {
  let characterMap = {};
  characterList.forEach((character) => {
    characterMap[character] = character;
  });

  return characterMap; // returns a key-value pair for a list, e.g. ['a', 'b'] returns {'a': 'a', 'b': 'b'}
}

const symbolCharacterMap = buildCharacterMap(symbolsList);
const quoteCharacterMap = buildCharacterMap(quotesList);

module.exports = {
	symbolCharacterMap: symbolCharacterMap,
	quoteCharacterMap: quoteCharacterMap
}