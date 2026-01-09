let calculator = {
  add: function (...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  },
};

export { calculator };
