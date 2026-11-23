let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let letterFunction = words.filter((count)=>count.length >= 5 )
  console.log(letterFunction);
  return letterFunction
  // Start coding here
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
