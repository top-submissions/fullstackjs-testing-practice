import { capitalize, reverseString } from '../utils.js';
import { calculator } from '../calculator.js';

describe('utils module', () => {
  describe('capitalize function', () => {
    test('capitalizes first letter of "odin" => "Odin"', () => {
      expect(capitalize('odin')).toBe('Odin');
    });
    test('capitalizes mixed case word "oDiN" => "Odin"', () => {
      expect(capitalize('oDiN')).toBe('Odin');
    });
  });

  describe('reverseString function', () => {
    test('reverses string "odin" => "nido"', () => {
      expect(reverseString('odin')).toBe('nido');
    });
  });
});

describe('calculator module', () => {
  describe('calculator object', () => {
    describe('add function', () => {
      test('adds numbers 1 + 2 => 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
      });
    });
  });
});
