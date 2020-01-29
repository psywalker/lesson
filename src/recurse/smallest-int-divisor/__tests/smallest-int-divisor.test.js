import smallestIntDivisior from '../smallest-int-divisor';

test('smallestIntDivisior empty argument', () => {
  expect(smallestIntDivisior()).toBeNull();
  expect(smallestIntDivisior('5')).toBeNull();
  expect(smallestIntDivisior(1)).toBe(1);
  expect(smallestIntDivisior(5)).toBe(5);
  expect(smallestIntDivisior(9)).toBe(3);
  expect(smallestIntDivisior(22)).toBe(2);
  expect(smallestIntDivisior(5)).toBeLessThanOrEqual(5);
  expect(typeof smallestIntDivisior(5)).toBe('number');
  expect(5 % smallestIntDivisior(5)).toBe(0);
});
