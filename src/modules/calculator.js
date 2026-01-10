let calculator = {
  add: function (...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  },
  subtract: function (...numbers) {
    return numbers.reduce((diff, number) => diff - number);
  },
  divide: function (...numbers) {
    return numbers.reduce((quotient, number) => quotient / number);
  },
  multiply: function (...numbers) {
    return numbers.reduce((product, number) => product * number, 1);
  },
};

export { calculator };
