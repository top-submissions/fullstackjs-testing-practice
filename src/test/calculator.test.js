import { calculator } from '../calculator.js';

describe('calculator module', () => {
  describe('calculator object', () => {
    describe('add function', () => {
      test('adds numbers 1 + 2 => 3', () => {
        expect(calculator.add(1, 2, 3)).toBe(6);
      });
    });
  });
});
