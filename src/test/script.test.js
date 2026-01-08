import { capitalize } from '../utils.js';

describe('utils module', () => {
  describe('capitalize function', () => {
    test('first letter of "odin" is capitalized (Odin)', () => {
      expect(capitalize('odin')).toBe('Odin');
    });
  });
});
