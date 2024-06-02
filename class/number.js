class NumberManipulator {
  constructor(number) {
    this.number = number;
  }

  add(num){
    return this.number + num;
  }

  multiply(num){
    return this.number * num;
  }

  subtract(num){
    return this.number - num;
  }

  divide(num){
    if(num === 0) {
      throw new Error("Division by Zero not possible");
    }
    return this.number / num;
  }
}

// Example :
// const number = new NumberManipulator(20);
// console.log(number.multiply(5));  // Output: 100
// console.log(number.add(5));       // Output: 25
// console.log(number.subtract(5));  // Output: 15
// console.log(number.divide(5));    // Output: 4

module.exports = NumberManipulator ;
