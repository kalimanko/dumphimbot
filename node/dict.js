// dict.js
// ============
module.exports = {
	/** A dictionary of common words from which Giph-Bot will select a 'Word of the Day' */
	randomWords: ["zoo"],

	/**
	 * Selects a word at random from the randomWords array.
	 * @return A string
	 */
	getWordOfTheDay: function() {
	    var randIndex = Math.floor(Math.random() * this.randomWords.length);
	    var wordOfTheDay = this.randomWords[randIndex];
	    return wordOfTheDay;
  	}
};
