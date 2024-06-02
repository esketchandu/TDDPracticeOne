const { expect } = require('chai');
const reverseWords = require("../reversearry.js");
//const { it } = require('mocha');
//const { describe } = require('mocha');

describe("reverseWords", () => {
  it("should return the reverse of the word array", () => {
    const newWords1 = ['one', 'three', 'two'];
    const newWords2 = ['start', 'middle', 'end'];

    const wordsRever1 = reverseWords(newWords1);
    const expected1 = [ 'two', 'three', 'one' ];
    const wordsRever2 = reverseWords(newWords2);
    const expected2 = [ 'end', 'middle', 'start' ];

    expect(wordsRever1).to.eql(expected1);
    expect(wordsRever2).to.eql(expected2);
  });
});
