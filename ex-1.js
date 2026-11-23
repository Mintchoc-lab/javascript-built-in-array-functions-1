let words = ["hello", "world"];

function getWordLengths(words) {
  let letter = " ";
  const letterMap = words.map((count)=> count.length + letter)
  //console.log(letterMap);
  return letterMap
  // Start coding here
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
