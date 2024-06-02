const { expect } = require('chai');
const filterWords = require("../filterwords.js");

describe("filterWords", () => {
  it("should return the words that do not end with 'er'", () => {
    const newWords1 = ['developer', 'painter', "driver", "student", "nurse"];

    const filteredWords = filterWords(newWords1);
    const expected =  ['student', 'nurse'];

    expect(filteredWords).to.eql(expected);
  });
});
