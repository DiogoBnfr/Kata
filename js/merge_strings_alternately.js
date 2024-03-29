/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var word1 = "abc";
var word2 = "pqrtu";

var mergeAlternately = function(word1, word2) {
	let merge = "";
	let len = word1.length > word2.length ? word1.length : word2.length;
	for (let i = 0; i < len; i++) {
		if (word1.length <= i)
			return merge += word2.substring(i);
		if (word2.length <= i)
			return merge += word1.substring(i);
		merge += word1[i] + word2[i];
	}
	return merge;
}

console.log(mergeAlternately(word1, word2));
