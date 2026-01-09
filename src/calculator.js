let calculator = {
  add: function (...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  },
  subtract: function (...numbers) {
    return numbers.reduce((diff, number) => diff - number);
  },
};

export { calculator };
