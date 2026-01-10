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
  });
});
