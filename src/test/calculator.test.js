import { calculator } from '../calculator.js';

describe('calculator module', () => {
  describe('calculator object', () => {
    describe('add function', () => {
      test('adds numbers 1 + 2 => 3', () => {
        expect(calculator.add(1, 2, 3)).toBe(6);
      });
    });

    describe('subtract function', () => {
      test('subtracts numbers 10 - 3 - 2 => 5', () => {
        expect(calculator.subtract(10, 3, 2)).toBe(5);
      });
    });

    describe('divide function', () => {
      test('divides numbers 100 / 5 / 2 => 10', () => {
        expect(calculator.divide(100, 5, 2)).toBe(10);
      });
    });

    describe('multiply function', () => {
      test('multiplies numbers 2 * 3 * 4 => 24', () => {
        expect(calculator.multiply(2, 3, 4)).toBe(24);
      });
    });
  });
});
