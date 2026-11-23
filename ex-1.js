let words = ["hello", "world"];

function getWordLengths(words) {
    return words.map(function (word) {
    return word.length;
  });
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
