var Trie = function() {

	var that = Object.create(Trie.prototype);
	that.children = [];

	that.insert = function(aWord, index) {

		if (aWord.length === 0) {
			return;
		}
		if (index === undefined) {
			index = 0
		}

		if (index === aWord.length) {
			return;
		}

		var current = aWord[index]
		if (that.children[current] === undefined) {
			that.children[current] = new Trie();
		}

		var child = that.children[current];
		child.insert(aWord, index+1);

	};

	that.autocomplete = function(word, index) {

		if (word.length === 0) {
			return [];
		}
		if (index === undefined) {
			index = 0;
		}

		var current = word[index];
		var child = that.children[current];

		if (child === undefined) {
			return [];
		}

		if (index === word.length-1) {
			var suggestedWords = [];
			var ans = child.getAllWords(word, suggestedWords);
			return ans;
		}

		return child.autocomplete(word, index+1);
	};

	that.getAllWords = function(thePrefix, suggestedWords) {

		if (thePrefix === undefined ) {
			thePrefix = "";
		}

		if (Object.keys(that.children).length == 0) {
			suggestedWords.push(thePrefix);
		}

		for (var i in that.children) {
			var child = that.children[i];
			var newPrefix = thePrefix + i;
			child.getAllWords(newPrefix, suggestedWords);
		}
		return suggestedWords;
	};

	Object.freeze(that)
	return that;

};
