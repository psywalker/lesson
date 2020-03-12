import { pair1, pair2 } from '../pair';

test('pair1', () => {
  expect(pair1().getElem1()).toBe(10);
  expect(pair1().getElem2()).toBe(30);
  expect(pair1().getResult()).toBe(300);

  expect(pair2(2, 3)(2)).toBe(2);
  expect(pair2(2, 3)(3)).toBe(3);
  expect(pair2(2, 3)()).toBe(300);
});
