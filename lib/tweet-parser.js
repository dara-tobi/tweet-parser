class TweetParser {
	constructor(str) {
		this.str = str
	}

	beginsWithUpperCase() {
		return this.str[0].toLowerCase() !== this.str[0];
	}
}

module.exports = TweetParser;