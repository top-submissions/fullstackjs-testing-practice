import {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} from '../modules/utils.js';

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

  describe('caesarCipher function', () => {
    test('shifts lowercase letters by 1: "abc" => "bcd"', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('wraps from z to a: "xyz" with shift 3 => "abc"', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('preserves uppercase: "ABC" with shift 1 => "BCD"', () => {
      expect(caesarCipher('ABC', 1)).toBe('BCD');
    });

    test('preserves mixed case: "HeLLo" with shift 3 => "KhOOr"', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('leaves non-alphabetic characters unchanged: "Hello, World!" with shift 3 => "Khoor, Zruog!"', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('handles negative shifts: "bcd" with shift -1 => "abc"', () => {
      expect(caesarCipher('bcd', -1)).toBe('abc');
    });

    test('handles large shifts (greater than 26): "abc" with shift 27 => "bcd"', () => {
      expect(caesarCipher('abc', 27)).toBe('bcd');
    });

    test('preserves spaces and punctuation: "Hello World!" with shift 5 => "Mjqqt Btwqi!"', () => {
      expect(caesarCipher('Hello World!', 5)).toBe('Mjqqt Btwqi!');
    });
  });

  describe('analyzeArray function', () => {
    test('returns correct object for [1, 8, 3, 4, 2, 6]', () => {
      const result = analyzeArray([1, 8, 3, 4, 2, 6]);
      expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });

    test('calculates average correctly for decimal results', () => {
      const result = analyzeArray([1, 2, 3, 4, 5]);
      expect(result.average).toBe(3);
    });

    test('finds minimum value correctly', () => {
      const result = analyzeArray([10, 5, 8, 3, 12]);
      expect(result.min).toBe(3);
    });

    test('finds maximum value correctly', () => {
      const result = analyzeArray([10, 5, 8, 3, 12]);
      expect(result.max).toBe(12);
    });

    test('returns correct length', () => {
      const result = analyzeArray([1, 2, 3, 4, 5, 6, 7]);
      expect(result.length).toBe(7);
    });

    test('handles array with single element', () => {
      const result = analyzeArray([42]);
      expect(result).toEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1,
      });
    });

    test('handles negative numbers', () => {
      const result = analyzeArray([-5, -2, -10, -1]);
      expect(result).toEqual({
        average: -4.5,
        min: -10,
        max: -1,
        length: 4,
      });
    });

    test('handles mixed positive and negative numbers', () => {
      const result = analyzeArray([-3, 0, 3, 6]);
      expect(result).toEqual({
        average: 1.5,
        min: -3,
        max: 6,
        length: 4,
      });
    });

    test('returns null for empty array', () => {
      expect(analyzeArray([])).toBe(null);
    });

    test('returns null for non-array input', () => {
      expect(analyzeArray('not an array')).toBe(null);
    });
  });
});
