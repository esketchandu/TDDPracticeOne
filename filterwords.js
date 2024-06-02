function filterWords(words){
 let filteredWords = [];

 for (let i = 0; i < words.length; i++){
  let word = words[i];
  let lastTwoChars = word.slice(-2);
  if(lastTwoChars !== 'er') {
    filteredWords.push(word);
  }
 }
 return filteredWords
}

// Example
// const words = ['developer', 'painter', "driver", "student", "nurse"];
// const filteredWords = filterWords(words);
// console.log(filteredWords); // Output: ['student', 'nurse']

module.exports = filterWords;
