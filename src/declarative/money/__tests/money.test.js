import money from '../money';

test('money', () => {
  expect(typeof money(100)).toBe('object');
  expect(money(100).add(10).add(10).format('eur')).toBe('1,33 €');
  expect(money(100).add(100).subtract(10).format('usd')).toBe('2,38 $');
  expect(money(100).add(100).subtract(10).format('rub')).toBe('190,00 ₽');
});
