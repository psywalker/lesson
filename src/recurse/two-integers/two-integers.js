export const twoIntegers = (n1, n2) => {
  const iter = (num1, num2) => {
    if (num1 === num2) return num1;
    return Number(num1) > Number(num2)
      ? `${num1}, ${iter(Number(num1) - 1, Number(num2))}`
      : `${num1}, ${iter(Number(num1) + 1, Number(num2))}`;
  };
  return iter(n1, n2);
};

export const twoIntegers2 = (n1, n2) => {
  if (Number(n1) === Number(n2)) return n1;
  return Number(n1) > Number(n2)
    ? `${n1}, ${twoIntegers2(Number(n1) - 1, Number(n2))}`
    : `${n1}, ${twoIntegers2(Number(n1) + 1, Number(n2))}`;
};
