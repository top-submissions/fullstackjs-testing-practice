import { capitalize, reverseString, caesarCipher } from '../modules/utils.js';

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
});
