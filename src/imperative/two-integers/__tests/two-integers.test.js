import twoIntegers from '../two-integers';

test('twoIntegers', () => {
  expect(twoIntegers(5, 1)).toBe('5, 4, 3, 2, 1');
  expect(twoIntegers(1, 5)).toBe('1, 2, 3, 4, 5');
});
