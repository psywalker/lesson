import { twoIntegers1, twoIntegers2, twoIntegers3 } from '../two-integers';

test('twoIntegers1', () => {
  expect(twoIntegers1('5', '1')).toBe('5, 4, 3, 2, 1');
  expect(twoIntegers1('1', '5')).toBe('1, 2, 3, 4, 5');
});

test('twoIntegers2', () => {
  expect(twoIntegers2('5', '1')).toBe('5, 4, 3, 2, 1');
  expect(twoIntegers2('1', '5')).toBe('1, 2, 3, 4, 5');
});

test('twoIntegers3', () => {
  expect(twoIntegers3('5', '1')).toBe('5, 4, 3, 2, 1');
  expect(twoIntegers3('1', '5')).toBe('1, 2, 3, 4, 5');
});