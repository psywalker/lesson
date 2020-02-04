export const twoIntegers1 = (a, b) => {
  const iter = (i1, i2) => {
    if (i1 === i2) return i1;
    return i1 > i2
      ? `${i1}, ${iter(i1 - 1, i2)}`
      : `${i1}, ${iter(i1 + 1, i2)}`;
  };
  return iter(Number(a), Number(b));
};

const makeRange = (i1, i2) => {
  if (i1 === i2) return i1;
  return i1 > i2
    ? `${i1}, ${makeRange(i1 - 1, i2)}`
    : `${i1}, ${makeRange(i1 + 1, i2)}`;
};
const parseStringsToIntegers = (...strArgs) => strArgs.map(Number);
export const twoIntegers2 = (a, b, formResult = makeRange, parser = parseStringsToIntegers) => (
  formResult(...parser(a, b))
);

export const twoIntegers3 = (n1, n2) => {
  if (Number(n1) === Number(n2)) return n1;
  return Number(n1) > Number(n2)
    ? `${n1}, ${twoIntegers3(Number(n1) - 1, Number(n2))}`
    : `${n1}, ${twoIntegers3(Number(n1) + 1, Number(n2))}`;
};
