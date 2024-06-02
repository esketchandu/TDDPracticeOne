// This function takes in an array of words and returns a new array with the words reversed

function reverseWords(words) {
  //let incomingWords = words.join(',');
  let wordsReversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
      wordsReversed.push(words[i]);
  }
  return wordsReversed;
}

// const newWords = ['one', 'three', 'two']
// console.log(reverseWords(newWords)); // [ 'two', 'three', 'one' ]

module.exports = reverseWords;
