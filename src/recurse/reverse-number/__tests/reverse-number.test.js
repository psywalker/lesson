import { reverseNumber1, reverseNumber2 } from '../reverse-number';

test('reverseNumber', () => {
  expect(reverseNumber1(2)).toBe(2);
  expect(reverseNumber1(51)).toBe(15);
  expect(reverseNumber2(15)).toBe(51);
  expect(reverseNumber2(2)).toBe(2);
});
