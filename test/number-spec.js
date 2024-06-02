const { expect } = require('chai');
const NumberManipulator = require("../class/number.js");


describe("NumberManipulator", function () {
  describe("NumberManipulator constructor function", function () {
    it('should have a "number" property', function () {
      let newNumber = new NumberManipulator(20);
      expect(newNumber).to.exist;

    });

    it('should set the "number" property when a new instance object is created', function () {
      let newNumber1 = new NumberManipulator(20);
      expect(newNumber1.number).to.exist;
    });
  });

  describe("add", function () {
    it("should return the sum of the two numbers", function () {
      let newNumber2 = new NumberManipulator(20);
      expect(newNumber2.add(5)).to.eql(25)
    });
  });

  describe("multiply", function () {
    it("should return the product of the two numbers", function () {
      let newNumber2 = new NumberManipulator(20);
      expect(newNumber2.multiply(5)).to.eql(100);
    });
  });

  describe("subtract", function () {
    it("should return the difference of the two numbers", function () {
      let newNumber3 = new NumberManipulator(20);
      expect(newNumber3.subtract(5)).to.eql(15);
    });
  });

  describe("divide", function () {
    it("should return the quotient of the two numbers", function () {
      let newNumber4 = new NumberManipulator(20);
      expect(newNumber4.divide(5)).to.eql(4);
    });
  });
});
