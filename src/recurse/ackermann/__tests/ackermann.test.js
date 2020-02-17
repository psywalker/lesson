import ackermann from '../ackermann';

test('ackermann', () => {
  expect(ackermann(0, 4)).toBe(5);
  expect(ackermann(4, 0)).toBe(13);
  expect(ackermann(3, 2)).toBe(29);
  // expect(ackermann(4, 1)).toThrowError('RangeError: Maximum call stack size exceeded');
  // expect(smallestIntDivisior(5)).toBe(5);
  // expect(smallestIntDivisior(9)).toBe(3);
  // expect(smallestIntDivisior(22)).toBe(2);
  // expect(smallestIntDivisior(5)).toBeLessThanOrEqual(5);
  // expect(typeof smallestIntDivisior(5)).toBe('number');
  // expect(5 % smallestIntDivisior(5)).toBe(0);
});
